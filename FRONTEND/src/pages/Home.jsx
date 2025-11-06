import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <main>
      <Hero
        title="Welcome to Sally Medical Health | Your Trusted Healthcare Provider"
        imageUrl="/hero.png"
      />
      <Biography imageUrl="/about.png" />
      <Departments />
      <MessageForm />
    </main>
  );
};

export default Home;
