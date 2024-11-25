import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/styles/experience.css";

function Experience() {
  return (
    <div>
      <section className="experience-section">
        <h2>Luxury features of our hotels</h2>
        <div className="cards">
          <div className="card">
            <Image
              src="/images/elegant.avif"
              alt="elegant roomms"
              width={300}
              height={300}
            ></Image>
            <h3>Elegant Rooms</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              facere..
            </p>
            <Link href="/" className="btn">
              View Rooms
            </Link>
          </div>
          <div className="card">
            <Image
              src="/images/dining.avif"
              alt="elegant roomms"
              width={300}
              height={300}
            ></Image>
            <h3>Exquisite Dining</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, accusamus.
            </p>
            <Link href="/" className="btn">
              See Menu
            </Link>
          </div>
          <div className="card">
            <Image
              src="/images/relaxing.avif"
              alt="elegant roomms"
              width={300}
              height={300}
            ></Image>
            <h3>Relaxing Spa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              doloremque.
            </p>
            <Link href="/" className="btn">
              Explore Spa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
