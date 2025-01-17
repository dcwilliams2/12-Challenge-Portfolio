// THIS ALL NEEDS TO BE EDITED ***
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <div className="container">
        <div className="d-flex justify-content-center">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
            style={{ fontSize: "24px" }}
          >
            <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
          </a>
          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
            style={{ fontSize: "24px" }}
          >
            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
            style={{ fontSize: "24px" }}
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
            style={{ fontSize: "24px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
