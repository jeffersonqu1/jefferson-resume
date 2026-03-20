import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Logo from "../assets/images/jqu-logo.svg"

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "timeline", label: "Timeline" },
]

function scrollToSection(id, navigate, location) {
  if (location.pathname !== "/") {
    navigate("/")
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
}

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.92)] backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection("home", navigate, location) }}
            className="hover:scale-110 transition-transform"
          >
            <img src={Logo} alt="J.Qu" className="h-10 w-auto" />
          </a>

          <button
            className="relative w-8 h-6 flex flex-col justify-between md:hidden z-50"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection(id, navigate, location) }}
                className="text-gray-400 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            ))}
            <a
              href="https://3d-model-viewer-opal-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-200"
            >
              3D Viewer
            </a>
            <a
              href="https://picture-compression-ruddy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-200"
            >
              Picture Compressor
            </a>
            <a
              href="https://frontend-five-gamma-49.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-200"
            >
              Drawing Different
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
