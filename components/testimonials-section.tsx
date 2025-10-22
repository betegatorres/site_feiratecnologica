export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-5 bg-white text-dark">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-4">Depoimentos</h2>
            <p className="lead">Relatos de pessoas que sofreram assédio moral</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NKoIxjLaKzYDCQ8kMKMeBoPo1aSA4i.png"
                alt="Cauã Reymond"
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body p-4">
                <h3 className="h5 fw-bold mb-3 text-purple-primary">Cauã Reymond</h3>
                <p className="mb-3">Cauã relata sobre o que passou durante sua carreira.</p>
                <blockquote className="mb-0 fst-italic">
                  "Já passei por tanta coisa. E, com o tempo, desenvolvi um jogo de cintura. Com esses movimentos que
                  estão acontecendo, começo a questionar algumas coisas pelas quais passei. Não dá para comparar o
                  assédio vivido por uma mulher e o assédio vivido por um homem. Existem vulnerabilidades físicas e
                  históricas. Mas penso que uma situação que era considerada engraçada antigamente, hoje pode ser
                  encarada como assédio. Quando era modelo, sofri muito assédio moral, sexual... Ficava desconfortável
                  na hora, mas saía no humor."
                </blockquote>
                <p className="text-muted small mt-3 mb-0">
                  Fonte:{" "}
                  <a
                    href="https://www.uol.com.br/splash/noticias/2021/11/24/caua-reymond-ja-sofreu-muito-assedio-moral-e-sexual-desconfortavel.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-primary"
                  >
                    UOL
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bj9uDmbUfeiWujBu4BnwGUFJwvJGpZ.png"
                alt="Vera Fischer"
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body p-4">
                <h3 className="h5 fw-bold mb-3 text-purple-primary">Vera Fischer</h3>
                <p className="mb-3">
                  Ao participar do programa "Conversa com Bial", Vera Fischer revelou que foi vítima de assédio moral
                  praticado por um diretor da Globo.
                </p>
                <blockquote className="mb-3 fst-italic">
                  "Ele dizia assim: 'Chora, sua loira burra, sua loira alemã que não sente nada, que não sabe chorar'.
                  Eu falava então: 'Venha aqui me ensinar como é que faz, qual é o botão que liga', contou a atriz."
                </blockquote>
                <blockquote className="mb-0 fst-italic">
                  "Tinha gente me cantando, eu dava umas desculpas que eu não posso falar agora porque são disgusting,
                  mas eu me safava. Aprendi a me safar rapidinho", finalizou.
                </blockquote>
                <p className="text-muted small mt-3 mb-0">
                  Fonte:{" "}
                  <a
                    href="https://istoe.com.br/veja-lista-de-famosos-que-revelaram-ter-sofrido-casos-de-assedio-na-globo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-primary"
                  >
                    IstoÉ
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ASN4PqbIEaf27Ray425E6bW9aGxTaO.png"
                alt="Carina Pereira"
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body p-4">
                <h3 className="h5 fw-bold mb-3 text-purple-primary">Carina Pereira</h3>
                <p className="mb-3">Carina Pereira relata sobre o que passou durante seu trabalho na Globo.</p>
                <blockquote className="mb-0 fst-italic">
                  "No decorrer do contrato de trabalho, mais especificamente, nos dois últimos anos a obreira sofria
                  pressões de variadas formas como piadas, assédio de cunho machista e sexista, além de ser alijada das
                  suas funções, com diminuição de matérias, troca de programa, sendo constantemente, censurada, abordada
                  e advertida por seus superiores. No início eram piadinhas maldosas de cunho machista e sexistas dos
                  seus pares, após passou a ser do seu superior. As atitudes da ocasião eram, nitidamente machistas e
                  colocou a figura feminina numa posição em que a beleza física é supervalorizada em detrimento dos
                  tributos intelectuais."
                </blockquote>
                <p className="text-muted small mt-3 mb-0">
                  Fonte:{" "}
                  <a
                    href="https://istoe.com.br/veja-lista-de-famosos-que-revelaram-ter-sofrido-casos-de-assedio-na-globo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-primary"
                  >
                    IstoÉ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
