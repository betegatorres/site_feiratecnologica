export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="text-center">
          <h3 className="h4 fw-bold mb-3">Assédio Moral - Trabalho Interdisciplinar</h3>

          <div className="mb-4">
            <p className="fw-bold mb-2">Feito por:</p>
            <p className="text-white-50 mb-1">
              Matheus Torres, Matheus Fabri, Robson Cardoso, Yasmin Carvalho e Maria Eduarda
            </p>
          </div>

          <div className="pt-4 border-top border-secondary">
            <p className="text-white-50 small mb-0">© {new Date().getFullYear()} - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
