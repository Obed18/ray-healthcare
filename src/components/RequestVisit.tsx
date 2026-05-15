import React from "react";
import "../styles/BookScreening.css";
import { CheckCircle } from "lucide-react";
import ProgramCard from "../components/ProgramCard";


const BookScreening: React.FC = () => {
  return (
    <section className="book-section">
      <ProgramCard />
      <div className="book-container">
        {/* LEFT SIDE */}
        <div className="book-left">
          <div className="info-list">
            <h2>What to expect</h2>
            <div className="info-card">
              <h4>Pre-Visit Planning</h4>
              <p>
                We'll work with you to plan the visit, coordinate logistics, and prepare materials tailored to your community's needs.
              </p>
            </div>

            <div className="info-card">
              <h4>Professional Team</h4>
              <p>
                Our qualified healthcare professionals bring all necessary equipment and provide high-quality screening services.
              </p>
            </div>

            <div className="info-card">
              <h4>Follow-up Support</h4>
              <p>
                We provide detailed reports, referral information, and ongoing support to ensure continuity of care.
              </p>
            </div>
          </div>
          <div className="requirements-list">
            <h2>Visit Requirements</h2>
            <ul>
              <li> <CheckCircle size={15} /> Minimum 2 weeks advance notice.</li>
              <li> <CheckCircle size={15} /> Suitable venue with adequate space.</li>
              <li> <CheckCircle size={15} /> Local coordinator for logistics.</li>
              <li> <CheckCircle size={15} /> Participant registration assistance.</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="book-right">
          <form className="booking-form">
            <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="City, Region" />
            </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="form-group">
              <label>Organization / School</label>
              <input type="text" placeholder="Enter organization name" />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="City, Region" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expected Participants</label>
                <input type="number" placeholder="Approximate number" />
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-group">
              <label>Additional Information</label>
              <textarea placeholder="Any special requirements or additional information.." />
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookScreening;
