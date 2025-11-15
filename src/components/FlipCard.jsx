import React from "react"
import "../App.css"

export default function FlipCard({ title, company, period, details }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent text-center">{title}</h2>
          <p className=" font-bold mb-8 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent text-center">{company}</p>
          <small className=" font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">{period}</small>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <ul>
            {details.map((d, i) => (
              <li key={i}>
                <small className=" font-bold mb-8 text-blue-300 text-center">{d}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
