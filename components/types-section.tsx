export default function TypesSection() {
  return (
    <section id="estudos" className="py-5 bg-dark-custom">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">Tipos de Assédio Moral</h2>
            <p className="lead">São 4 tipos principais de assédio moral no ambiente de trabalho</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card card-dark h-100 p-4">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-purple-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  <span className="fw-bold fs-4">1</span>
                </div>
                <h3 className="h4 mb-0">Assédio Vertical Descendente</h3>
              </div>
              <p className="mb-0">
                Trata-se do tipo de assédio moral mais comum nas empresas. Esse tipo de assédio toma forma quando o
                assédio é praticado por um trabalhador hierarquicamente superior ao empregado assediado.
              </p>
              <p className="mt-3 mb-0">
                Pode-se visualizar esse tipo de assédio, por exemplo, quando um gerente cobra metas de seus subordinados
                e, para isso, os coloca em situações vexatórias, fazendo com que façam "dancinhas", paguem "micos",
                apelidando-os com cognomes pejorativos, etc.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-dark h-100 p-4">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-purple-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  <span className="fw-bold fs-4">2</span>
                </div>
                <h3 className="h4 mb-0">Assédio Moral Organizacional</h3>
              </div>
              <p className="mb-0">
                Nesta hipótese, o empregado sofre violência psicológica da própria empresa pelo ambiente de trabalho que
                está inserido. Normalmente ocorre em empresas extremamente competitivas que estimulam seus funcionários
                a disputarem entre si, propagando o medo (normalmente por meio de ameaças, ainda que de menor grau).
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-dark h-100 p-4">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-purple-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  <span className="fw-bold fs-4">3</span>
                </div>
                <h3 className="h4 mb-0">Assédio Moral Horizontal</h3>
              </div>
              <p className="mb-0">
                O assédio moral horizontal ocorre entre funcionários que ocupam a mesma posição hierárquica dentro da
                empresa.
              </p>
              <p className="mt-3 mb-0">
                Pode-se visualizar essa situação quando um funcionário bate suas metas e debocha do outro que não as
                conseguiu cumpri-las. Também é muito comum no dia a dia das empresas que cultivam a competitividade
                entre seus funcionários.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-dark h-100 p-4">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-purple-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  <span className="fw-bold fs-4">4</span>
                </div>
                <h3 className="h4 mb-0">Assédio Moral Vertical Ascendente</h3>
              </div>
              <p className="mb-0">
                O assédio vertical ascendente, embora seja extremamente raro, ocorre quando um funcionário
                hierarquicamente inferior assedia seu superior.
              </p>
              <p className="mt-3 mb-0">
                Embora seja mais difícil de visualizar na prática, pode-se visualizá-lo em situações em que um
                funcionário sabe alguma informação sigilosa da empresa ou do seu superior hierárquico e a utiliza como
                meio de chantagem para benefício próprio (faltar injustificadamente, pedir aumento de salário, etc.).
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <p className="text-muted text-center">
              <small>
                Fonte:{" "}
                <a
                  href="https://www.jusbrasil.com.br/artigos/tipos-de-assedio-moral-no-trabalho/317924376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-light"
                >
                  JusBrasil
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
