import React, { useEffect, useState } from "react";
import Hero from "../../components/client/CataloguePage/Hero/Hero";
import api from "../../api";
import Card from "../../components/client/Card";
import Footer from "../../components/client/Footer";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";
import Filter from "../../components/client/CataloguePage/Filter/Filter";
import { useSearchParams } from "react-router-dom";

const Catalogue = () => {
  const [animals, setAnimals] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [continents, setContinents] = useState([]);
  const [family, setFamily] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const queryContinent = searchParams.get("continent") || "";
  const queryFamily = searchParams.get("family_id") || "";

  useEffect(() => {
    setLoading(true);
    setAnimals("");
    const params = new URLSearchParams();

    if (search) {
      params.append("search", search);
    }
    if (queryFamily) {
      params.append("family_id", queryFamily);
    }
    if (queryContinent) {
      params.append("continent", queryContinent);
    }

    const queryString = params.toString();

    if (queryString) {
      api
        .get(`/animals?${queryString}`)
        .then((response) => {
          setAnimals(response.data.data || response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the animals!", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      api
        .get("/animals")
        .then((response) => {
          setAnimals(response.data.data || response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the animals!", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [search, queryContinent, queryFamily]);

  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="my-4">
        <Filter />
      </section>

      <section
        id="catalogue"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className=" my-5 row mx-5 px-0 gap-2">
          {animals &&
            animals.map((animal, index) => (
              <Card
                img={animal.image_path}
                key={index}
                name={animal.name}
                description={animal.description}
                width="18rem"
                onClick={() => {
                  setTitle(animal.name);
                  setShow(true);
                  setDescription(animal.description);
                  setContinents(animal.continents);
                  setFamily(animal.family.name);
                  setImage(animal.image_path);
                }}
                link={true}
              ></Card>
            ))}
        </div>
      </section>

      <Modal Title={title} show={show} onClose={() => setShow(!show)}>
        <div className="row">
          <div className="col">
            <img
              src={`http://127.0.0.1:8000/storage/${image}`}
              width="600"
              alt={title}
              style={{borderRadius:"1em"}}
            ></img>
          </div>
          <div className="col text-start">
            <h3>{title}</h3>
            <h6>Description</h6>
            <p>{description}</p>
            <h6 className="mt-3">Famille</h6>
            <p>{family}</p>
            <h6>Continents</h6>

            {continents.map((continent, index) => (
              <span key={continent.id}>{continent.name}. </span>
            ))}
          </div>
        </div>
      </Modal>

      <Loading loading={loading} />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Catalogue;
