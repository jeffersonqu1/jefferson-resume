// import React, { useEffect } from "react"
// import music from "./assets/bg-music.mp3"

// export default function AutoMusic() {
//   useEffect(() => {
//     const audio = new Audio(music)
//     audio.loop = true

//     const startMusic = () => {
//       audio.play()
//       window.removeEventListener("click", startMusic)
//     }

//     window.addEventListener("click", startMusic)

//     return () => window.removeEventListener("click", startMusic)
//   }, [])

//   return null
// }
