import React from "react";
import Card from "./Card";
import "./Categories.css"

function Categories() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center py-5"
        style={{ flexDirection: "column", backgroundColor: "#f9f7f8" }}
      >
        <h1 style={{ borderBottom: "3px solid #ff751f" }}>OUR SPECIES</h1>

        <p className="my-4">EXPLORE DIVERSITY OF LIFE WE PROTECT</p>

        <div className="card-section">
          <Card title="DOMESTIC" description="Animals close to home" img="domestic.jpg" />
          <Card title="EXOTIC" description="Rare species worldwide" img="exotic.jpg" />
          <Card title="FEROCIOUS" description="Nature's apex predators" img="ferocious.jpg" />
          <Card title="POLAR" description="Life in extreme cold" img="polar.jpg" />
        </div>
      </div>
    </>
  );
}

export default Categories;
