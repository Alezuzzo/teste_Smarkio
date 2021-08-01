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

  console.log(allComments);

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
    console.log(text);
    let response = await fetch("http://localhost:3333/new", settings);
    setText("");
    getAll();
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
          {allComments.length > 0 && allComments.map((item) => (
            <div class="card">
              <p class="comments">
                {item.comment}
              </p>
              <button class="buttonListen">Ouvir</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
