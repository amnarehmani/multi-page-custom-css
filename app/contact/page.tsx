"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaPhone , FaHome,  FaEnvelope } from "react-icons/fa";
import "@/app/styles/contact.css";

export default function Contact() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="contact">
        <div className="navbar">
          <Link href="/">
            <Image
              src="/images/hotellogo.png"
              alt="logo"
              width={120}
              height={120}
              className="logo"
            />
          </Link>
          <nav className={`nav-links ${isSidebarOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </nav>
          <button className="hamburger-icon" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="text-box">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section>
        <div
          className="location"
          style={{ width: "80%", height: "100px", overflow: "hidden" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.5972231646!2d72.92129747354029!3d33.6160069659962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1732474025381!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div className="contact-item">
              <FaHome size={24} className="contact-icon" />
              <h4>Address:</h4>
              <p>123 Hotel Road, City, Country</p>
            </div>

            <div className="contact-item">
              <FaPhone size={24} className="contact-icon" />
              <h4>Phone no. :</h4>
              <p>+921234567890</p>
            </div>

            <div className="contact-item">
              <FaEnvelope size={24} className="contact-icon" />
              <h4>Email:</h4>
              <p>Crescentsuites@gmail.com</p>
            </div>

            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>How can I book a room?</h4>
                <p>
                  Simply fill out the form above with your details, and we will
                  confirm your booking shortly.
                </p>
              </div>
              <div className="faq-item">
                <h4>What is the check-in time?</h4>
                <p>
                  Our check-in time starts at 3:00 PM. You can check in at any
                  time after that.
                </p>
              </div>
            </div>

            <div className="contact-background">
              <p>Need Help? Contact us for more information.</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Booking Inquiry</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="booking-date">Booking Date</label>
                <input
                  type="date"
                  id="booking-date"
                  placeholder="When do you want to book?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
