import React from "react";
// import { Linkedin, Twitter, Mail } from "lucide-react";
import { teamMembers, kumasiMembers, boardMembers } from "../data/content";
import { images } from "../data/images";
import "../styles/Team.css";

const Team: React.FC = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Administrative Body</h2>
          <p className="team-subtitle">
            Meet the passionate individuals who generously donate their time, skills, and hearts to transform eye care across Ghana.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-member fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="team-image-wrapper">
                <img
                  src={images.team[member.image]}
                  alt={member.name}
                  className="team-image"
                />
                {/* <div className="team-overlay">
                  <a href="#" className="social-icon">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="social-icon">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-icon">
                    <Mail size={20} />
                  </a>
                </div> */}
              </div>

              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              {/* <p className="member-bio">{member.bio}</p> */}
            </div>
          ))}
        </div>
        <div className="kumasi-team-header">
          <h2 className="team-title">KNUST-CHAPTER EXECUTIVES</h2>
        </div>
        <div className="team-grid">
          {kumasiMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-member fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="team-image-wrapper">
                <img
                  src={images.team[member.image]}
                  alt={member.name}
                  className="team-image"
                />
                {/* <div className="team-overlay">
                  <a href="#" className="social-icon">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="social-icon">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-icon">
                    <Mail size={20} />
                  </a>
                </div> */}
              </div>

              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              {/* <p className="member-bio">{member.bio}</p> */}
            </div>
          ))}
        </div>

        <div className="kumasi-team-header">
          <h2 className="team-title">BOARD</h2>
        </div>
        <div className="team-grid">
          {boardMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-member fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="team-image-wrapper">
                <img
                  src={images.team[member.image]}
                  alt={member.name}
                  className="team-image"
                />
                {/* <div className="team-overlay">
                  <a href="#" className="social-icon">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="social-icon">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-icon">
                    <Mail size={20} />
                  </a>
                </div> */}
              </div>

              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
