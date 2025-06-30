import React, { useState } from "react";

export default function TextForms(prop) {
  
  const handleUpClick = () =>{
    setText("You have click handleUpClick.")
    let newText = text.toUpperCase();
    setText(newText)
  } 

    const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div>
        <h2>{prop.heading}-</h2>
        <textarea className="form-control" onChange={handleOnChange} id="myBox" value ={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
    </div>
  );
}
