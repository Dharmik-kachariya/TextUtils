import React, { useState } from "react";

export default function TextForms(prop) {
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div>
        <h2>{prop.heading}</h2>
        <textarea className="form-control" id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">Convert to upperCase</button>
    </div>
  );
}
