import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [allComments, setAllComments] = useState([]);

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
    console.log(response);
    if (response) {
      listenAudio(id);
    }
  };

  const listenAudio = (id) => {
    var audio = new Audio(`../front-smarkio/audio/ ${id}.wav`);
    audio.play();

    // const playPromise = audio.play();

    //   if (playPromise !== undefined) {
    //     playPromise
    //       .then(_ => {
    //         // Automatic playback started!
    //         // Show playing UI.
    //         console.log("audio played auto");
    //       })
    //       .catch(error => {
    //         // Auto-play was prevented
    //         // Show paused UI.
    //         console.log("playback prevented");
    //       });
    //   }
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div class="container">
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
