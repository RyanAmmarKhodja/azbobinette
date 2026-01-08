import React from "react";
import Card from "./Card";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { PawPrint, Dog, LandPlot, Users } from "lucide-react";
import "./Categories.css";

function Categories() {
  const hrStyle = {
    width: "22em",
    borderWidth: "4px",
    color: "#ff751f",
    opacity: "1",
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center pt-5"
        style={{ flexDirection: "column", backgroundColor:"#f9f7f8" }}
      >
        <div className="row" style={{width:"100vw"}}>
          <div className="col">
            <div className="d-flex justify-content-start align-items-end mx-3" style={{height:"16em"}}>
              <h1 className="display-4 text-start" style={{fontWeight:"500"}}>OUR <br />SPECIES</h1>
            </div>
            <div>
              <Card img="./deer.jpg" height="18em"/>
            </div>
          </div>
          <div className="col mt-4 giraffe">
            <Card img="./giraffes.jpg" height="32em"/>
          </div>
          <div className="col text-start">
            <Card img="./tiger.jpg" height="18em"/>
            <div className="mx-3">
                  <h5 style={{fontWeight:"650"}}>EXPLORE</h5>
            <h5 style={{fontWeight:"400"}}>THE DIVERSITY OF THE LIFE WE PROTECT.</h5>
            </div>
        
          </div>
        </div>
        <div className="my-5">
          <PrimaryButton text="DÉCOUVRIR PLUS" link="#stats" />
        </div>

        {/* STATS */}
        <div
          id="stats"
          className="d-flex justify-content-center align-items-center brush-stroke mt-5"
          style={{ width: "100vw", flexDirection: "column" }}
        >
          <div className="row" style={{ width: "80%" }}>
            <div
              className="col d-flex justify-content-center align-items-center mx-4"
              style={{ flexDirection: "column" }}
            >
              <PawPrint width={80} height={80} />
              <h1>400+</h1>
              <h4>Animaux</h4>
            </div>
            <div
              className="col d-flex justify-content-center align-items-center mx-4"
              style={{ flexDirection: "column" }}
            >
              <Dog width={80} height={80} />
              <h1>280+</h1>
              <h4>Especes</h4>
            </div>
            <div
              className="col d-flex justify-content-center align-items-center mx-4"
              style={{ flexDirection: "column" }}
            >
              <LandPlot width={80} height={80} />
              <h1>11</h1>
              <h4>Hectares</h4>
            </div>
            <div
              className="col d-flex justify-content-center align-items-center mx-4"
              style={{ flexDirection: "column" }}
            >
              <Users width={80} height={80} />
              <h1>2M+</h1>
              <h4> Visiteurs</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
