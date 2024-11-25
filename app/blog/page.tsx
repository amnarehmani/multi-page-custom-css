"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import "@/app/styles/blog.css";

export default function Blog() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="blog">
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
          <h1>Blog</h1>
        </div>
      </section>

      <section>
        <div className="blog-post-container">
          <h1 className="post-title">The Best Ways to Relax at Our Hotel</h1>
          <p className="post-date">November 20, 2024</p>

          <p className="post-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dicta molestiae magni quas animi, a spernatur minima. Possimus
            pariatur laboriosam cumque. Harum impedit corrupti possimus iusto at
            dolores fugiat fuga exercitationem deleniti ut eius tenetur totam,
            quia nisi sunt error suscipit atque similique hic autem? Voluptas!
          </p>

          <h2 className="section-title">
            1. Enjoy Our Spa and Wellness Center
          </h2>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            vero delectus, fugiat vitae libero voluptates aliquam culpa iure
            tempora nam aliquid est accusamus sed non sit aperiam quis enim
            explicabo sapiente quam at illum!
          </p>

          <h2 className="section-title">2. Lounge by the Pool</h2>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            magnam, ratione tenetur maiores id pariatur veniam natus temporibus
            eligendi, ipsa vitae error laborum! Sunt accusantium tempore et
            exercitationem alias dicta.
          </p>

          <h2 className="section-title">3. Explore the Local Area</h2>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi
            exercitationem inventore voluptates veritatis sit quo facilis odio a
            temporibus est illo explicabo dignissimos soluta reprehenderit
            incidunt at recusandae maiores, adipisci corporis accusantium natus
            voluptate!
          </p>

          <p className="post-conclusion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            culpa tempora cumque corrupti explicabo nobis eaque vero incidunt.
            At explicabo minima numquam odio quos totam impedit officiis aperiam
            error pariatur.
          </p>
        </div>
      </section>

      <section>
        <div className="blog-container">
          <div className="blog-posts">
            <div className="blog-post">
              <h2 className="post-title">
                The Best Ways to Relax at Our Hotel
              </h2>
              <p className="post-date">September 30, 2024</p>
              <p className="post-summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sit exercitationem, impedit natus eligendi suscipit.
              </p>
              <Link href = "/blog"> read more </Link>
            </div>

            <div className="blog-post">
              <h2 className="post-title">Exciting Events Coming Soon!</h2>
              <p className="post-date">July 22, 2024</p>
              <p className="post-summary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                saepe, blanditiis quaerat voluptatum possimus culpa.
              </p>
              <Link href = "/blog"> read more </Link>
            </div>

            <div className="blog-post">
              <h2 className="post-title">
                Top Amenities to Enjoy During Your Stay
              </h2>
              <p className="post-date">November 20, 2024</p>
              <p className="post-summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium adipisci quo possimus vel quasi rerum hic eos porro?
              </p>
             <Link href = "/blog"> read more </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
