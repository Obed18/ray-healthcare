import React from "react";
import "../styles/home.css";
import { Mail, Share2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

type IconProps = {
  size?: number;
  className?: string;
};

const FacebookIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaFacebookF as any, props);
const InstagramIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaInstagram as any, props);
const TwitterIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaXTwitter as any, props);
const LinkedinIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaLinkedinIn as any, props);
const WhatsappIcon: React.FC<IconProps> = (props) =>
  React.createElement(FaWhatsapp as any, props);

const Home: React.FC = () => {
  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: "Check out this page",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="home">
      <div className="icons-hovers">
        <a
          href="#"
          className="link-text"
          onClick={(e) => {
            e.preventDefault();
            handleShare();
          }}
        >
          <Share2 size={18} className="icon" />
        </a>

        <a
          href="mailto:rayhealthcareafrica@gmail.com"
          className="link-text"
        >
          <Mail size={16} className="icon" />
        </a>

        <a
          href="https://wa.me/233548064492"
          className="link-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon size={18} className="icon" />
        </a>

        <a
          href="https://www.instagram.com/r.a.y._healthcare_africa?igsh=NW9qZXZ0Z3p1ajRu&utm_source=qr"
          className="link-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon size={18} />
        </a>
      </div>
    </div>
  );
};

export default Home;