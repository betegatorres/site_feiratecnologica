export default function ResearchSection() {
  return (
    <section id="pesquisas" className="py-5 bg-dark-custom">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">Pesquisas Recentes (Outubro de 2025)</h2>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card card-dark h-100 p-4">
              <div className="text-center mb-3">
                <div className="display-3 fw-bold text-purple-light">57%</div>
              </div>
              <p className="fs-5 mb-3">
                Uma pesquisa da consultoria Think Eva em parceria com o LinkedIn mostrou que metade das pessoas ouvidas
                já foram vítimas de algum tipo de assédio no ambiente de trabalho.{" "}
                <strong>57% delas disseram ter sido vítimas de assédio moral</strong>, enquanto um terço das mulheres,
                cerca de 33% das participantes, afirmaram ter sofrido assédio sexual.
              </p>
              <p className="mb-0">Apenas 10% delas recorreram a canais de denúncia.</p>
              <p className="text-muted mt-3 mb-0">
                <small>
                  Fonte:{" "}
                  <a
                    href="https://cbn.globo.com/brasil/noticia/2025/10/02/57percent-dos-profissionais-ja-foram-vitimas-de-assedio-moral-no-ambiente-de-trabalho-aponta-pesquisa.ghtml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-light"
                  >
                    CBN
                  </a>
                </small>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-dark h-100 p-4">
              <div className="text-center mb-3">
                <div className="display-3 fw-bold text-purple-light">46%</div>
              </div>
              <p className="fs-5 mb-3">
                No geral: Quase metade dos profissionais (cerca de 46%) já sofreram assédio moral no trabalho, de acordo
                com o Valor Econômico.
              </p>
              <p className="text-muted mt-3 mb-0">
                <small>
                  Fonte:{" "}
                  <a
                    href="https://ojs.focopublicacoes.com.br/foco/article/view/8493"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-light"
                  >
                    Foco Publicações
                  </a>
                </small>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-dark h-100 p-4">
              <div className="text-center mb-3">
                <div className="display-3 fw-bold text-purple-light">76%</div>
              </div>
              <p className="fs-5 mb-3">
                Entre mulheres: <strong>76% das mulheres brasileiras</strong> já sofreram algum tipo de violência ou
                assédio no ambiente de trabalho, sendo o assédio moral o mais praticado, de acordo com uma pesquisa da
                Agência Patrícia Galvão.
              </p>
              <p className="text-muted mt-3 mb-0">
                <small>
                  Fonte:{" "}
                  <a
                    href="https://dossies.agenciapatriciagalvao.org.br/violencia-em-dados/76-das-brasileiras-ja-sofreram-violencia-e-assedio-no-trabalho/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-light"
                  >
                    Agência Patrícia Galvão
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
