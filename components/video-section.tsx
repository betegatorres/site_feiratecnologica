export default function VideoSection() {
  return (
    <section id="video" className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#9333ea" }}>
            Vídeo Educativo
          </h2>
          <p className="lead" style={{ color: "#e5e5e5" }}>
            Assista ao vídeo para entender melhor sobre assédio moral
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Rn4GECsY_xM"
                title="Vídeo sobre Assédio Moral"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "3px solid #9333ea" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
