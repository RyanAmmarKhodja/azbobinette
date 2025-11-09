import React from "react";
import Hero from "../../components/client/HomeHero";
import ZooAnimalsSection from "../../components/client/ZooAnimalsSection";
import Footer from "../../components/client/Footer";
import { ChevronsDown } from "lucide-react";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F7F7E8", overflowX: "hidden" }}>
      <Hero />

      <section
      id="desc"
        style={{
          height: "100vh",
          marginTop: "-100px",
          backgroundImage: "url(blob.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "80%",
          backgroundSize: "cover",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{
            padding: "0 14em 0 14em",
          }}
        >
          <h2>Une excellente journée qui fait la différence.</h2>
          <p className="mt-4">
            Ressentez-vous plus proche de la nature au parc d'Azbobinette, un
            parc d'animaux de conservation situé au cœur de l'une des villes les
            plus dynamiques du monde. Découvrez une faune incroyable, apprenez
            comment nous protégeons son avenir et partagez des moments
            inoubliables au contact de ce monde naturel fascinant, peuplé
            d'animaux qui sautent, rugissent et crient.
          </p>

          <a className="btn btn-jungle mt-4" href="#more-info" style={{width:"10rem"}}>
            En savoir plus <ChevronsDown />
          </a>
        </div>
      </section>


      <section
        id="more-info"
        className="py-5"
        style={{ marginTop: "-80px", marginRight: "-80px" }}
      >
        <ZooAnimalsSection />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
