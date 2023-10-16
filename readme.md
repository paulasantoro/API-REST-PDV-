# PDV 
<h4 align="center"> 
	🚧 Ponto de venda 🚧
</h4>

<p align="center">
	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen">
</p> 

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto

Neste desafio do Módulo 5 da Cubos Academy, nossa equipe está empenhada em criar uma API para um PDV (Ponto de Venda), um projeto inicial que servirá como base para futuras funcionalidades emocionantes.
Iniciamos criando um banco de dados PostgreSQL chamado "pdv" e definindo tabelas essenciais, como "usuarios" e "categorias". Cada registro possui um campo "id" como chave primária e não pode ser editado após a criação. Valor monetário é representado em centavos para precisão e uniformidade.
Nossa API já é capaz de listar categorias, cadastrar usuários e permitir a autenticação. Os usuários podem criar contas, fazer login, visualizar e editar seus próprios perfis.

---

## ⚙️ Funcionalidades

- [x] Listar categorias
- [x] Cadastro de usuários
- [x] Efetuar login do usuário
- [x] Detalhar perfil do usuário ligado
- [x] Editar perfil do usuário ligado
---

## 🛣️ Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta server)
2. Insomia (testes de API)

💡 O insomia precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Insomia](https://insomnia.rest/download) . 
<br> Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:paulasantoro/desafio-unidade-05-pvd.git

# Instale as dependências

`$ npm install express`

`$ npm install nodemon -D`

`$ npm install knex --save`

`$ npm install pg`

`$ npm install cors`

`$ npm install dotenv`

`$ npm install bcrypt`

`$ npm install jsonwebtoken`

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000  

```
<p align="center">
  <a href="https://github.com/cubos-academy/academy-template-readme-projects" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>



## 👨‍💻 Contribuidores
<table>
  <tr>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-05-pvd/blob/master/imagens%20/larissa%20perfil.jpeg" width="100px;" alt=""/><br /><sub><b> Larissa Evelin  </b></sub></a><br /><a href="https://cubos.academy/" title="">👨‍💻</a></td>
  </tr> <tr> <td align="center"><a href=""><img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-05-pvd/blob/master/imagens%20/Laura.jpg" width="100px;" alt=""/><br /><sub><b> Milly Souza  </b></sub></a><br /><a href="https://cubos.academy/" title="">👨‍💻</a></td>
  </tr>  <tr>  <td align="center"><a href=""><img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/IMG_00-16.jpg" width="100px;" alt=""/><br /><sub><b>Paula Santoro </b></sub></a><br /><a href="https://cubos.academy/" title="">👨‍💻</a></td>
  </tr>
  
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---
## 🧙‍♂️ Autor
 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4D03AQEDfulqSVXZqw/profile-displayphoto-shrink_200_200/0/1674667231041?e=1688601600&v=beta&t=C-f9fp3xJDwXm1u4c6eMwpWfVIyW0eCTDAKGIyNdRJA" width="100px;" alt=""/>
 <br /> <sub><b>Paula Santoro</b></sub></a> <a href="" title="">✨</a>
 <br />

 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4D03AQEDfulqSVXZqw/profile-displayphoto-shrink_200_200/0/1674667231041?e=1688601600&v=beta&t=C-f9fp3xJDwXm1u4c6eMwpWfVIyW0eCTDAKGIyNdRJA" width="100px;" alt=""/>
 <br /> <sub><b> Larissa Evelin </b></sub></a> <a href="" title="">✨</a>
 <br /> 
 
 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4D03AQEDfulqSVXZqw/profile-displayphoto-shrink_200_200/0/1674667231041?e=1688601600&v=beta&t=C-f9fp3xJDwXm1u4c6eMwpWfVIyW0eCTDAKGIyNdRJA" width="100px;" alt=""/>
 <br /> <sub><b> Milly Souza </b></sub></a> <a href="" title="">✨</a>
 <br />


---
