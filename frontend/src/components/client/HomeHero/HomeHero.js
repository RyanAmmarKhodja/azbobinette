import React from "react";
import "./HomeHero.css";

const Hero = () => {
  const overlayColor = "rgba(0, 0, 0, 0.5)";

  return (
    <div
      className="text-white text-center hero"
      style={{
        backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(hero.jpg)`}}
    >
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col">
          <h1 className="mb-3 display-4 font-weight-bold">
            Découvrez de près les plus grandes créatures du monde.
          </h1>

          <p className="mb-4 white">
            Découvrez de nouvelles aventures et embarquez pour un voyage
            inoubliable avec nous.
          </p>

          <a className="btn btn-jungle" href="#desc" style={{width:"10rem"}}>Découvrir</a>
          
        </div>
        <div className="col-lg">
            </div>
      </div>
    </div>
  );
};

export default Hero;
