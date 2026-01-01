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
        position:"relative"
      }}
    >
      
        <div className="container d-flex flex-column h-100 text-white header" >
          <h1 className="display-1">Les Animaux</h1>
          <div>
            <p>Découvrir notre incroyable collection d'animaux</p>
          <a className="text-center mt-3" href="#catalogue" style={{width:"10rem"}}>Découvrir <ChevronsDown /></a>
          </div>
          
        </div>
    </div>
  );
}

export default CatalogueHero;
