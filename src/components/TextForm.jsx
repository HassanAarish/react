import React, { useState } from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UppperCase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text coppied to clipboard!", "success");
  };

  const handleInverseClick = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    props.showAlert("Text inversed!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text-form">
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color: props.mode === "dark" ? "#000000" : "black",
          }}
          id="myBox"
          rows="5"
        ></textarea>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>

        <button className="btn btn-outline-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>

        <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleInverseClick}
        >
          Inverse Text
        </button>

        <button className="btn btn-outline-danger mx-2" onClick={speak}>
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the Textbox above to preview it here"}
        </p>
      </div>
    </div>
  );
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = { heading: "Enter The Text to Analyze Below" };

export default TextForm;
