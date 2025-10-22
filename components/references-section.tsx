import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function ReferencesSection() {
  const references = [
    {
      title: "Filhos do Quarto - Análise Literária",
      author: "Autor da Obra",
      type: "Livro",
    },
    {
      title: "Assédio Moral no Trabalho",
      author: "Ministério do Trabalho",
      type: "Artigo",
    },
    {
      title: "Consequências Psicológicas do Assédio",
      author: "Revista de Psicologia",
      type: "Estudo",
    },
    {
      title: "Legislação Brasileira sobre Assédio Moral",
      author: "Portal Jurídico",
      type: "Documento",
    },
    {
      title: "Prevenção e Combate ao Assédio",
      author: "OIT - Organização Internacional do Trabalho",
      type: "Guia",
    },
    {
      title: "Estatísticas sobre Assédio no Brasil",
      author: "IBGE",
      type: "Pesquisa",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Referências</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fontes consultadas para o desenvolvimento deste projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {references.map((ref, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-colors group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {ref.type}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2 leading-tight">{ref.title}</h3>
              <p className="text-sm text-muted-foreground">{ref.author}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-muted border-border max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Nota sobre as Referências</h3>
            <p className="text-muted-foreground leading-relaxed">
              Todas as fontes utilizadas neste projeto foram cuidadosamente selecionadas e verificadas para garantir a
              precisão e confiabilidade das informações apresentadas. Para mais detalhes sobre cada referência, consulte
              a bibliografia completa do trabalho.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
