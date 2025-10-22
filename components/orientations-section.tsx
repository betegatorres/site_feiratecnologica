"use client"

import { useState } from "react"

export default function OrientationsSection() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  return (
    <section id="orientacoes" className="py-5 bg-white">
      <div className="container">
        <div className="mb-5">
          <p className="text-uppercase text-muted mb-2">DADOS TÉCNICOS</p>
          <h2 className="display-5 fw-bold">ORIENTAÇÕES PARA CONFECÇÃO DO SITE</h2>
        </div>

        <div className="accordion" id="orientationsAccordion">
          {/* Matérias Abrangentes */}
          <div className="accordion-item border-0 mb-3 shadow-sm">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion === "materias" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion("materias")}
                style={{
                  backgroundColor: activeAccordion === "materias" ? "#e7f3ff" : "white",
                  color: "#000",
                }}
              >
                Matérias abrangentes
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${activeAccordion === "materias" ? "show" : ""}`}>
              <div className="accordion-body">
                <p className="mb-0">
                  Esse site foi desenvolvido com o intuito de relacionar o livro "Filhos do quarto" com o tema Assédio
                  Moral no trabalho, esse é um projeto interdisciplinar de IW – Interfaces Web com a professora Cintia
                  Pinho e de Língua Portuguesa com a professora Amanda Chagas.
                </p>
              </div>
            </div>
          </div>

          {/* Baseado no Livro */}
          <div className="accordion-item border-0 mb-3 shadow-sm">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion === "livro" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion("livro")}
                style={{
                  backgroundColor: activeAccordion === "livro" ? "#e7f3ff" : "white",
                  color: "#000",
                }}
              >
                Baseado no livro: Filhos do quarto
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${activeAccordion === "livro" ? "show" : ""}`}>
              <div className="accordion-body">
                <p className="mb-0">
                  O livro Filhos do Quarto tem como objetivo ajudar a acender a vontade de ter uma vida plena, de paz,
                  amor, e a encontrar luz no quarto interior. Ele aborda a ideia de que o quarto pode ser um refúgio
                  momentâneo, mas que se permanecermos nele por muito tempo, escondendo nossos problemas, angústias e
                  medos, podemos ser sugados. O livro também fala sobre como agir diante de situações de perda, trauma,
                  perseguição ou qualquer outra experiência que nos abale.
                </p>
              </div>
            </div>
          </div>

          {/* Tema Principal */}
          <div className="accordion-item border-0 mb-3 shadow-sm">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion === "tema" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion("tema")}
                style={{
                  backgroundColor: activeAccordion === "tema" ? "#e7f3ff" : "white",
                  color: "#000",
                }}
              >
                Tema principal
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${activeAccordion === "tema" ? "show" : ""}`}>
              <div className="accordion-body">
                <p className="mb-0">
                  No livro a mãe da personagem principal passa pela experiência do assédio durante o expediente em seu
                  emprego. Por isso pesquisamos e nos aprofundamos neste tema e montamos este site baseado em nossas
                  pesquisas e entrevistas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
