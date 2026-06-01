import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X, BadgeInfo, Mail } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaWhatsapp } from "react-icons/fa6";

type IconProps = {
  size?: number;
  className?: string;
};

const WhatsappIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaWhatsapp as any, props);



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
        <a href="https://wa.me/233548064492"
          className="top-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon size={16} className="icon" />
          <span>+233548064492</span>
        </a>
          <a href="https://www.bing.com/ck/a?!&&p=418c12a103308f351e05fd0b94113fd722b894484a44be78201a5a3d1b432115JmltdHM9MTc4MDI3MjAwMA&ptn=3&ver=2&hsh=4&fclid=2e8a82bb-9836-6466-27cc-9765992b6588&u=a1L21hcHM_Jm1lcGk9NjB-fkVtYmVkZGVkfkxhcmdlTWFwTGluayZ0eT0xOCZxPUFjY3JhJTJDJTIwR3JlYXRlciUyMEFjY3JhJTIwUmVnaW9uJTJDJTIwR2hhbmEmc2F0aWQ9aWQuc2lkJTNBN2RlYTQ0ZWItNjVkMy1jYTZiLWMzNTMtZWFjOTUxY2JkYzUwJnZkcGlkPTU3NjMxMDQxODA0MTE1NjQwMzYmbWI9NS42NjczNzh-LTAuMjg0MTQyfjUuNTE3MTgxfi0wLjA1NDg0NiZwcG9pcz01LjU5MjI3OTY3MjYyMjY4MV8tMC4xNjk0OTQxNTM5MzE3MzY5NV9BY2NyYSUyQyUyMEdyZWF0ZXIlMjBBY2NyYSUyMFJlZ2lvbiUyQyUyMEdoYW5hX34mdj0yJnNWPTEmRk9STT1NSVJFJnFwdnQ9YWNjcmErZ2hhbmErb24rbWFwcw" className="top-links">
          <MapPin size={16} className="icon" />
            <span>Accra, Ghana</span>
          </a>
          <a href="mailto:rayhealthcareafrica@gmail.com" className="top-links">
            <Mail size={16} className="icon" />
            <span>rayhealthcareafrica@gmail.com</span>
          </a>
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
                <button
                  type="button"
                  className="mobile-close-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>

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