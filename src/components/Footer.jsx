import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";


const Footer = () => {
  return (
    <footer>
        <div className="d-flex justify-content-center">
           <a
            href="https://github.com/dcwilliams2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "40px" }}
          >
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-williams-b0a11597/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "40px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
           <a
            href="https://www.instagram.com/dwilliams02"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "40px" }}
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
