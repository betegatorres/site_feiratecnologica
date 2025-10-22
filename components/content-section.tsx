import { Card } from "@/components/ui/card"
import { AlertTriangle, Shield, Heart, Scale } from "lucide-react"

export function ContentSection() {
  return (
    <section id="conteudo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">O que é Assédio Moral?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entenda as características, consequências e formas de combate ao assédio moral
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card border-border">
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Definição</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O assédio moral é caracterizado por condutas abusivas, repetitivas e sistemáticas que visam humilhar,
              constranger ou desestabilizar emocionalmente uma pessoa, geralmente em ambiente de trabalho ou escolar.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Comportamento repetitivo e prolongado</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Intenção de prejudicar ou humilhar</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Abuso de poder ou autoridade</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card border-border">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Consequências</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As vítimas de assédio moral podem sofrer graves impactos em sua saúde física e mental, afetando sua
              qualidade de vida e desempenho.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Ansiedade e depressão</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Baixa autoestima e insegurança</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Problemas físicos (insônia, dores)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Isolamento social</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card border-border">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Como Identificar</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <span className="text-muted-foreground">Críticas constantes e humilhações públicas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <span className="text-muted-foreground">Isolamento e exclusão de atividades</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <span className="text-muted-foreground">Sobrecarga ou retirada de tarefas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <span className="text-muted-foreground">Ameaças e intimidações frequentes</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card border-border">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <Scale className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Como Combater</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <span className="text-muted-foreground">Documente todas as situações de assédio</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <span className="text-muted-foreground">Busque apoio de colegas e testemunhas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <span className="text-muted-foreground">Denuncie aos órgãos competentes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <span className="text-muted-foreground">Procure apoio psicológico e jurídico</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dados e Estatísticas</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O assédio moral é uma realidade preocupante no Brasil e no mundo. Estudos mostram que milhões de
                trabalhadores são afetados anualmente.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Casos reportados</span>
                    <span className="text-sm font-bold text-primary">42%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "42%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Impacto na saúde mental</span>
                    <span className="text-sm font-bold text-primary">78%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Afastamento do trabalho</span>
                    <span className="text-sm font-bold text-primary">35%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "35%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-4 h-64 flex items-center justify-center border border-border">
              <img
                src="/infographic-statistics-chart.jpg"
                alt="Gráfico com estatísticas sobre assédio moral"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
