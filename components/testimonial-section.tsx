export default function TestimonialSection() {
  return (
    <section className="py-5 bg-purple-secondary">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="card card-dark p-4">
              <blockquote className="blockquote mb-0">
                <p className="fs-5 fst-italic mb-4">
                  "Já passei por tanta coisa. E, com o tempo, desenvolvi um jogo de cintura. Com esses movimentos que
                  estão acontecendo, começo a questionar algumas coisas pelas quais passei. Não dá para comparar o
                  assédio vivido por uma mulher e o assédio vivido por um homem. Existem vulnerabilidades físicas e
                  históricas. Mas penso que uma situação que era considerada engraçada antigamente, hoje pode ser
                  encarada como assédio. Quando era modelo, sofri muito assédio moral, sexual... Ficava desconfortável
                  na hora, mas saía no humor"
                </p>
                <footer className="blockquote-footer text-purple-light fs-6">Cauã Reymond, ator</footer>
              </blockquote>
              <p className="text-muted mt-3 mb-0">
                <small>
                  Fonte:{" "}
                  <a
                    href="https://www.uol.com.br/splash/noticias/2021/11/24/caua-reymond-ja-sofreu-muito-assedio-moral-e-sexual-desconfortavel.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-light"
                  >
                    UOL Splash
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
