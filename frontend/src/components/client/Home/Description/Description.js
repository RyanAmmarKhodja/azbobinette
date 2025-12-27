import React from "react";
import { ChevronsDown } from "lucide-react";
import PrimaryButton from "../../PrimaryButton";

function HomeDescription() {
  return (
    <>
      <div className="row my-5">
        <div className="col-6 d-flex justify-content-end">
          <img src="bird.png" alt="" className="img-fluid" style={{height:"85%"}}/>
        </div>
        <div
          className="col-6 d-flex align-items-center"
          
        >
          <div style={{ maxWidth: "60%", textAlign:"start" }}>
            <h1 className="display-6 " style={{ fontWeight: "700" }} >
              UNE EXCELLENTE JOURNÉE QUI FAIT LA DIFFÉRENCE.
            </h1>

            <p className="my-4 mb-5">
              Ressentez-vous plus proche de la nature au parc d'Azbobinette.
            </p>

            <PrimaryButton text="EXPLORE OUR ANIMALS" link="#categories"/>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default HomeDescription;
