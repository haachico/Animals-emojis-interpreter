import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐭": "Mouse",
  "🐼": "Panda",
  "🦬": "Bison",
  "🐗": "Boar",
  "🐺": "Wolf",
  "🦦": "Otter"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emojiInput, setEmojiInput] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    const meaning = emojiDictionary[userInput];
    setEmojiInput(meaning);
  }

  function onClickHandler(emoji) {
    const meaning = emojiDictionary[emoji];
    setEmojiInput(meaning);
  }
  return (
    <div className="App">
      <h1>Inside outtt</h1>
      <input onChange={emojiInputHandler} />
      <h2>{emojiInput}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{ cursor: "pointer", padding: "1rem", fontSize: "2rem" }}
            onClick={() => onClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
