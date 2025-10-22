export default function BookSection() {
  return (
    <section id="livro" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <p className="text-uppercase text-muted mb-2">Relação</p>
            <h2 className="display-5 fw-bold mb-4">A Relação com o Livro</h2>
          </div>
        </div>

        <div className="row align-items-center g-4">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h3 className="h4 fw-bold mb-3">Filhos do quarto</h3>
                <p className="text-muted mb-3">Por Elisabete Baptista</p>
                <p className="text-muted small mb-3">Ilustrações de Robson Araújo</p>
                <div className="mb-3">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6pAvjG5YyxPvFlWwTPIermozTSwxuR.png"
                    alt="Capa do livro Filhos do Quarto"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "400px" }}
                  />
                </div>
                <p className="text-muted small">Suinara, 2023</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <p className="fs-5 mb-4">
                  "Filhos do Quarto" é um romance de drama e mistério que explora os segredos de uma família
                  disfuncional e os efeitos de um evento trágico no passado. A história gira em torno de uma casa
                  isolada no interior, conhecida como "o quarto", onde quatro irmãos cresceram cercados por conflitos,
                  sonhos desfeitos e uma verdade obscura que nunca foi plenamente revelada.
                </p>
                <p className="fs-5 mb-4">
                  Enquanto os protagonistas enfrentam a vida adulta, são forçados a voltar para a casa da infância
                  devido a circunstâncias inesperadas, confrontando memórias dolorosas e revelações chocantes sobre seus
                  pais e uns sobre os outros. O livro mergulha profundamente nos laços familiares, nas complexidades
                  emocionais e no impacto das escolhas do passado no presente.
                </p>
                <p className="fs-5 mb-4">
                  A ligação entre a obra "Filhos do Quarto" e a temática do assédio moral no ambiente profissional é
                  significativa e esclarecedora. Na narrativa, Teresa vivencia um período de grande fragilidade após o
                  falecimento de seu esposo. Como viúva e mãe solteira, ela enfrenta dificuldades em manter seu
                  desempenho profissional durante esse momento delicado de luto. Ao invés de receber o apoio necessário,
                  Teresa se torna alvo de comportamentos hostis por parte de sua supervisora e de uma colega que ela
                  julgava ser sua amiga. Essas pessoas passam a fazer comentários depreciativos e zombarias constantes,
                  levando Teresa a se refugiar em seu quarto diariamente após o expediente. Nossa equipe identificou que
                  o tratamento recebido por Teresa configura assédio moral, pois as pessoas ao seu redor não
                  demonstraram respeito pelo seu momento de luto e, pelo contrário, a ridicularizavam cotidianamente.
                  Essa conduta se caracteriza como assédio moral quando tais comportamentos inadequados e perseguições
                  ocorrem de forma sistemática e repetitiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
