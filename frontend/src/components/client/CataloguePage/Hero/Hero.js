import { ChevronsDown } from "lucide-react";
import "./Hero.css";
import React from "react";

function CatalogueHero() {
  const overlayColor = "rgba(0, 0, 0, 0.5)";

  return (
    <div
      style={{
        height: "65vh",
        backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(peacock.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       
      }}
    >
      <div className="container d-flex flex-column h-100 text-white header">
        <div className="row">
          <div className="col-sm-8 col-md-6 d-flex" style={{flexDirection:"column"}}>
            <h1 className="display-1">Les Animaux</h1>
            <p>Découvrir notre incroyable collection d'animaux</p>
          </div>
          <div className="col">
            <a
              className="text-center mt-3"
              href="#catalogue"
            >
              Découvrir <ChevronsDown />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogueHero;
