import React from "react";
import "../styles/Testimonials.css";
import { testimonials } from "../data/content";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  title: string;
}

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-bg" />

      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            More Voices from <span className="text-gradient-green">Our Community</span>.
          </h2>

          {/* <p className="testimonials-subtitle">
            What collaborators, clients and teammates say about working
            together.
          </p> */}
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t: Testimonial, i: number) => (
            <div key={i} className="testimonial-card">
              <Quote size={32} className="quote-icon" />

              <p className="testimonial-text">"{t.quote}"</p>

              <div className="testimonial-footer">
                <div className="avatar">{t.avatar}</div>

                <div className="testimonial-info">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-title">{t.title}</div>
                </div>

                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="testimonial-star-icon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
