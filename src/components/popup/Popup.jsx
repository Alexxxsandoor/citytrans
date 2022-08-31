import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import mail from "../../image/mail.svg";

const PopUp = (props) => {
  const { handleOpen = Function.prototype } = props;

  const WORDS_EXCEPTION = ["at", "a", "the", "an", "as"];

  const [count, setCount] = useState(100);
  const [words, setWords] = useState([]);
  const [inputText, setInputText] = useState("");
  const [color, setColor] = useState("black");

  function handleInput(e) {
    let text = e.target.value
      .replace(/[^aA-zZ0-9 ]/gi, "")
      .replace(/  +/g, " ");
    setInputText(text);
    setWords(text.split(" ").filter((x) => !WORDS_EXCEPTION.includes(x)));
  }

  useEffect(() => {
    words.length <= count ? setColor("black") : setColor("red");
  }, [inputText, count]);

  return (
    <div className="popup-background" onClick={() => handleOpen()}>
      <div className="window" onClick={(e) => e.stopPropagation()}>
        <div className="window__header">
          <div className="icon">
            <img src={mail} alt="mail" />
          </div>
        </div>
        <div className="window__inputs">
          <input
            className="value"
            type="number"
            placeholder="Max words count"
            onChange={(e) => setCount(e.target.value)}
          />
          <textarea
            onInput={handleInput}
            value={inputText}
            className="big-text"
            type="text"
            placeholder="Type your text"
            style={{ color: color }}
          />
          <div style={{ color: color }}>
            {words.length}/{count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
