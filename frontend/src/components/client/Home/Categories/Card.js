import React from "react";
import "./Card.css";

function Card(props) {
  const cardStyle = {
    backgroundImage: ` linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ), url(${props.img}) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    height: "20em",
    width: "14em",
    margin: "1em",
    borderRadius: ".8em",
  };
  return (
    <div
      style={cardStyle}
      className="category-card d-flex flex-column justify-content-center p-3"
    >
      <div className="inner">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
