<p align="center">
  <img src="https://github.com/v-rapha/proffy/blob/master/.github/logo.svg" alt="Proffy" width="300" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/vinicius-raphael/">
    <img alt="Made by v-rapha" src="https://img.shields.io/badge/-Vinicius%20Raphael-6d3cde?style=flat&logo=Linkedin&logoColor=white" />
  </a>
    
  <a href="https://github.com/v-rapha/proffy/blob/master/LICENCE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-6d3cde" />
  </a>
</p>

## :book: Sobre
O <strong>Proffy</strong> é uma aplicação que tem como objetivo ser uma plataforma de estudos conectando professores e alunos.

## :computer: Tecnologias utilizadas
- [TypeScript](https://www.typescriptlang.org)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://reactnative.dev)
- [Expo](https://expo.io)

## :rocket: Como usar
- Para rodar a aplicação você precisará ter instalado na sua máquina o [Node.js](https://nodejs.org/en/), [NPM](https://www.npmjs.com/) ou [YARN](https://classic.yarnpkg.com/en/docs/install/) também o [Expo](https://expo.io/learn).
- Caso for rodar a aplicação mobile no dispositivo fisico, você irá precisar ter instalado o aplicativo do [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt).

### :package: Clone o repositório:
```bash
$ git clone https://github.com/v-rapha/proffy.git
```

### :construction_worker: Instale as dependências usando NPM ou YARN e inicie
- ### Iniciando o server
```bash
# Entre no arquivo server
$ cd proffy/server

# Instale as dependências
$ npm install

# Rode as migrations
$ npm run knex:migrate

# Inicie o server
$ npm start
```

- ### Iniciando a aplicação web
```bash
# Entre no arquivo web
$ cd proffy/web

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
```

- ### Iniciando a aplicação mobile
```bash
# Entre no arquivo mobile
$ cd proffy/mobile

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start

# O Expo irá abrir no terminal e/ou no navegador.
# Você precisa apenas escanear o QRcode com seu dispositivo fisico ou rodar a aplicação no seu emulador

# No arquivo api.ts, troque a baseURL pelo seu endereço IP
```
## :mortar_board: Quem ministrou
As aulas foram ministradas pelo mestre [Diego Fernandes](https://github.com/diego3g) nas aulas da <strong>Next Level Week 2ª edição</strong>.

## :page_facing_up: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/v-rapha/proffy/blob/master/LICENCE) para mais detalhes.

#### Feito com :heart: by [Vinicius Raphael](https://www.linkedin.com/in/vinicius-raphael/)
