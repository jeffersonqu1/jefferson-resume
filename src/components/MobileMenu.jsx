import { Link, useNavigate, useLocation } from "react-router-dom"

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "timeline", label: "Timeline" },
]

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSectionClick = (id) => {
    setMenuOpen(false)
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.97)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {navLinks.map(({ id, label }, i) => (
        <a
          key={id}
          href="#"
          onClick={(e) => { e.preventDefault(); handleSectionClick(id) }}
          className={`text-2xl font-semibold text-gray-300 hover:text-white my-4 transition-all duration-300 cursor-pointer
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
        >
          {label}
        </a>
      ))}
      <Link
        to="/3d-viewer"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-gray-300 hover:text-white my-4 transition-all duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionDelay: menuOpen ? `${navLinks.length * 80}ms` : "0ms" }}
      >
        3D Viewer
      </Link>
    </div>
  )
}
