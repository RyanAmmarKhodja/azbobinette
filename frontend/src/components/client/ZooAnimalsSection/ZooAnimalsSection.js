import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Card";
import { NavLink } from "react-router-dom";
import api from "../../../api";
import "./ZooAnimalsSection.css";

const imgSource = "parrots.jpg";

export default function ZooAnimalsSection() {
  const [animals, setAnimals] = React.useState([]);

  useEffect(() => {
    
      api.get(`animals/take`).then((response) => {
        setAnimals(response.data);
      });
    
  }, []);
  return (
    
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-md-6 d-flex " style={{marginRight:"-40px"}}>
            <img src={imgSource} style={{width: "100%", height: "auto", zIndex:"1"}} />
          </div>

          <div className="col-md-6 text-md-end" style={{marginLeft:"-40px", zIndex:"5"}}>
            <div className="p-5 bg-white shadow-sm text-center m-4" >
              <h2 className="fw-bold display-5 mb-3 py-5">
                LES ANIMAUX DU ZOO
              </h2>
              <hr className="border-2 opacity-100 mb-5" />
              <NavLink to="/catalogue" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold" >
                ▸ Découvrir les animaux
              </NavLink>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row g-4">
          {animals.map((animal, index) => (
            <Card key={animal.index} img={animal.image_path} name={animal.name} index={index} style={index % 2 === 0 ? { marginTop: "10px" } : {}} />
          ))}
        </div>
      </div>
    
  );
}
