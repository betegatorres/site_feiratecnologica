export default function AboutSection() {
  return (
    <section id="sobre" className="py-5 bg-white">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-4">Sobre o Site</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <p className="fs-5 mb-4 text-center">
                  Neste site iremos trabalhar com as disciplinas de <strong>Língua Portuguesa</strong> e{" "}
                  <strong>Interfaces Web</strong> que são ministradas respectivamente pelas professoras{" "}
                  <strong>Amanda Chagas</strong> e <strong>Cíntia Pinho</strong> e temos o intuito de alcançar pessoas
                  que sofrem com o assédio moral e pessoas do mercado de trabalho para que elas saibam o que é assédio
                  moral e possam identificar como lidar da forma correta.
                </p>
                <p className="fs-5 mb-0 text-center">
                  E para realizarmos este projeto usamos como base o livro <strong>"Filhos do Quarto"</strong>, após a
                  leitura identificamos o tema de Assédio Moral e decidimos retratá-lo em nosso projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
