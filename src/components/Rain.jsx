import React from "react"
import "../App.css"

const Rain = () => {
  const drops = new Array(100).fill(0) // 100 raindrops

  return (
    <div className="rain">
      {drops.map((_, i) => {
        const left = Math.random() * 100 // random X position
        const duration = 0.5 + Math.random() * 1 // fall speed
        const delay = Math.random() * 2

        return (
          <div
            key={i}
            className="drop"
            style={{
              left: `${left}vw`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          />
        )
      })}
    </div>
  )
}

export default Rain
