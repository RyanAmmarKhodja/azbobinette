import { ChevronsDown } from "lucide-react";
import React from "react";

function CatalogueHero() {
  const overlayColor = "rgba(0, 0, 0, 0.5)";

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(peacock.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="d-flex flex-column justify-content-center align-items-center h-100 text-white text-center">
          <h1 className="display-1">Les Animaux</h1>
          <p>Découvrir notre incroyable collection d'animaux</p>
          <a className="btn btn-jungle mt-3" href="#catalogue" style={{width:"10rem"}}>Découvrir <ChevronsDown /></a>
        </div>
    </div>
  );
}

export default CatalogueHero;
