import React from "react"

const VerticalTimeline = ({ items }) => {
  return (
    <div className="relative border-l border-gray-300 ml-4">
      {items.map((item, index) => (
        <div key={index} className="mb-10 ml-6">
          {/* Dot */}
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white">{item.icon ? <img src={item.icon} className="w-3 h-3" alt="icon" /> : <span className="w-2 h-2 bg-white rounded-full" />}</span>

          {/* Content card */}
          <div className="p-4 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent rounded-xl shadow-md hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.company}</p>
            <p className="text-xs text-blue-600 font-medium mt-1">{item.period}</p>

            <p className="text-gray-700 mt-3">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VerticalTimeline
