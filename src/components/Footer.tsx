import React from "react";
import "../styles/Footer.css";
import { motion } from "framer-motion";
import { Eye, ArrowRight, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Properly typed icon components
const FacebookIcon = (FaFacebookF as unknown) as React.FC<{ size?: number }>;
const InstagramIcon = (FaInstagram as unknown) as React.FC<{ size?: number }>;
const TwitterIcon = (FaXTwitter as unknown) as React.FC<{ size?: number }>;
const LinkedinIcon = (FaLinkedinIn as unknown) as React.FC<{ size?: number }>;

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* TOP SUBSCRIBE SECTION */}
      <div className="footer-top">
        <motion.div
          className="footer-subscribe"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2>Stay Updated</h2>
            <p>Get the latest eye care tips and clinic updates.</p>
          </div>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* BRAND */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
        <div className="logo-icon">
          <div className="courier-logo">
            <img src="/RAY.png" className="logo-circle" alt="NCL Logo" />
          </div>
        </div>

            <p>
              Making eye care accessible, affordable, and equitable for all communities across Ghana.
            </p>

             <div className="socials">
               <a href="#" className="link-text">
                 <FacebookIcon size={18} />
               </a>

               <a href="#" className="link-text">
                 <InstagramIcon size={18} />
               </a>

               <a href="#" className="link-text">
                 <TwitterIcon size={18} />
               </a>
               <a href="#" className="link-text">
                 <LinkedinIcon size={18} />
               </a>
             </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Our Impactt</li>
              <li>Get Involved</li>
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4>Services</h4>
            <ul>
              <li>Community Screenings</li>
              <li>School Outreach</li>
              <li>Health Education</li>
              <li>Treatment Access</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4>Contact Info</h4>
            <ul>
              <li><Phone size={16} className="icon" /> +233548064492</li>
              <li><Mail size={16} className="icon" />rayhealthcareafrica@gmail.com</li>
              <li><MapPin size={16} className="icon" /> Accra, Ghana</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 R.A.Y. Healthcare. All rights reserved.</p>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
