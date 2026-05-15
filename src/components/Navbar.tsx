import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X, BadgeInfo } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/impact", label: "Impact" },
    { path: "/impact-sdgs", label: "SDG" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog", isParent: true },
  ];

  // Helper function to check if a link is active (handles nested routes)
  const isLinkActive = (itemPath: string, isParent?: boolean): boolean => {
    if (isParent) {
      // For parent routes, match if pathname starts with the path
      return location.pathname.startsWith(itemPath);
    }
    // For other routes, do exact match
    return location.pathname === itemPath;
  };

  const navLinks = (
    <ul className="courier-links">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive || isLinkActive(item.path, item.isParent)
                ? "link-text active-link"
                : "link-text"
            }
          >
            {item.label}

            {/* Sleek Animated Indicator */}
            {isLinkActive(item.path, item.isParent) && (
              <motion.span
                layoutId="activeIndicator"
                className="active-indicator"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="courier-header">
      <div className="courier-topbar">
        <div className="courier-contact">
          <Phone size={16} className="icon" />
          <span>+233548064492</span>

          <MapPin size={16} className="icon" />
          <span>Accra, Ghana</span>
        </div>

        <span className="courier-support">
          <BadgeInfo size={16} /> 24/7 Customer Support
        </span>
      </div>

      <motion.nav
        className="courier-navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="link-text">
          <div className="courier-logo">
            <img
              src="/RAY.png"
              className="logo-circle"
              alt="NCL Logo"
            />
          </div>
        </Link>

        <div className="courier-desktop-links">
          {navLinks}
        </div>

        <div
          className="courier-menu-toggle"
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
              />

              <motion.div
                className="mobile-sidebar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                {navLinks}

                <div className="mobile-actions">
                  <Link
                    to="/contact"
                    className="link-text"
                  >
                    <button className="track-btn green-btn">
                      Contact Us
                    </button>
                  </Link>

                  <Link
                    to="/get-involved"
                    className="link-text"
                  >
                    <button className="track-btn outline-btn">
                      Get Involved
                    </button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div
          className={`courier-actions ${
            isMobileMenuOpen ? "open" : ""
          }`}
        >
          <Link to="/contact" className="link-text">
            <button className="track-btn green-btn">
              Contact Us
            </button>
          </Link>

          <Link
            to="/get-involved"
            className="link-text"
          >
            <button className="track-btn outline-btn">
              Get Involved
            </button>
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;