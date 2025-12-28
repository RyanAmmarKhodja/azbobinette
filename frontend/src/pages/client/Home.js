import React from "react";
import Hero from "../../components/client/Home/Hero/Hero";
import ZooAnimalsSection from "../../components/client/CataloguePage/ZooAnimalsSection/ZooAnimalsSection";
import Footer from "../../components/client/Footer";
import Description from "../../components/client/Home/Description/Description";
import Categories from "../../components/client/Home/Categories/Categories"
import Collection from "../../components/client/Home/Collection/Collection";


const Home = () => {
  return (
    <div style={{ backgroundColor: "#F7F7E8", overflowX: "hidden" }}>
      <section className="my-5">
        <Hero />
      </section>

      <section id="desc" className="my-5">
        <Description/>
      </section>
      
      <section id="categories" className="my-5">
        <Categories/>
      </section>

      <section className="my-5">
        <Collection/>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
