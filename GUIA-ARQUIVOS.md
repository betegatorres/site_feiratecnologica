# 📁 Guia de Arquivos - Projeto Assédio Moral

Este documento explica de forma simples o que é cada pasta e arquivo do projeto.

---

## 📂 PASTAS (Pasta de arquivos)

### 📁 app
**O que é:** Pasta principal do site
**O que tem dentro:** Todas as páginas do site e configurações de layout
- `page.tsx` - Página inicial do site
- `layout.tsx` - Layout geral (cabeçalho, rodapé, etc)
- `globals.css` - Estilos globais do site

### 📁 components
**O que é:** Pasta com os componentes do site
**O que tem dentro:** Cada seção do site (hero, navbar, footer, etc)
- Exemplo: `navbar.tsx` - Barra de navegação
- Exemplo: `hero-section.tsx` - Seção principal do topo

### 📁 hooks
**O que é:** Pasta com funções reutilizáveis
**O que tem dentro:** Códigos que podem ser usados em várias partes do site

### 📁 lib
**O que é:** Pasta com bibliotecas e utilitários
**O que tem dentro:** Funções auxiliares para o projeto

### 📁 public
**O que é:** Pasta com arquivos públicos
**O que tem dentro:** Imagens, ícones e outros arquivos que aparecem no site

### 📁 styles
**O que é:** Pasta com estilos CSS
**O que tem dentro:** Arquivos de estilo e design do site

---

## 📄 ARQUIVOS

### 📄 .gitignore (Arquivo GITIGNORE)
**O que é:** Lista de arquivos que não devem ser enviados para o GitHub
**Para que serve:** Evita enviar arquivos desnecessários ou sensíveis

### 📄 components.json (Arquivo JSON)
**O que é:** Configuração dos componentes do shadcn/ui
**Para que serve:** Define como os componentes visuais funcionam

### 📄 next.config.mjs (Arquivo MJS)
**O que é:** Configuração do Next.js
**Para que serve:** Define como o site funciona e é construído

### 📄 package.json (Arquivo JSON)
**O que é:** Lista de dependências e informações do projeto
**Para que serve:** 
- Nome do projeto: "assedio-moral"
- Lista todas as bibliotecas usadas
- Define comandos para rodar o site

### 📄 pnpm-lock.yaml (Arquivo YAML)
**O que é:** Arquivo de bloqueio de versões
**Para que serve:** Garante que todos usem as mesmas versões das bibliotecas

### 📄 postcss.config.mjs (Arquivo MJS)
**O que é:** Configuração do PostCSS
**Para que serve:** Processa e otimiza os estilos CSS

### 📄 tsconfig.json (Arquivo JSON)
**O que é:** Configuração do TypeScript
**Para que serve:** Define como o código TypeScript é compilado

### 📄 README.md (Arquivo MD)
**O que é:** Documentação principal do projeto
**Para que serve:** Explica o que é o projeto e como usar

### 📄 ESTRUTURA.md (Arquivo MD)
**O que é:** Documentação da estrutura do projeto
**Para que serve:** Explica a organização das pastas e arquivos

---

## 🎨 TIPOS DE ARQUIVO

- **`.tsx`** = Arquivo TypeScript com React (componentes do site)
- **`.ts`** = Arquivo TypeScript (código JavaScript tipado)
- **`.css`** = Arquivo de estilos (cores, fontes, layouts)
- **`.json`** = Arquivo de configuração (formato de dados)
- **`.mjs`** = Arquivo JavaScript moderno
- **`.yaml`** = Arquivo de configuração (formato alternativo)
- **`.md`** = Arquivo Markdown (documentação)

---

## 🚀 COMANDOS PRINCIPAIS

\`\`\`bash
# Instalar dependências
npm install

# Rodar o site localmente
npm run dev

# Construir para produção
npm run build
\`\`\`

---

## 👥 EQUIPE

- **Cauã Reymond Rodrigues**
- **Enzo Henrique Rodrigues Ferreira**
- **Enzo Vinicius Rodrigues Ferreira**
- **Guilherme Henrique Rodrigues Ferreira**
- **Maria Eduarda Rodrigues Ferreira**
- **Matheus Henrique Rodrigues Ferreira**

**Orientadoras:**
- Profª. Cintia Pinho (Interfaces Web)
- Profª. Amanda Chagas (Língua Portuguesa)

---

**Projeto:** Assédio Moral - Trabalho Interdisciplinar  
**Curso:** 1º ano do Ensino Médio Integrado ao Técnico em Informática para Internet
