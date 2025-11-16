import React, { useState } from "react"
import "../App.css"
import GenoaImg from "../assets/images/GenoaDesign.jpg"
import WaterWerksImg from "../assets/images/WaterWerksAgency.jpg"
import JACImg from "../assets/images/JAC.jpg"
import MemorialImg from "../assets/images/MemorialUniversity.jpg"

export default function ThreeDSlider({ slides }) {
  const [current, setCurrent] = useState(0)

  // const slides = [
  //   {
  //     image: { GenoaImg },
  //     title: "AI Photo Analyzer"
  //   },
  //   {
  //     image: { WaterWerksImg },
  //     title: "SQL Automation Tool"
  //   },
  //   {
  //     image: { JACImg },
  //     title: "Neo4j Graph Explorer"
  //   },
  //   {
  //     image: { MemorialImg },
  //     title: "React Portfolio Website"
  //   }
  // ]

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length)
  }

  return (
    <div className="slider-container">
      <div className="carousel" style={{ transform: `translateZ(-300px) rotateY(${current * -60}deg)` }}>
        {slides.map((slide, i) => (
          <div className="carousel-item " key={i} style={{ transform: `rotateY(${i * 60}deg) translateZ(300px)` }}>
            <img className="rounded-full" src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
          </div>
        ))}
      </div>

      <button className="nav-button left" onClick={prevSlide}>
        ‹
      </button>
      <button className="nav-button right" onClick={nextSlide}>
        ›
      </button>
    </div>
  )
}
