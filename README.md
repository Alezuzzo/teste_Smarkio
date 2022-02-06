<h1 align="center">Text To Speech - IBM Watson</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/thalles-alexsander-faria-muzzo-76baa41a9/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Thalles%20Alexsander-gree">
  </a>
</p>

## Sobre o projeto

-  <p style="color: black;">O Text To Speech converte o texto escrito em audio, com pouquissímo atraso e com entonação apropriada para seu idioma e dialeto, fornecendo maior acessibilidade. </p>

## Pré-requisitos

Primeiramente instale o necessário para começar:
- Node.js
- MySQL
- Postman

## Iniciando

**Clone o projeto e acesse a pasta.**

## Configure o banco de dados
Altere o arquivo config.json dentro da pasta backend-smarkio, trocando o usuário e senha.

```bash
  {
    "user": "<usuário>",
    "password": "<senha>"
  }
```

**Se não estiver usando MariaDB, deve-se executar o comando "ALTER USER '<usuário>'@'localhost' IDENTIFIED WITH mysql_native_password BY '<senha>'**

## Instale as dependências

Abra a pasta raiz do projeto e execute o comando:

```sh
npm install
```
### Rode o servidor


Ao terminar a instalação, execute o servidor MySQL e o comando:

```sh
npm start
```

Uma página no navegador abrirá na porta localhost:3000.

### Iniciando o servidor backend

No terminal, abra a pasta back-smarkio e coloque o comando:

```sh
nodemon
```

### Utilizando

Agora insira um texto na caixa de comentário e aperte o botão cadastrar, após, será possível apertar o botão ouvir a frente para executar o áudio.

💻 **Authors**

-  <p>Thalles Alexsander</p>
   Obrigado pela visita!
