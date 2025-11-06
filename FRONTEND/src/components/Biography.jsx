import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="Who We Are" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Sally Medical Health is a leading healthcare provider committed to
          delivering high-quality medical services to our community. With a
          team of skilled professionals and state-of-the-art facilities, we
          prioritize the well-being of every patient.
        </p>
        <p>
          Our services include general medicine, pediatrics, maternity care,
          surgical procedures, and specialized clinics. We combine modern
          technology with compassionate care to ensure the best outcomes.
        </p>
        <p>
          At Sally Medical Health, we believe that healthcare should be
          accessible, patient-centered, and focused on long-term wellness.
          Education, prevention, and personalized treatment plans are at the
          heart of our approach.
        </p>
        <p>
          Our commitment extends beyond the hospital walls, with community
          outreach programs, health awareness campaigns, and patient education
          workshops to promote a healthier society.
        </p>
        <p>
          We are dedicated to providing care where the patient's health comes
          first, and where compassion and expertise go hand-in-hand.
        </p>
      </div>
    </div>
  );
};

export default Biography;
