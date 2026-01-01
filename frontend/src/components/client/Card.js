import { CirclePlus } from "lucide-react";
import React from "react";
import api from "../../api";

function Card(props) {
  const cardStyle = {
    position: "relative",
    overflow: "hidden",
    color: "white",
    minWidth: "12em",
    height: "26em",
    borderRadius: "0",
    cursor:"pointer"
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
  ), url(http://127.0.0.1:8000/storage/${props.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 0.3s ease, filter 0.3s ease",
    zIndex: 1,
  };

  return (
    <div
      className="col category-card d-flex flex-column justify-content-end p-3 text-start"
      key={props.index}
      style={cardStyle}
      onMouseEnter={(e) => {
        const bg = e.currentTarget.querySelector(".card-background");
        bg.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        const bg = e.currentTarget.querySelector(".card-background");
        bg.style.transform = "scale(1)";
      }}
    >
      <div className="card-background" style={backgroundStyle}></div>{" "}
      
      <div className="inner" style={{ position: "relative", zIndex: 2 }}>
        <h4 style={{ fontWeight: "600" }}>{props.name}</h4>
        <p>{props.description}</p>
      </div>
      {props.link && (
        <a
          onClick={props.onClick}
          className="stretched-link text-decoration-none text-success fw-semibold"
          style={{zIndex:"3"}}
        >
          Voir plus <CirclePlus size={16} />
        </a>
      )}
    </div>
  );
}

export default Card;
