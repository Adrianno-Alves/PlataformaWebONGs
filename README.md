# 🐾 PlataformaWebONGs - Wild Hearts

> **⚠️ IMPORTANTE:** Este é um projeto educacional desenvolvido para o curso de Análise e Desenvolvimento de Sistemas (ADS) como Experiência Prática. Todas as informações, dados e funcionalidades são fictícias e criadas apenas para fins de aprendizado.

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Páginas e Seções](#páginas-e-seções)
- [Design e UX](#design-e-ux)
- [Responsividade](#responsividade)
- [Boas Práticas Implementadas](#boas-práticas-implementadas)
- [Autor](#autor)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Plataforma web completa para a ONG fictícia "Wild Hearts", especializada em resgate, reabilitação e adoção de animais. O projeto foi desenvolvido como trabalho prático do curso de ADS, focando em demonstrar habilidades em desenvolvimento front-end, design responsivo e estruturação de conteúdo web.

### Objetivos do Projeto

- Criar uma interface intuitiva e acessível para ONGs
- Demonstrar competências em HTML5, CSS3 e JavaScript
- Implementar design responsivo mobile-first
- Aplicar conceitos de UX/UI em projetos sociais
- Desenvolver sistema de navegação eficiente

## 🖼️ Demonstração

O site apresenta uma experiência completa de navegação com:

- Sistema de navegação responsivo com menu hamburger
- Avisos claros sobre a natureza educacional do projeto
- Interface visual moderna com paleta de cores temática
- Animações e transições suaves

## ✨ Funcionalidades

### Core Features

- **Sistema de Navegação Multi-nível**

  - Navegação principal com 5 seções
  - Menu mobile responsivo
  - Links de ancoragem para navegação interna

- **Páginas Institucionais**

  - História e valores da organização
  - Estrutura organizacional detalhada
  - Transparência financeira
  - Indicadores de impacto

- **Sistema de Doações**

  - Múltiplas formas de pagamento (PIX, Cartão, TED)
  - Campanhas ativas com barra de progresso
  - Prestação de contas transparente
  - Simulador de impacto de doações

- **Gestão de Voluntariado**

  - Cadastro de voluntários
  - Sistema de vagas disponíveis
  - Área do voluntário com login
  - Certificados digitais

- **Projetos Ativos**
  - Detalhamento de cada projeto
  - Galeria de imagens e vídeos
  - Indicadores de performance
  - Categorização por área de atuação

### Features Técnicas

- Formulários HTML5 com validação
- CSS Grid e Flexbox para layouts
- JavaScript para interatividade
- Design system consistente
- Otimização de imagens

## 🛠️ Tecnologias Utilizadas

### Front-end

- **HTML5**

  - Estrutura semântica
  - Formulários com validação nativa
  - Meta tags para SEO e responsividade

- **CSS3**

  - Grid Layout e Flexbox
  - Variáveis CSS (potencial para implementação)
  - Animações e transições
  - Media queries para responsividade

- **JavaScript (Vanilla)**
  - Manipulação do DOM
  - Event listeners
  - Toggle de menu mobile

### Recursos Externos

- YouTube API para embedding de vídeos
- Google Fonts (Segoe UI como fallback)

## 📁 Estrutura do Projeto

```
PlataformaWebONGs/
│
├── index.html              # Página institucional (home)
├── doacao.html            # Sistema de doações
├── projeto.html           # Portfólio de projetos
├── ajuda.html             # Voluntariado e como ajudar
├── login.html             # Autenticação de usuários
├── registro.html          # Cadastro de novos usuários
│
├── styles.css             # Estilos globais (CSS minificado)
├── script.js              # JavaScript principal
│
├── img/                   # Diretório de imagens
│   ├── menu_*.png        # Ícones do menu
│   ├── close_*.png       # Ícone de fechar
│   └── *.jpg             # Imagens de conteúdo
│
└── README.md             # Documentação do projeto
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Servidor local (opcional, para desenvolvimento)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/PlataformaWebONGs.git
```

2. Navegue até o diretório:

```bash
cd PlataformaWebONGs
```

3. Abra o projeto:

   - **Opção 1:** Abra `index.html` diretamente no navegador
   - **Opção 2:** Use um servidor local:

   ```bash
   # Com Python
   python -m http.server 8000

   # Com Node.js (http-server)
   npx http-server

   # Com VS Code (Live Server extension)
   # Clique direito em index.html > Open with Live Server
   ```

4. Acesse no navegador:

```
http://localhost:8000
```

## 📄 Páginas e Seções

### 1. Index (Institucional)

- **Seções:**
  - Sobre Nós
  - Visão e Missão
  - Valores Organizacionais
  - História Detalhada
  - Conquistas por Ano
  - Equipe Completa
  - Transparência Financeira

### 2. Doações

- **Seções:**
  - Banner de Call-to-Action
  - Campanhas Ativas
  - Sistema de Doação Online
  - Metas e Progressos
  - Prestação de Contas

### 3. Projetos

- **Seções:**
  - Lista de Projetos Ativos
  - Galeria Multimídia
  - Indicadores de Impacto
  - Categorias de Projetos

### 4. Como Ajudar

- **Seções:**
  - Oportunidades de Voluntariado
  - Processo de Inscrição
  - Formulário de Cadastro
  - Área do Voluntário

### 5. Login/Registro

- **Funcionalidades:**
  - Formulário de autenticação
  - Cadastro de novos usuários
  - Seleção de perfil (Voluntário/Doador/Admin)

## 🎨 Design e UX

### Paleta de Cores

```css
Primária:    #D97706 (Âmbar/Laranja)
Secundária:  #B45309 (Laranja Escuro)
Neutra:      #FEF9F3 (Bege Claro)
Acentos:     #FEF3C7 (Amarelo Claro)
             #FDE68A (Amarelo Médio)
Texto:       #333333 (Cinza Escuro)
             #666666 (Cinza Médio)
```

### Tipografia

- **Família Principal:** Segoe UI (com fallbacks)
- **Hierarquia:**
  - H1: 2em
  - H2: 2em
  - H3: 1.5em
  - H4: 1.2em
  - Body: 1em (line-height: 1.6)

### Componentes Principais

- **Cards:** Design elevado com sombras suaves
- **Botões:** Estados hover com animações
- **Formulários:** Inputs estilizados com validação visual
- **Badges:** Indicadores de status coloridos
- **Barras de Progresso:** Feedback visual de metas

## 📱 Responsividade

### Breakpoints

- **Mobile:** < 768px (design base)
- **Tablet:** 768px - 1024px (em desenvolvimento)
- **Desktop:** > 1024px (em desenvolvimento)

### Abordagem Mobile-First

O design foi desenvolvido priorizando dispositivos móveis, com:

- Menu hamburger funcional
- Grid de 1 coluna adaptável
- Imagens e vídeos responsivos
- Touch-friendly buttons e links

### Melhorias Planejadas

- [ ] Media queries para tablet e desktop
- [ ] Grid de 2-3 colunas em telas maiores
- [ ] Otimização de imagens por breakpoint
- [ ] Menu desktop com dropdowns

## ✅ Boas Práticas Implementadas

### HTML

- ✅ Estrutura semântica (header, nav, main, section, article, footer)
- ✅ Meta tags adequadas (charset, viewport, author)
- ✅ Comentários de identificação em todas as páginas
- ✅ Atributos alt em imagens
- ✅ Labels associados a inputs

### CSS

- ✅ Reset CSS básico
- ✅ Nomenclatura consistente (BEM-like)
- ✅ Reutilização de classes
- ✅ Transições suaves
- ✅ CSS minificado para produção

### JavaScript

- ✅ Código modular e reutilizável
- ✅ Event listeners apropriados
- ✅ Manipulação eficiente do DOM
- ✅ Funções com responsabilidade única

### Acessibilidade

- ✅ Contraste adequado de cores
- ✅ Fontes legíveis
- ✅ Áreas clicáveis suficientes (44px mínimo)
- ⚠️ A melhorar: ARIA labels, navegação por teclado

### Performance

- ✅ CSS minificado
- ✅ Imagens otimizadas
- ✅ Lazy loading em imagens
- ⚠️ A melhorar: Minificação de JS, Critical CSS

## 👨‍💻 Autor

**Adrianno Pereira Alves**

- Estudante de Análise e Desenvolvimento de Sistemas
- Projeto desenvolvido para: Experiência Prática - Curso ADS
- Data de criação: Outubro/2025

## 📄 Licença

Este projeto é educacional e fictício. Desenvolvido exclusivamente para fins de aprendizado acadêmico.

**Não possui licença de uso comercial.**

---

## 🙏 Agradecimentos

- Curso de ADS por proporcionar a oportunidade de aprendizado
- Comunidade de desenvolvedores por recursos educacionais
- Ferramentas open-source utilizadas no desenvolvimento

<div align="center">

**⚠️ AVISO FINAL ⚠️**

Este é um projeto completamente fictício criado para fins educacionais.
Nenhuma das informações, dados, projetos ou organizações mencionadas são reais.

Desenvolvido com 💚 para aprendizado em desenvolvimento web.

</div>
