import React from "react";
import Hero from "../../components/client/HomeHero/HomeHero";
import ZooAnimalsSection from "../../components/client/ZooAnimalsSection/ZooAnimalsSection";
import Footer from "../../components/client/Footer";
import HomeDescription from "../../components/client/HomeDescription/HomeDescription";


const Home = () => {
  return (
    <div style={{ backgroundColor: "#F7F7E8", overflowX: "hidden" }}>
      <Hero />

      <section id="desc">
        <HomeDescription />
        
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
