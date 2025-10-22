// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight
      const targetPosition = target.offsetTop - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Fechar menu mobile após clicar
      const navbarCollapse = document.querySelector(".navbar-collapse")
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
      }
    }
  })
})

// Animação das barras do gráfico ao entrar na viewport
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".chart-bar")
      bars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.getAttribute("data-percentage") + "%"
        }, index * 100)
      })
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observar o container de gráficos
const chartContainer = document.querySelector(".chart-container")
if (chartContainer) {
  // Resetar largura das barras para 0
  document.querySelectorAll(".chart-bar").forEach((bar) => {
    bar.style.width = "0%"
  })
  observer.observe(chartContainer)
}

// Adicionar classe active no link da navbar baseado na seção visível
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Adicionar efeito de fade-in nos cards ao entrar na viewport
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  { threshold: 0.1 },
)

// Aplicar fade-in em todos os cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".info-card, .research-card, .type-card, .testimonial-card, .team-card, .student-card",
  )
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    fadeObserver.observe(card)
  })
})
