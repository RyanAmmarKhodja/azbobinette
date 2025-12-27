import React from "react";

function SecondaryButton(props) {
  const buttonStyle = {
    backgroundColor: "rgba(255,255,255,0)",
    color: "white",
    border: "2px solid #ff751f",
    color: "#ff751f",
    padding: ".5em 1em .5em 1em",
    fontWeight: "600",
    textDecoration:"none"
    
  };
  return (
    <>
      <a style={buttonStyle} href={props.link}>{props.text}</a>
    </>
  );
}

export default SecondaryButton;
