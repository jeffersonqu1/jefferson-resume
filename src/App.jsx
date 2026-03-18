import { lazy, Suspense, useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import "./index.css"
import { Contact } from "./components/sections/Contact"
import AOS from "aos"
import "aos/dist/aos.css"
import Rain from "./components/Rain"
import { Experience } from "./components/sections/Experience"
import BackgroundMusic from "./components/BackgroundMusic"
import Footer from "./components/sections/Footer"
import { WorkTimeLine } from "./components/sections/WorkTimeLine"

const ThreeDViewer = lazy(() => import("./pages/ThreeDViewer"))

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    })
  }, [])

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-gradient-to-r from-white-500 to-cyan-400 text-gray-200`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Rain />
                <Experience />
                {/* <Projects /> */}
                <WorkTimeLine />
                <BackgroundMusic />
                {/* <Contact /> */}
                <Footer />
              </>
            }
          />
          <Route
            path="/3d-viewer"
            element={
              <Suspense fallback={<div className="h-screen flex items-center justify-center text-gray-400">Loading 3D Viewer...</div>}>
                <ThreeDViewer />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
