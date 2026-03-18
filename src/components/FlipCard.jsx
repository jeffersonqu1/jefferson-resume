import React from "react"
import "../App.css"

export default function FlipCard({ title, company, period, details }) {
  return (
    <div className="exp-card">
      <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-lg font-semibold mb-1 text-gray-300">{company}</p>
      <p className="text-sm text-gray-500 mb-4">{period}</p>
      <ul>
        {details.map((d, i) => (
          <li key={i}>
            <span className="text-sm text-gray-300 leading-relaxed">
              {d.replace("• ", "")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
