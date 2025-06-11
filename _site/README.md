# Tema Científico para Jekyll

Um tema moderno e responsivo para blogs Jekyll com foco em ciência e tecnologia.

## 🔬 Características

- **Design Científico**: Fundo com elementos visuais científicos (DNA, moléculas, microscópio)
- **Cores Modernas**: Paleta de cores azul/ciano com acentos em verde
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Acessível**: Suporte a leitores de tela e navegação por teclado
- **Performance**: CSS otimizado e carregamento rápido
- **Componentes Prontos**: Cards, botões, formulários e badges estilizados

## 🎨 Demonstração

Você pode ver o tema funcionando em: [Demo Online](https://8000-ih5voqbmx7jvjers8vmim-03af125f.manusvm.computer/demo.html)

## 📁 Estrutura de Arquivos

```
scientific-theme/
├── _config.yml              # Configuração do Jekyll
├── _layouts/
│   ├── default.html         # Layout principal
│   └── post.html           # Layout para posts
├── _includes/
│   ├── header.html         # Cabeçalho do site
│   └── footer.html         # Rodapé do site
├── _sass/
│   ├── _variables.scss     # Variáveis CSS
│   ├── _base.scss          # Estilos base
│   ├── _layout.scss        # Layouts e estrutura
│   ├── _components.scss    # Componentes reutilizáveis
│   └── _responsive.scss    # Estilos responsivos
├── assets/
│   ├── css/
│   │   └── main.scss       # Arquivo CSS principal
│   ├── js/
│   │   └── main.js         # JavaScript principal
│   └── images/
│       └── scientific-background.png  # Imagem de fundo
├── index.html              # Página inicial
├── demo.html               # Demonstração completa
└── README.md               # Este arquivo
```

## 🚀 Instalação

### Opção 1: Usar como tema base

1. Copie todos os arquivos para o diretório do seu projeto Jekyll
2. Execute `bundle install` para instalar dependências
3. Execute `bundle exec jekyll serve` para iniciar o servidor local
4. Acesse `http://localhost:4000` para ver o site

### Opção 2: Personalizar um site existente

1. Copie os arquivos `_sass/` e `assets/` para seu projeto
2. Substitua ou adapte os layouts em `_layouts/` e `_includes/`
3. Atualize seu `_config.yml` com as configurações do tema

## ⚙️ Configuração

### _config.yml

```yaml
# Configurações básicas
name: "Seu Blog Científico"
description: "Descrição do seu blog"
url: "https://seublog.com"
baseurl: ""

# Cores do tema (opcional)
theme_color: "#1e3a8a"
accent_color: "#06b6d4"

# Plugins recomendados
plugins:
  - jekyll-feed
  - jekyll-sitemap
```

### Personalização de Cores

Edite o arquivo `_sass/_variables.scss` para personalizar as cores:

```scss
// Cores principais
$primary-color: #1e3a8a;      // Azul escuro
$secondary-color: #06b6d4;     // Ciano
$accent-color: #10b981;        // Verde esmeralda

// Cores de fundo
$bg-primary: #0f172a;          // Azul muito escuro
$bg-secondary: #1e293b;        // Azul escuro médio
```

## 📝 Criando Conteúdo

### Posts

Crie arquivos `.md` na pasta `_posts/` com o formato:

```markdown
---
layout: post
title: "Título do Post"
date: 2024-01-15
categories: [Biologia]
tags: [DNA, CRISPR, Medicina]
author: "Seu Nome"
---

Conteúdo do seu post aqui...
```

### Páginas

Crie arquivos `.md` ou `.html` na raiz do projeto:

```markdown
---
layout: default
title: "Sobre"
---

Conteúdo da página sobre...
```

## 🎨 Componentes Disponíveis

### Botões

```html
<a href="#" class="btn btn-primary">Botão Primário</a>
<a href="#" class="btn btn-secondary">Botão Secundário</a>
<a href="#" class="btn btn-ghost">Botão Ghost</a>
```

### Cards

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Título</h3>
        <p class="card-subtitle">Subtítulo</p>
    </div>
    <div class="card-content">
        <p>Conteúdo do card...</p>
    </div>
    <div class="card-footer">
        <a href="#" class="btn btn-ghost">Ver Mais</a>
        <span class="badge badge-primary">Badge</span>
    </div>
</div>
```

### Badges/Tags

```html
<span class="badge badge-primary">Primário</span>
<span class="badge badge-success">Sucesso</span>
<span class="badge badge-warning">Aviso</span>
<span class="badge badge-danger">Perigo</span>
```

### Alertas

```html
<div class="alert alert-info">Informação importante</div>
<div class="alert alert-success">Operação realizada com sucesso</div>
<div class="alert alert-warning">Atenção necessária</div>
<div class="alert alert-danger">Erro encontrado</div>
```

## 📱 Responsividade

O tema é totalmente responsivo e se adapta automaticamente a:

- **Desktop**: Layout completo com sidebar e navegação horizontal
- **Tablet**: Layout adaptado com navegação otimizada
- **Mobile**: Menu hambúrguer e layout em coluna única

## 🎯 Funcionalidades JavaScript

- Menu mobile responsivo
- Efeitos de scroll no header
- Partículas animadas (apenas desktop)
- Scroll suave para âncoras
- Lazy loading de imagens

## 🔧 Personalização Avançada

### Alterando o Fundo

Para usar sua própria imagem de fundo científica:

1. Substitua `assets/images/scientific-background.png`
2. Ou edite o CSS em `_sass/_base.scss`:

```scss
.scientific-theme::before {
    background-image: url('caminho/para/sua/imagem.png');
}
```

### Adicionando Novas Cores

Adicione novas variáveis em `_sass/_variables.scss`:

```scss
$custom-color: #ff6b6b;
```

E use nos seus estilos:

```scss
.meu-elemento {
    color: $custom-color;
}
```

## 🐛 Solução de Problemas

### CSS não está carregando

1. Verifique se o Jekyll está compilando corretamente
2. Confirme que o arquivo `assets/css/main.scss` existe
3. Execute `bundle exec jekyll build --verbose` para ver erros

### Imagem de fundo não aparece

1. Verifique se o arquivo `assets/images/scientific-background.png` existe
2. Confirme que o caminho no CSS está correto
3. Teste em diferentes navegadores

### Menu mobile não funciona

1. Verifique se o arquivo `assets/js/main.js` está sendo carregado
2. Abra o console do navegador para ver erros JavaScript
3. Confirme que os elementos HTML têm as classes corretas

## 📄 Licença

Este tema é fornecido como está, para uso pessoal e comercial.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novas funcionalidades
- Contribuir com código
- Melhorar a documentação

## 📞 Suporte

Para dúvidas sobre o tema:

1. Consulte esta documentação
2. Verifique os arquivos de exemplo
3. Teste a demonstração online

---

**Desenvolvido com ❤️ para a comunidade científica**

