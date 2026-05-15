import React from "react";
import "../styles/ImpactPartners.css";

const partners = [
  {
    tag: "Educational Partner",
    title: "Local Schools Network",
    subtitle:
      "Partnership with 50+ schools across Ghana for regular vision screenings.",
  },
  {
    tag: "Healthcare Partner",
    title: "Community Health Organizations",
    subtitle:
      "Working with local health centers to provide comprehensive care.",
  },
  {
    tag: "Development Partner",
    title: "International NGOs",
    subtitle:
      "Collaborating on sustainable development and capacity building.",
  },
];

const stats = [
  { value: "5+", label: "Active Partners" },
  { value: "50+", label: "Partner Schools" },
  { value: "5", label: "Regions Covered" },
  { value: "100%", label: "Partnership Success" },
];

const ImpactPartners: React.FC = () => {
  return (
    <section className="impact-partners">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Our Partners</h2>
          <p>
            We work with trusted organizations to expand our reach and maximize
            our impact across Ghana.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <span className="partner-tag">{partner.tag}</span>
              <h3>{partner.title}</h3>
              <p>{partner.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="impact-stats">
          <div className="stats-header">
            <h3>Partnership Impact</h3>
            <p>
              Together, we've achieved remarkable results across Ghana.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPartners;