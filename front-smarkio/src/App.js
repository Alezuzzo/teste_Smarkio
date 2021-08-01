import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [id, setId] = useState(0);
  const getAll = async () => {
    let response = await fetch("http://localhost:3333/all");
    let resJSON = await response.json();
    setAllComments(resJSON);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const createComment = async () => {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    };

    await fetch("http://localhost:3333/new", settings);
    setText("");
    getAll();
  };

  const createAudio = async (id, text) => {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, id }),
    };

    let response = await fetch("http://localhost:3333/play", settings);
    let resJSON = await response.json();

    if (resJSON) {
      listenAudio(id);
    }
  };

  const listenAudio = async (id) => {
    setId(id);
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div class="container">
      <ReactAudioPlayer
        src={process.env.PUBLIC_URL + `/audio/${id}.wav`}
        autoPlay={id !== 0 ? true : false}
      />
      <div class="commentArea">
        <span>Comentários</span>
        <textarea
          onChange={handleChangeText}
          value={text}
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={createComment} class="buttonCad">
          Cadastrar
        </button>
      </div>
      <div class="line"></div>
      <div class="allComments">
        <span>Comentários</span>

        <div>
          {allComments.length > 0 &&
            allComments.map((item) => (
              <div class="card">
                <p class="comments">{item.comment}</p>
                <button
                  onClick={() => {
                    createAudio(item.id, item.comment);
                  }}
                  class="buttonListen"
                >
                  Ouvir
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
