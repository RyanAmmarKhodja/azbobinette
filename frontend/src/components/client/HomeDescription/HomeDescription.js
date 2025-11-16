import React from "react";
import { ChevronsDown } from "lucide-react";
import "./HomeDescription.css";

function HomeDescription() {
  return (
    <>
      <div
        className="_container"
        
      >
        <div>
          <h2>Une excellente journée qui fait la différence.</h2>
          <p className="mt-4">
            Ressentez-vous plus proche de la nature au parc d'Azbobinette, un
            parc d'animaux de conservation situé au cœur de l'une des villes les
            plus dynamiques du monde. Découvrez une faune incroyable, apprenez
            comment nous protégeons son avenir et partagez des moments
            inoubliables au contact de ce monde naturel fascinant, peuplé
            d'animaux qui sautent, rugissent et crient.
          </p>

          <a
            className="btn btn-jungle mt-4"
            href="#more-info"
            style={{ width: "10rem" }}
          >
            En savoir plus <ChevronsDown />
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeDescription;
