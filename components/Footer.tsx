"use client";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import "@/app/styles/footer.css"; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2024 Crescent Suites. All rights reserved.
        </p>
        <div className="social-icons">
          <Link
            href="https://www.facebook.com"
            className="social-icon"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.linkedin.com"
            className="social-icon"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://www.instagram.com"
            className="social-icon"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.youtube.com"
            className="social-icon"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.twitter.com"
            className="social-icon"
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
