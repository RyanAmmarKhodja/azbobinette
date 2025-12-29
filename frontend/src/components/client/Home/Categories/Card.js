import React from "react";
import "./Card.css"

function Card(props) {
  const cardStyle = {
  height: `${props.height}`,
  width: `${props.width}`,
};

const backgroundStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.0), 
    rgba(0, 0, 0, 0.0)
  ), url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
};

return (
  <div
    style={cardStyle}
    className="gallery-card d-flex flex-column justify-content-end p-3 text-start"
  >
    <div className="card-background" style={backgroundStyle}></div>
    <div className="inner" style={{ position: "relative", zIndex: 2 }}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  </div>
);
}

export default Card;
