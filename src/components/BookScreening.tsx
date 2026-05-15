import React from "react";
import "../styles/BookScreening.css";

const BookScreening: React.FC = () => {
  return (
    <section className="book-section">
      <div className="book-container">
        {/* LEFT SIDE */}
        <div className="book-left">
          <h2>Book a Screening</h2>
          <p className="book-subtext">
            Ready to bring eye care to your community or school? Fill out the form below and we'll get in touch to schedule a visit.
          </p>

          <div className="info-list">
            <div className="info-card">
              <h4>Flexible Scheduling</h4>
              <p>
                We work around your community's schedule to find the best time for everyone.
              </p>
            </div>

            <div className="info-card">
              <h4>We Come to You</h4>
              <p>
                Our mobile team brings all necessary equipment directly to your location.
              </p>
            </div>

            <div className="info-card">
              <h4>Group Screenings</h4>
              <p>
                Perfect for schools, workplaces, and community organizations.
              </p>
            </div>

            <div className="info-card">
              <h4>Follow-up Support</h4>
              <p>
                We provide ongoing support and connect patients to treatment options.
              </p>
            </div>
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
