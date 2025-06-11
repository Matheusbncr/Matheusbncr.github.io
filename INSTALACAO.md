# 🚀 Instalação Rápida - Tema Científico Jekyll

## Pré-requisitos

- Ruby 2.7+ instalado
- Jekyll e Bundler instalados
- Git (opcional)

## Instalação em 3 Passos

### 1. Preparar o Ambiente

```bash
# Instalar Jekyll e Bundler (se não tiver)
gem install jekyll bundler

# Criar novo site Jekyll (ou usar existente)
jekyll new meu-blog-cientifico
cd meu-blog-cientifico
```

### 2. Instalar o Tema

```bash
# Opção A: Copiar arquivos do tema
# Copie todos os arquivos do tema para o diretório do seu projeto

# Opção B: Clonar e adaptar
# git clone [repositorio-do-tema] tema-temp
# cp -r tema-temp/* ./
# rm -rf tema-temp
```

### 3. Executar

```bash
# Instalar dependências
bundle install

# Executar servidor local
bundle exec jekyll serve

# Acessar http://localhost:4000
```

## 💻 Instalação no Windows

Para instalar o Jekyll no Windows, siga estes passos:

### 1. Instalar Ruby com RubyInstaller

1. Baixe o **Ruby+Devkit** mais recente do [RubyInstaller for Windows](https://rubyinstaller.org/downloads/). Escolha a versão `x64`.
2. Execute o instalador. Durante a instalação, certifique-se de marcar a opção **"Add Ruby executables to your PATH"**.
3. Ao final da instalação, o instalador perguntará se você deseja executar o `ridk install`. Selecione esta opção para instalar as ferramentas de desenvolvimento necessárias.
   - No prompt, digite `1` para instalar o MSYS2 base installation.
   - Pressione `Enter` para continuar.
   - Digite `3` para instalar o MSYS2 and MINGW development toolchain.
   - Pressione `Enter` para continuar.

### 2. Instalar Jekyll e Bundler

Abra o Prompt de Comando (CMD) ou PowerShell e execute:

```bash
gem install jekyll bundler
```

### 3. Criar e Configurar o Site Jekyll

1. Navegue até a pasta onde você deseja criar seu blog:
   ```bash
   cd C:\caminho\para\seu\blog
   ```
2. Crie um novo site Jekyll (opcional, se você já tem um):
   ```bash
   jekyll new meu-blog-cientifico
   cd meu-blog-cientifico
   ```
3. Copie os arquivos do tema `scientific-theme` (incluindo o `Gemfile`) para o diretório raiz do seu blog Jekyll.

### 4. Executar o Servidor Local

No diretório raiz do seu blog Jekyll, execute:

```bash
bundle install
bundle exec jekyll serve
```

Agora você pode acessar seu blog em `http://localhost:4000` no seu navegador.

## ⚡ Teste Rápido

Para testar imediatamente:

1. Abra `demo.html` em qualquer navegador
2. Ou use um servidor HTTP simples:
   ```bash
   python3 -m http.server 8000
   # Acesse http://localhost:8000/demo.html
   ```

## 🎨 Personalização Básica

### Alterar Informações do Site

Edite `_config.yml`:

```yaml
name: "Meu Blog Científico"
description: "Explorando o mundo da ciência"
url: "https://meublog.com"
```

### Alterar Cores

Edite `_sass/_variables.scss`:

```scss
$primary-color: #sua-cor-aqui;
$secondary-color: #sua-cor-aqui;
```

### Adicionar Seu Primeiro Post

Crie arquivo em `_posts/2024-01-15-meu-primeiro-post.md`:

```markdown
---
layout: post
title: "Meu Primeiro Post Científico"
date: 2024-01-15
categories: [Ciência]
tags: [pesquisa, descoberta]
---

Conteúdo do seu post aqui...
```

## 📁 Arquivos Importantes

- `_config.yml` - Configuração principal
- `_layouts/` - Templates das páginas
- `_sass/` - Estilos CSS
- `assets/` - Imagens, CSS e JavaScript
- `_posts/` - Seus artigos
- `demo.html` - Demonstração completa

## 🆘 Problemas Comuns

### Jekyll não encontrado
```bash
gem install jekyll bundler
```

### Erro de dependências
```bash
bundle update
bundle install
```

### CSS não carrega
- Verifique se `assets/css/main.scss` existe
- Execute `bundle exec jekyll build`

## 📞 Suporte

- Consulte `README.md` para documentação completa
- Veja `demo.html` para exemplos visuais
- Teste o post de exemplo em `_posts/`

---

**Pronto para começar! 🔬✨**

