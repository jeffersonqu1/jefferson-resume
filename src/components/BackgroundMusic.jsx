import React, { useEffect, useState } from "react"
import bgMusic from "../assets/music/bg-music.mp3"

export default function BackgroundMusic() {
  const [audio] = useState(new Audio(bgMusic))
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    audio.loop = true
  }, [audio])

  const togglePlay = () => {
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  return (
    <button
      onClick={togglePlay}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 12px",
        borderRadius: "50%",
        background: "#00000080",
        color: "white",
        border: "1px solid white",
        cursor: "pointer",
        zIndex: 9999
      }}
    >
      {playing ? "⏸️" : "▶️"}
    </button>
  )
}
