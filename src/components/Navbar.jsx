import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white hover:scale-150 transition-transform">
            {" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent ">J</span>
            <span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent ">.Qu</span>{" "}
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent hover:scale-125 transition-transform">
              {" "}
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent hover:scale-125 transition-transform">
              {" "}
              About{" "}
            </a>
            <a href="#projects" className="hidden text-gray-300 hover:text-white transition-colors bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-125 transition-transform">
              {" "}
              Projects{" "}
            </a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent hover:scale-125 transition-transform">
              {" "}
              Experience{" "}
            </a>
            <a href="#contact" className="hidden text-gray-300 hover:text-white transition-colors bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent hover:scale-125 transition-transform">
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
