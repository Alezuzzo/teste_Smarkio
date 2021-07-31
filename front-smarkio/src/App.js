import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
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
  };
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
          <div class="card">
            <p class="comments">
              lorem ipsum dolor sit amet consectetur atur atur atur atur atur
              atur a lorem ipsum dolor sit amet consectetur atur a lorem ipsum
              dolor sit amet consectetur a lorem ipsum dolor sit.
            </p>
            <button class="buttonListen">Ouvir</button>
          </div>
          <div class="card">
            <p class="comments">
              lorem ipsum dolor sit amet consectetur atur atur atur atur atur
              atur a lorem ipsum dolor sit amet consectetur atur a lorem ipsum
              dolor sit amet consectetur a lorem ipsum dolor sit.
            </p>
            <button class="buttonListen">Ouvir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
