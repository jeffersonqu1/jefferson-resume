import React, { useState, useEffect, useRef, useCallback } from "react"
import "../App.css"

export default function ThreeDSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const pausedRef = useRef(false)
  const timerRef = useRef(null)

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent(prev => (prev + 1) % slides.length)
      }
    }, 4000)
  }, [slides.length])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  const selectSlide = (i) => {
    setCurrent(i)
    startTimer()
  }

  const activeSlide = slides[current]

  return (
    <div
      className="tl"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      {/* Timeline track with all logos */}
      <div className="tl-track">
        <div className="tl-line" />
        {slides.map((slide, i) => (
          <button
            key={i}
            className={`tl-node ${i === current ? "tl-node--active" : ""}`}
            onClick={() => selectSlide(i)}
          >
            <div className="tl-avatar">
              <img src={slide.image} alt={slide.company} />
            </div>
            <span className="tl-year">{slide.year}</span>
          </button>
        ))}
      </div>

      {/* Info panel */}
      <div className="tl-info" key={current}>
        <h3 className="tl-info__title">{activeSlide.title}</h3>
        <p className="tl-info__company">{activeSlide.company}</p>
        <p className="tl-info__period">{activeSlide.period}</p>
        <p className="tl-info__desc">{activeSlide.description}</p>
      </div>
    </div>
  )
}
