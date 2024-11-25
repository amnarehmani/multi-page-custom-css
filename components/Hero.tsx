"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import "@/app/styles/home.css";

export default function Hero() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="header">
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
          <h1>Welcome to the Crescent Suites</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos cum
            nobis qui illum expedita voluptatibus <br /> nam architecto. Unde,
            molestiae doloribus?
          </p>
          <Link href="/contact" className="hero-btn">
            Book now
          </Link>
        </div>
      </section>
    </>
  );
}
