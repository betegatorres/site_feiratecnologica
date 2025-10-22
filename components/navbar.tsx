"use client"

import type React from "react"

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobile-menu")
    if (mobileMenu) {
      mobileMenu.classList.add("hidden")
    }
  }

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu")
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden")
    }
  }

  return (
    <>
      <nav className="navbar-custom">
        <div className="container">
          <div className="navbar-content">
            <a href="#home" className="navbar-brand text-purple" onClick={(e) => handleNavClick(e, "home")}>
              Assédio moral
            </a>

            {/* Desktop Menu */}
            <ul className="navbar-menu desktop-menu">
              <li>
                <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#conceito" onClick={(e) => handleNavClick(e, "conceito")}>
                  Conceito
                </a>
              </li>
              <li>
                <a href="#livro" onClick={(e) => handleNavClick(e, "livro")}>
                  Livro
                </a>
              </li>
              <li>
                <a href="#graficos" onClick={(e) => handleNavClick(e, "graficos")}>
                  Gráficos
                </a>
              </li>
              <li>
                <a href="#video" onClick={(e) => handleNavClick(e, "video")}>
                  Vídeo
                </a>
              </li>
              <li>
                <a href="#depoimentos" onClick={(e) => handleNavClick(e, "depoimentos")}>
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#orientadoras" onClick={(e) => handleNavClick(e, "orientadoras")}>
                  Orientadoras
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="mobile-menu hidden">
        <ul>
          <li>
            <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#conceito" onClick={(e) => handleNavClick(e, "conceito")}>
              Conceito
            </a>
          </li>
          <li>
            <a href="#livro" onClick={(e) => handleNavClick(e, "livro")}>
              Livro
            </a>
          </li>
          <li>
            <a href="#graficos" onClick={(e) => handleNavClick(e, "graficos")}>
              Gráficos
            </a>
          </li>
          <li>
            <a href="#video" onClick={(e) => handleNavClick(e, "video")}>
              Vídeo
            </a>
          </li>
          <li>
            <a href="#depoimentos" onClick={(e) => handleNavClick(e, "depoimentos")}>
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#orientadoras" onClick={(e) => handleNavClick(e, "orientadoras")}>
              Orientadoras
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
