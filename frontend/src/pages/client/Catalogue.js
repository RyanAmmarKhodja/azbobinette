import React, { useEffect } from "react";
import CatalogueHero from "../../components/client/CatalogueHero";
import api from "../../api";
import Card from "../../components/client/Card";
import Footer from "../../components/client/Footer";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";

const Catalogue = () => {
  const [animals, setAnimals] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [continents, setContinents] = React.useState([]);
  const [family, setFamily] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("/animals")
      .then((response) => {
        setAnimals(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the animals!", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <section>
        <CatalogueHero />
      </section>

      <section id="catalogue">
        <div className="d-flex gap-4 m-5">
          {animals.map((animal, index) => (
            <Card
              key={index}
              name={animal.name}
              width="18rem"
              onClick={() => {
                setTitle(animal.name);
                setShow(true);
                setDescription(animal.description);
                setContinents(animal.continents);
                setFamily(animal.family.name);
              }}
              link={true}
            ></Card>
          ))}
        </div>
      </section>
      <Modal Title={title} show={show} onClose={() => setShow(!show)}>
        <h6>Description</h6>
        <p>{description}</p>
        <h6 className="mt-3">Famille</h6>
        <p>{family}</p>
        <h6>Continents</h6>
        
          {continents.map((continent, index) => (
            <span key={continent.id}>{continent.name}. </span>
          ))}
        
        
      </Modal>
      
      
      
      <Loading loading={loading} />
      {error && <div className="alert alert-danger" role="alert">{error.message}</div>}
      <Footer />
    </div>
  );
};

export default Catalogue;
