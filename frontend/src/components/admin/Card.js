import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={`card text-white bg-${props.type=="animals" ? "info" : "primary"} mb-3`} style={{ maxWidth: "20rem" }}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">13 {props.type} Listed</h4>
        {/* <a href="#" className="stretched-link" style={{ color: "White" }}>Plus d'info</a> */}
        <NavLink to={`/${props.type}`} className="stretched-link" style={{ color: "White" }}>Plus d'info</NavLink>
      </div>
    </div>
  );
};

export default Card;
