import React from "react";
import Card from "./Card";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { NavLink } from "react-router-dom";

function Collection() {
  return (
    <>
      <div className="container" style={{ textAlign: "start" }}>
        <h3>Collection</h3>
        <hr style={{ borderWidth: "4px", opacity: "1" }} />
        <p className="text-muted">
          Découvrez une faune incroyable et partagez des moments inoubliables au
          contact de ce monde naturel fascinant
        </p>
        <div className="row">
          <div className="col-md-4 text-md-end">
            <div className="p-4 bg-white shadow-sm text-center ">
              <h2 className="fw-bold mb-3 py-5 text-start">
                LES ANIMAUX DU ZOO
              </h2>
              <hr className="border-2 opacity-100 mb-5" />
              <NavLink
                to="/catalogue"
                className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
              >
                ▸ Explorer le catalogue
              </NavLink>
            </div>

            <Card title="Toucan" img="./toucan.jpg" width="19em" height="25em"/>
          </div>

          <div className="col">
            <Card title="Bald Eagle" img="./bald-eagle.jpg" width="18em" height="22em"/>
            <Card title="Brown Deer" img="./brown-deer.jpg" width="18em" height="24em"/>
          </div>
          <div className="col">
            <Card title="Green Coated Lizard" img="./green-coated-lizard.jpg" width="18em" height="24em"/>
            <Card title="The Mandrill" img="./mandrill.jpg" width="18em" height="22em"/>
          </div>



        </div>
        <div className="w100 text-center my-4">
          <PrimaryButton text="View More" link="catalogue"/>
        </div>
        
      </div>
    </>
  );
}

export default Collection;
