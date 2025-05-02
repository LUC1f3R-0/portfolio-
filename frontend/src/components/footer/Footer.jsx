import React from "react";
import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaTwitter />
          </a>

          <a href="" className="footer__social-link">
            <FaDribbble />
          </a>

          <a href="" className="footer__social-link">
            <FaBehance />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; {currentYear} All rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>NIKESH</span>{" "}
        </p>
      </div>
    </footer>
  );
};
