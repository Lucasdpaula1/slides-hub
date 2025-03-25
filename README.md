# Slide HUB

Hub de Slides com React e Reveal.js. O objetivo do projeto é manter em um só local todos os slides que eu utilizarei durante minhas aulas e palestras.

## 💻 Rodando a aplicação localmente

### 1. Clone o repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Navegue até a pasta do projeto

```bash
cd slide-hub
```

### 3. Instale as dependências

Este projeto usa o Yarn como gerenciador de pacotes. Para instalar as dependências, execute:

```bash
yarn install
```

### 4. Rodando a aplicação localmente

Para rodar a aplicação em modo de desenvolvimento, use o comando:

```bash
yarn dev
```

Por padrão, a aplicação estará disponível em http://localhost:5173.

## 🐳 Rodando com Docker

Se preferir rodar a aplicação em um container Docker, siga os seguintes passos:

### 1. Certifique-se de ter o Docker e o Docker Compose instalados.

Verifique se o Docker está instalado com:

```bash
docker --version
```

### 2. Construa a imagem Docker

```bash
docker-compose up --build
```

### 3. Acesse a aplicação

Depois de construir e rodar o container, a aplicação estará disponível em http://localhost:5173.

## 📄 Scripts Disponíveis

### `yarn dev`

Roda a aplicação em modo de desenvolvimento.

### `yarn build`

Cria a versão otimizada para produção da aplicação.

## 🛠 Ferramentas usadas

- **Node** - 22.14.0
- **React** - 19.0.0
- **Vite** - 6.2.0
- **Reveal.js** - 5.2.0
- **Yarn** - 1.22.22
- **Docker** - Containerização do projeto.
