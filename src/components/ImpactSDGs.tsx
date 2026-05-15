import React, { useState } from "react";
import "../styles/ImpactSDGs.css";

type SDG = {
  id: number;
  tag: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  keyImpact: string;
  color: string;
};

const sdgs: SDG[] = [
  {
    id: 1,
    tag: "Economic",
    title: "No Poverty",
    description:
      "By providing free or affordable eye care to underserved populations, we help individuals maintain their health, stay employed, and reduce the economic burden on families—breaking the cycle of poverty through better vision.",
    stats: [
      { value: "1000+", label: "Beneficiaries" },
      { value: "25", label: "Locations" },
      { value: "92%", label: "Success Rate" },
    ],
    keyImpact: "1000+ people received free screenings.",
    color: "#E5243B",
  },
  {
    id: 3,
    tag: "Health",
    title: "Good Health and Well-being",
    description:
      "We promote lifelong health by detecting and treating preventable eye conditions early. Access to timely eye care reduces the risk of permanent vision loss and improves overall quality of life for children and adults alike.",
    stats: [
      { value: "200+", label: "Beneficiaries" },
      { value: "20", label: "Locations" },
      { value: "95%", label: "Success Rate" },
    ],
    keyImpact: "200+ referrals to treatment facilities.",
    color: "#4C9F38",
  },
  {
    id: 4,
    tag: "Education",
    title: "Quality Education",
    description:
      "Children with uncorrected vision problems often struggle in school. Through school-based eye screenings and treatment, we help students see clearly, learn better, and reach their full academic potential.",
    stats: [
      { value: "1200+", label: "Beneficiaries" },
      { value: "50", label: "Locations" },
      { value: "88%", label: "Success Rate" },
    ],
    keyImpact: "50+ schools with improved student performance.",
    color: "#C5192D",
  },
  {
    id: 5,
    tag: "Social",
    title: "Gender Equality",
    description:
      "Women and girls often face greater barriers to accessing healthcare. Our outreach programs ensure that eye care reaches everyone—regardless of gender—empowering women and girls to lead healthy, productive lives.",
    stats: [
      { value: "750+", label: "Beneficiaries" },
      { value: "40", label: "Locations" },
      { value: "90%", label: "Success Rate" },
    ],
    keyImpact: "60% of beneficiaries are women and girls.",
    color: "#FF3A21",
  },
  {
    id: 8,
    tag: "Economic",
    title: "Decent Work and Economic Growth",
    description:
      "Clear vision is essential for many forms of employment. By preventing vision loss, we help people remain in the workforce, support their families, and contribute to economic development.",
    stats: [
      { value: "300+", label: "Beneficiaries" },
      { value: "20", label: "Locations" },
      { value: "85%", label: "Success Rate" },
    ],
    keyImpact: "85% of treated patients returned to work.",
    color: "#A21942",
  },
  {
    id: 10,
    tag: "Social",
    title: "Reduced Inequalities",
    description:
      "We bring eye care directly to marginalized communities, schools, and remote areas—ensuring equitable access to health services for those who need it most, regardless of income or location.",
    stats: [
      { value: "600+", label: "Beneficiaries" },
      { value: "15", label: "Locations" },
      { value: "90%", label: "Success Rate" },
    ],
    keyImpact: "15+ underserved communities reached.",
    color: "#DD1367",
  },
];

const ImpactSDGs: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="impact-sdg-section">
      {/* Top Tag */}
      <div className="sdg-top-section">
      <div className="impact-sdg-tag">
        <span className="impact-dot"></span>
        UN Sustainable Development Goals
      </div>

      {/* Heading */}
      <h2>Our Impact on the SDGs</h2>
      <p className="impact-sdg-description">
        We're committed to advancing the United Nations Sustainable Development
        Goals through accessible eye care, creating lasting change in
        communities worldwide.
      </p>

      {/* Stats Overview */}
      <div className="impact-sdg-stats">
        <div><h3>1000+</h3><p>Total Beneficiaries</p></div>
        <div><h3>10+</h3><p>Locations Served</p></div>
        <div><h3>6</h3><p>SDGs Addressed</p></div>
        <div><h3>91%</h3><p>Avg Success Rate</p></div>
      </div>
      </div>

      {/* SDG Cards */}
      <div className="impact-sdg-grid">
        {sdgs.map((sdg, index) => {
          const isExpanded = expanded === index;

          return (
            <div
              key={index}
              className="impact-sdg-card"
              style={{ borderColor: sdg.color }}
            >
              {/* Top Row */}
              <div className="impact-sdg-top">
                <span
                  className="impact-sdg-number"
                  style={{ background: sdg.color }}
                >
                  {sdg.id}
                </span>

                <span
                  className="impact-sdg-category"
                  style={{
                    background: `${sdg.color}20`,
                    color: sdg.color,
                  }}
                >
                  {sdg.tag}
                </span>
              </div>

              <h3>{sdg.title}</h3>

              {/* Description */}
              <p className={`impact-desc ${isExpanded ? "expanded" : ""}`}>
                {sdg.description}
              </p>

              <span
                className="impact-toggle"
                onClick={() =>
                  setExpanded(isExpanded ? null : index)
                }
              >
                {isExpanded ? "Show less" : "Show more"}
              </span>

              {/* Stats */}
              <div className="impact-card-stats">
                {sdg.stats.map((stat, i) => (
                  <div key={i}>
                    <h4>{stat.value}</h4>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Bottom Card */}
              <div
                className="impact-box"
                style={{
                  background: `linear-gradient(135deg, ${sdg.color}, ${sdg.color}80)`,
                }}
              >
                <h4>Key Impact</h4>
                <p>{sdg.keyImpact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImpactSDGs;