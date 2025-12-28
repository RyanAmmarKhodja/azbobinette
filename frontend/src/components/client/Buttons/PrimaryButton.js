import React from "react";
import "./Button.css"

function PrimaryButton(props) {
  const buttonStyle = {
    backgroundColor: "#ff751f",
    border: "2px solid #ff751f",
    color: "white",
    padding: ".5em 1em .5em 1em",
    fontWeight: "550",
    marginRight:"1em",
    textDecoration:"none"
  };
  return (
    <>
      <a style={buttonStyle} href={props.link} className="primary-button">{props.text}</a>
    </>
  );
}

export default PrimaryButton;
