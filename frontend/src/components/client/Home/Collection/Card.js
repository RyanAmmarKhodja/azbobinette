import React from "react";

function Card(props) {
  const cardStyle = {
  position: "relative",
  overflow: "hidden",
  color: "white",
  height: `${props.height}`,
  width: `${props.width}`,
  margin: "1em",
  borderRadius: "0",
};

const backgroundStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.0), 
    rgba(0, 0, 0, 0.3)
  ), url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
};

return (
  <div
    style={cardStyle}
    className="category-card d-flex flex-column justify-content-end p-3 text-start"
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
