import React from "react"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import "../../App.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/zhaopeng-qu/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaLinkedin />
        </a>

        {/* Email */}
        <a href="mailto:jeffersonqu0428@gmail.com" className="footer-icon">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-text">© 2025 Jefferson Qu. All rights reserved.</p>
    </footer>
  )
}
