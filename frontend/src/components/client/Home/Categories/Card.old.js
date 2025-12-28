import React from "react";

function Card(props) {
  const cardStyle = {
  position: "relative",
  overflow: "hidden",
  color: "white",
  height: "18em",
  width: "12em",
  margin: "1em",
  borderRadius: ".8em",
};

const backgroundStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.3), 
    rgba(0, 0, 0, 0.3)
  ), url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.3s ease, filter 0.3s ease",
  zIndex: 1,
};

return (
  <div
    style={cardStyle}
    className="category-card d-flex flex-column justify-content-center p-3"
    onMouseEnter={(e) => {
      const bg = e.currentTarget.querySelector('.card-background');
      bg.style.transform = "scale(1.1)";
      bg.style.filter = "blur(4px)";
    }}
    onMouseLeave={(e) => {
      const bg = e.currentTarget.querySelector('.card-background');
      bg.style.transform = "scale(1)";
      bg.style.filter = "blur(0px)";
    }}
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
