import React, { useState } from "react"

const HorizontalTimeline = ({ events }) => {
  console.log(events)
  const [activeIndex, setActiveIndex] = useState(0)

  const activeEvent = events && events.length > 0 ? events[activeIndex] : null

  if (!activeEvent) return null

  return (
    <div className="w-full flex flex-col items-center py-10">
      {/* Big Year */}
      <h1 className="text-5xl font-bold text-red-700 mb-6">{activeEvent.year}</h1>

      {/* Description */}
      <p className="text-gray-200 min-timeline max-w-2xl text-center leading-relaxed px-6 mb-20">{activeEvent.text}</p>

      {/* Horizontal Year Navigation */}
      <div className="flex gap-16 border-t pt-6">
        {events.map((event, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className="flex flex-col items-center">
            <span className={`text-lg ${activeIndex === index ? "text-red-700 font-semibold" : "text-gray-300 hover:text-gray-800"}`}>{event.year}</span>

            {/* Underline animation */}
            <span className={`mt-2 h-[2px] w-16 transition-all duration-300 ${activeIndex === index ? "bg-red-700" : "bg-transparent"}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default HorizontalTimeline
