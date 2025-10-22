# 📂 Estrutura de Pastas e Arquivos

Este documento explica a organização do projeto em português simples.

## 🗂️ Pastas Principais

### `/app` - Aplicação
Contém as páginas e configurações principais do site.

- **page.tsx** - Página inicial do site (onde tudo aparece)
- **layout.tsx** - Estrutura base que envolve todas as páginas
- **globals.css** - Estilos que funcionam em todo o site

### `/components` - Componentes
Contém todas as seções e partes reutilizáveis do site.

Cada arquivo `.tsx` é uma seção do site:

- **navbar.tsx** - Barra de navegação no topo
- **hero-section.tsx** - Primeira seção com título grande
- **about-section.tsx** - Seção "Sobre o Site"
- **why-section.tsx** - Seção "Porque este tema?"
- **concept-section.tsx** - Seção "O que é Assédio Moral"
- **research-section.tsx** - Seção "Pesquisas Recentes"
- **types-section.tsx** - Seção "Tipos de Assédio"
- **how-to-handle-section.tsx** - Seção "Como Enfrentar"
- **book-section.tsx** - Seção sobre o livro
- **graphics-section.tsx** - Seção com gráficos
- **video-section.tsx** - Seção com vídeo do YouTube
- **testimonials-section.tsx** - Seção com depoimentos
- **team-section.tsx** - Seção da equipe/orientadoras
- **footer.tsx** - Rodapé do site

### `/public` - Arquivos Públicos
Contém imagens, ícones e outros arquivos que aparecem no site.

- **images/** - Pasta com todas as imagens do site

### `/hooks` - Funções Auxiliares
Contém funções especiais que ajudam o site a funcionar.

### `/lib` - Bibliotecas
Contém código auxiliar usado em várias partes do site.

### `/styles` - Estilos
Contém arquivos de estilo CSS adicionais.

## 📄 Arquivos de Configuração

### `package.json`
Lista todas as bibliotecas e ferramentas que o site usa.

**Informações principais:**
- Nome do projeto: "assedio-moral"
- Versão: 1.0.0
- Comandos disponíveis:
  - `npm run dev` - Roda o site em modo de desenvolvimento
  - `npm run build` - Cria versão final do site
  - `npm run start` - Inicia o site em produção

### `tsconfig.json`
Configurações do TypeScript (linguagem de programação usada).

### `next.config.mjs`
Configurações do Next.js (framework usado para criar o site).

### `.gitignore`
Lista de arquivos que não devem ser enviados para o GitHub.

## 🎨 Como o Site Funciona

1. **Usuário acessa o site** → Abre `app/page.tsx`
2. **page.tsx carrega todos os componentes** → Cada seção aparece na ordem
3. **Componentes usam dados e imagens** → Buscam de `/public`
4. **Estilos são aplicados** → Usa `globals.css` e Tailwind CSS
5. **Site fica interativo** → JavaScript/React fazem a mágica acontecer

## 🔧 Modificando o Site

### Para mudar textos:
Abra o arquivo `.tsx` da seção que quer mudar e edite o texto dentro das tags HTML.

### Para mudar cores:
Edite o arquivo `app/globals.css` e mude as variáveis de cor.

### Para adicionar imagens:
1. Coloque a imagem na pasta `/public/images/`
2. Use no código: `<img src="/images/nome-da-imagem.jpg" />`

### Para adicionar nova seção:
1. Crie um novo arquivo em `/components/` (ex: `nova-secao.tsx`)
2. Adicione a seção no arquivo `app/page.tsx`

## 📱 Responsividade

O site se adapta automaticamente para:
- 📱 Celulares (telas pequenas)
- 💻 Tablets (telas médias)
- 🖥️ Computadores (telas grandes)

Isso é feito usando classes do Tailwind CSS como:
- `md:` - Para tablets e maiores
- `lg:` - Para computadores

## 🎯 Dicas Importantes

1. **Sempre teste no navegador** após fazer mudanças
2. **Use `npm run dev`** para ver mudanças em tempo real
3. **Não delete arquivos** sem saber o que fazem
4. **Faça backup** antes de grandes mudanças
5. **Peça ajuda** se algo não funcionar

---

**Qualquer dúvida, consulte o README.md ou peça ajuda aos professores!**
