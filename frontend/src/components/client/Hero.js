import React from "react";

const Hero = () => {
  const overlayColor = "rgba(0, 0, 0, 0.5)";
  return (
    <div
      className="hero-background d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col">
          <h1 className="mb-3 display-4 font-weight-bold">
            Découvrez de près les plus grandes créatures du monde.
          </h1>

          <p className="mb-4 white">
            Découvrez de nouvelles possibilités et embarquez pour un voyage
            inoubliable avec nous.
          </p>

          <button className="btn btn-primary">Commencer</button>
          <button className="btn btn-outline-primary mx-2">
            En savoir plus
          </button>
        </div>
        <div className="col">
            </div>
      </div>
    </div>
  );
};

export default Hero;
