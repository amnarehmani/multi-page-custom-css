"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import "@/app/styles/about.css";

export default function About() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="about">
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
          <h1>About Us</h1>
        </div>
      </section>

      <section className="about-container">
        <div className="about-content">
          <div className="about-image">
            <Image
              src="/images/banner2.avif"
              alt="About Us"
              width={500}
              height={500}
            />
          </div>
          <div className="about-text">
            <h1>Our Hotel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, distinctio. Numquam voluptatem, sed id minima quas
              laboriosam saepe itaque, aspernatur consequatur magni veniam
              beatae doloremque officiis rem. Animi, nesciunt aut. Obcaecati ut
              maxime numquam velit error repudiandae ipsam, eveniet fuga odio
              pariatur voluptates beatae, qui excepturi ducimus tempore eius
              voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Iusto provident placeat et possimus! Voluptatibus, numquam.
              Nihil, consectetur! Porro, omnis iure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
