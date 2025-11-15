import React, { useState } from "react"
import "../App.css"

export default function ThreeDSlider({ slides }) {
  const [current, setCurrent] = useState(0)

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
          <div className="carousel-item" key={i} style={{ transform: `rotateY(${i * 60}deg) translateZ(300px)` }}>
            <img src={slide.image} alt={slide.title} />
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
