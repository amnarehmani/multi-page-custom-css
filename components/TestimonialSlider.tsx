"use client";
import React, { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";
import "@/app/styles/testimonials.css";

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alina",
    text: "Wonderful experience with the hotel services!",
    image: "/images/people01.avif",
  },
  {
    name: "Joe dalton",
    text: "I loved the ambience and the staff!",
    image: "/images/people02.avif",
  },
  {
    name: "Jarry jayne",
    text: "A comfortable and memorable stay!",
    image: "/images/people03.avif",
  },
  {
    name: "Ann Brown",
    text: "Great service and lovely rooms!",
    image: "/images/people04.avif",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h3 className="testimonial-title">Our Customers</h3>
        <h1 className="testimonial-heading">Testimonials</h1>
        <div className="testimonial-stars">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>

      <div
        className="testimonial-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <FaQuoteLeft className="quote-left" />
            <FaQuoteRight className="quote-right" />
            <div className="testimonial-image">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
              />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-controls">
        <FaArrowLeft
          className="arrow arrow-left"
          onClick={() => handleArrowClick("left")}
        />
        <FaArrowRight
          className="arrow arrow-right"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;
