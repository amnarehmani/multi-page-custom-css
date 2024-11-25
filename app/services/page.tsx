
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaBed,
  FaSpa,
  FaShuttleVan,
  FaUmbrellaBeach,
  FaDumbbell,
  FaWifi,
} from "react-icons/fa";
import "@/app/styles/services.css"; 
import Action from "@/components/Action"; 

export default function Services() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="services">
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
          <h1>Our Services</h1>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <h1>How we serve you</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            error.
          </p>
        </div>

        <div className="services-list">
          <div className="service-item">
            <div className="service-icon">
              <FaBed size={50} color="#f4b400" />
            </div>
            <h3>Room Service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              labore!
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaSpa size={50} color="#f4b400" />
            </div>
            <h3>Spa and Wellness</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis, quibusdam!
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaShuttleVan size={50} color="#f4b400" />
            </div>
            <h3>Airport Shuttle</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis, similique.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaUmbrellaBeach size={50} color="#f4b400" />
            </div>
            <h3>Beach Access</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              dolore.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaDumbbell size={50} color="#f4b400" />
            </div>
            <h3>Gym Facilities</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, facere!
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <FaWifi size={50} color="#f4b400" />
            </div>
            <h3>Free Wi-Fi</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              eveniet.
            </p>
          </div>
        </div>
      </section>

      <Action />
    </>
  );
}
