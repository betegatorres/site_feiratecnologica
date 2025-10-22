export default function TeamSection() {
  const students = [
    {
      name: "Matheus Torres",
      role: "Coleta de informações e Desenvolvimento",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lhryHTG8c3Dm3ntAdqzt61Q0XIVysw.png",
    },
    {
      name: "Matheus Fabri",
      role: "Desenvolvimento",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GJRMEW4qqtdYi7Urd8b7eBjcCmjqib.png",
    },
    {
      name: "Robson Cardoso",
      role: "Desenvolvimento",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3jEMPfOREGXs7819wqyxbGBhYvo37H.png",
    },
    {
      name: "Yasmin Carvalho",
      role: "Banner e Design Geral",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n8EU8oYHEa42daf2VNCWEmTSXsHf03.png",
    },
    {
      name: "Maria Eduarda",
      role: "Coleta de informações e Design",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RAjHzgiF0P1m7bmWgBadJWpDnG5eRc.png",
    },
  ]

  const teachers = [
    {
      name: "Profª. Cintia Pinho",
      subject: "Interfaces Web",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fGebeQ5UdMKx39Oyy6sPtcMK5p23RD.png",
    },
    {
      name: "Profª. Amanda Chagas",
      subject: "Língua Portuguesa",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vjBzE3knNJaMajiCOkFYNqPjPMn24p.png",
    },
  ]

  const awarenessMessages = [
    {
      title: "Você não está sozinho(a)",
      message:
        "Se você está passando por assédio moral, saiba que há pessoas e instituições prontas para ajudar. Não tenha medo de buscar apoio.",
      icon: "💙",
    },
    {
      title: "Denuncie",
      message:
        "O silêncio perpetua o assédio. Denuncie aos canais competentes: RH, sindicatos, Ministério do Trabalho ou Justiça do Trabalho.",
      icon: "📢",
    },
    {
      title: "Respeito é fundamental",
      message:
        "Todo trabalhador merece um ambiente saudável e respeitoso. Juntos podemos promover mudanças e combater o assédio moral.",
      icon: "🤝",
    },
  ]

  return (
    <section id="orientadoras" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Nossa Equipe</h2>
          <p className="lead text-muted">Conheça os alunos e professores que tornaram este projeto possível</p>
        </div>

        <div className="mb-5">
          <h3 className="h4 fw-bold mb-4 text-center">Alunos</h3>
          <div className="row g-4 justify-content-center">
            {students.map((student, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div
                      className="mx-auto mb-3 rounded-circle overflow-hidden"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h5 className="card-title fw-bold mb-2">{student.name}</h5>
                    <p className="card-text text-muted small">{student.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="h4 fw-bold mb-4 text-center">Professoras Orientadoras</h3>
          <div className="row g-4 justify-content-center">
            {teachers.map((teacher, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div
                      className="mx-auto mb-3 rounded-circle overflow-hidden"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h5 className="card-title fw-bold mb-2">{teacher.name}</h5>
                    <p className="card-text text-muted small">{teacher.subject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="card border-0 shadow-sm bg-purple-light">
            <div className="card-body p-4">
              <h3 className="h5 fw-bold mb-4 text-center">Mensagens de Conscientização</h3>
              <div className="row g-4">
                {awarenessMessages.map((msg, index) => (
                  <div key={index} className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm bg-white">
                      <div className="card-body p-4 text-center">
                        <div className="fs-1 mb-3">{msg.icon}</div>
                        <h5 className="fw-bold mb-3 text-purple">{msg.title}</h5>
                        <p className="text-muted small mb-0">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
