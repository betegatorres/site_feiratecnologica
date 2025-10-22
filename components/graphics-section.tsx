"use client"

export default function GraphicsSection() {
  const data = [
    { label: "Ambiente de Trabalho", value: 40 },
    { label: "Escola", value: 15 },
    { label: "Órgãos públicos", value: 10 },
    { label: "Organizações religiosas", value: 5 },
    { label: "Locais de Jogos / Entretenimento", value: 2 },
    { label: "Outros Locais", value: 28 },
  ]

  return (
    <section
      id="graficos"
      className="py-5 text-white"
      style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-4">Casos de Assédio Moral (%)</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="chart-container">
              {data.map((item, index) => (
                <div key={index} className="chart-bar-item mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 mb-0 fw-bold">{item.label}</h3>
                    <span className="badge bg-light text-dark fs-6">{item.value}%</span>
                  </div>
                  <div className="progress" style={{ height: "30px", backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <div
                      className="progress-bar bg-light"
                      role="progressbar"
                      style={{ width: `${item.value}%` }}
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
