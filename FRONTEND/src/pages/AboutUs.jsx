import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <main>
      <Hero
        title="Learn More About Us | Sally Medical Health"
        imageUrl="/about.png"
      />
      <Biography imageUrl="/whoweare.png" />
    </main>
  );
};

export default AboutUs;
