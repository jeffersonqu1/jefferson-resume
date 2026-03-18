import { useEffect } from "react"
import Logo from "../assets/images/jqu-logo.svg"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#timeline", label: "Timeline" },
]

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.92)] backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="hover:scale-110 transition-transform">
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
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-400 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
