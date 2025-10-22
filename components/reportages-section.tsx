export default function ReportagesSection() {
  return (
    <section id="reportagens" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase text-muted mb-2">REPORTAGENS</p>
          <h2 className="display-5 fw-bold">ASSÉDIO MORAL NO MERCADO DE TRABALHO</h2>
        </div>

        {/* Reportage Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 bg-primary text-white">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-book mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                  <h5 className="card-title">Reportagem 1</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-book mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                  <h5 className="card-title">Reportagem 2</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-book mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                  <h5 className="card-title">Reportagem 3</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-play-circle mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                  </svg>
                  <h5 className="card-title">Reportagem 4</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Reportage */}
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="h4 fw-bold mb-3">
              Empresa é condenada a pagar R$ 43,5 mil à vítima de assédio sexual e moral
            </h3>

            <p className="mb-3">
              A 11ª Câmara do Tribunal Regional do Trabalho da 15ª Região condenou uma empresa ao pagamento de
              indenização por danos extrapatrimoniais em razão da prática de assédio sexual e moral contra uma
              funcionária. A condenação, arbitrada no valor de R$ 43.519,40, contempla também os danos morais
              decorrentes de doença ocupacional. Por se tratar de lesão que atinge a coletividade, a empresa ainda foi
              condenada a adotar medidas preventivas para o combate à violência de gênero no ambiente de trabalho.
            </p>

            <p className="mb-3">
              Ao apreciar o recurso da reclamante, o órgão colegiado entendeu que as provas produzidas no processo
              demonstraram a ocorrência de assédio sexual e moral, praticado pelo superior hierárquico da trabalhadora,
              por meio de manipulação emocional, abuso de poder e disseminação de comentários desrespeitosos e
              objetificadores.
            </p>

            <p className="mb-3">
              Também ficou comprovado que as colegas de trabalho faziam piadas e se referiam à trabalhadora de forma
              humilhante, chamando-a de "marmita do chefe", por exemplo, e tecendo comentários que associavam sua
              posição profissional a favores sexuais. Conforme consta no acórdão, "a omissão do empregador em adotar
              medidas eficazes para coibir o assédio moral e sexual justifica a condenação da reclamada ao pagamento de
              indenização por danos morais".
            </p>

            <p className="text-muted small">
              Fonte:{" "}
              <a
                href="https://www.trt15.jus.br/noticias/2024/TRT15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                2024, TRT15
              </a>
            </p>
          </div>

          <div className="col-lg-6">
            <div className="position-relative" style={{ height: "400px" }}>
              <img
                src="/pessoa-com-mao-levantada-em-sinal-de-pare-preto-e-.jpg"
                alt="Pessoa com mão levantada em sinal de pare"
                className="img-fluid w-100 h-100 object-fit-cover rounded shadow"
              />
            </div>
          </div>
        </div>

        {/* Additional Cases Section */}
        <div className="mt-5 pt-5 border-top">
          <h3 className="h4 fw-bold mb-4">Casos de Assédio na Rede Globo</h3>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Caso Marcius Melhem</h5>
                  <p className="card-text">
                    Em 2020, o humorista Marcius Melhem foi afastado da Globo após denúncias de assédio sexual e moral.
                    Várias funcionárias relataram comportamentos inadequados, incluindo investidas não consensuais e
                    comentários de cunho sexual. A emissora abriu investigação interna e o afastou definitivamente.
                  </p>
                  <p className="text-muted small mb-0">
                    Fonte:{" "}
                    <a
                      href="https://g1.globo.com/pop-arte/noticia/2020/12/11/marcius-melhem-e-afastado-da-globo-apos-denuncia-de-assedio.ghtml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      G1, 2020
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Caso José Mayer</h5>
                  <p className="card-text">
                    Em 2017, o ator José Mayer foi acusado de assédio sexual por uma figurinista da emissora. Ela
                    relatou que o ator a encurralou em um camarim e passou as mãos em seu corpo sem consentimento. O
                    caso ganhou repercussão nacional e levou a Globo a reforçar suas políticas contra assédio.
                  </p>
                  <p className="text-muted small mb-0">
                    Fonte:{" "}
                    <a
                      href="https://g1.globo.com/rio-de-janeiro/noticia/figurinista-diz-que-foi-assediada-por-jose-mayer-em-camarim-da-globo.ghtml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      G1, 2017
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
