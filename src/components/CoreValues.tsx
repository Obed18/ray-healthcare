import React from "react";
import "../styles/CoreValues.css";

type CoreValue = {
  title: string;
  subtitle: string;
};

const coreValues: CoreValue[] = [
  {
    title: "Accessibility",
    subtitle:
      "We bring healthcare directly to communities, ensuring everyone has access regardless of location or income.",
  },
  {
    title: "Equity",
    subtitle:
      "We prioritize underserved populations and work to eliminate healthcare disparities in our communities.",
  },
  {
    title: "Empowerment",
    subtitle:
      "We educate and empower individuals with knowledge and resources to maintain their eye health.",
  },
  {
    title: "Community Partnership",
    subtitle:
      "We collaborate with local organizations, schools, and leaders to create sustainable health solutions.",
  },
  {
    title: "Quality Assurance",
    subtitle:
      "We maintain the highest standards of care while ensuring services remain affordable and accessible.",
  },
  {
    title: "Innovation",
    subtitle:
      "We continuously seek new ways to improve healthcare delivery and reach more communities effectively.",
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="core-values">
      <div className="container">
        <div className="header">
          <h2>Our Core Values</h2>
          <p>
            These fundamental principles guide everything we do and shape how we
            serve our communities.
          </p>
        </div>

        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;