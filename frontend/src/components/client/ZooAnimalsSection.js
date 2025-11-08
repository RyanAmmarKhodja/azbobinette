import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const animals = [
  {
    name: "Vipère aspic",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Vipera_aspis_aspis1.jpg",
  },
  {
    name: "Otarie à fourrure australe",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Arctocephalus_tropicalis_-_Cape_Fur_Seal.jpg",
  },
  {
    name: "Fossa de Madagascar",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Fossa_Fossa.jpg",
  },
  {
    name: "Loup gris",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Canis_lupus_lupus_qtl1.jpg",
  },
];

export default function ZooAnimalsSection() {
  return (
    <section
      className="py-5"
      style={{ marginTop: "-80px", marginRight: "-80px" }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 d-flex">
          
          </div>

          <div className="col-md-6 text-md-end">
            <div className="p-5 bg-white shadow-sm text-center">
              <h2 className="fw-bold display-5 mb-3 py-5">
                LES ANIMAUX DU ZOO
              </h2>
              <hr className="border-2 opacity-100 mb-5" />
              <a href="#" className="text-uppercase fw-bold text-danger py-4">
                ▸ Découvrir les animaux
              </a>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row g-4">
          {animals.map((animal, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={animal.img}
                  className="card-img-top"
                  alt={animal.name}
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    borderTopLeftRadius: "0.25rem",
                    borderTopRightRadius: "0.25rem",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-0">{animal.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
