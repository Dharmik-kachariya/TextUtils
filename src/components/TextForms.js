import React, { useState } from "react";

export default function TextForms(prop) {
  const handleUpClick = () => {
    setText("You have click handleUpClick.");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h2>{prop.heading}-</h2>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          value={text}
          rows="8"
        ></textarea>

        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>
          Convert to upperCase
        </button>

        <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>
          Convert to lowerCase
        </button>

         <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>
          Clear Text
        </button>
         <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text summary</h3>
        <p>{text.split("").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split("").length} minutes read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
