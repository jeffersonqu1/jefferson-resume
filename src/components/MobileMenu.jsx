const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#timeline", label: "Timeline" },
]

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.97)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {navLinks.map(({ href, label }, i) => (
        <a
          key={href}
          href={href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-gray-300 hover:text-white my-4 transition-all duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
        >
          {label}
        </a>
      ))}
    </div>
  )
}
