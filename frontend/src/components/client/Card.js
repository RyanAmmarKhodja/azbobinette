import React from "react";

function Card(props) {
  return (
    <div className="col-sm-6 col-md-3" key={props.index} style={{width:`${props.width}`, maxHeight: '300px'}}>
      <div className="card border-0 shadow-sm h-100" style={{borderRadius:"0"}}>
        <img
          src={props.img}
          className="card-img-top"
          alt={props.name}
          style={{
            objectFit: "cover",
            height: "200px",
            borderRadius: "0",
            padding: "0"
          }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold mb-0">{props.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
