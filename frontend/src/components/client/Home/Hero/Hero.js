import React from "react";
import "./Hero.css";
import PrimaryButton from "../../PrimaryButton";
import SecondaryButton from "../../SecondaryButton"


const Hero = () => {
  

  return (
    <div
      className="hero"
      style={{backgroundImage:"url('hero.jpg')"}}
    >
      
          <div className="hero-content">
            <h1 className="mb-3 display-5 font-weight-bold">
              Découvrez de près les plus grandes créatures du monde.
            </h1>
            <hr />
            <p className="mb-4 white">
              Découvrez de nouvelles aventures et embarquez pour un voyage
              inoubliable avec nous.
            </p>
            <div style={{textAlign:"left",width:"100%"}}>
              <PrimaryButton text="BOOK A TICKET"/>
              <SecondaryButton text="EXPLORE OUR ZOO" link="#desc"/>
            </div>
            
          </div>
        
      </div>
   
  );
};

export default Hero;
