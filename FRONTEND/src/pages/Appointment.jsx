import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <main>
      <Hero
        title="Schedule Your Appointment | Sally Medical Health"
        imageUrl="/signin.png"
      />
      <AppointmentForm />
    </main>
  );
};

export default Appointment;
