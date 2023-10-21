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
- [x] Detalhar perfil do usuário logado
- [x] Editar perfil do usuário logado
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


#### Rota 1 - Cadastrar usuario: 

     No imsomnia crie uma http request POST, copie e cole a URL , utilize o objeto no formato json respeitando as propriedades como no exemplo a baixo.

          ✅ Em caso de sucesso, as informações serão armazenadas no banco de dados e será retornado um objeto com a senha criptografada. 

          ❌ Não é permitido cadastrar usuário com e-mail em uso por outro usuário.
     

          🔗url deploy: https://busy-jade-salamander-toga.cyclic.app/usuario

         🔗url insomnia: http://localhost:3000/usuario

<img style="border-radius: 40%;" src="https://github.com/paulasantoro/desafio-unidade-05-pvd/blob/master/imagens%20/rotas%20imagens/cadastrar%20usuario%20.png" width="1000px;" alt=""/>


#### Rota 2 - Login usuario: 

     No imsomnia crie uma http request POST, copie e cole a URL , utilize o objeto no formato json respeitando as propriedades como na imagem a baixo.

            ✅ Em caso de sucesso, será retornado um token de autenticação obrigatório para ser usado nas próximas rotas. 

            ❌ Em caso de e-mail ou senha incorreta o token não poderá ser gerado.

           🔗url deploy:https://busy-jade-salamander-toga.cyclic.app/login

           🔗url insomnia: http://localhost:3000/login

<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-05-pvd/blob/master/imagens%20/rotas%20imagens/login%20usuario.png" width="1000px;" alt=""/>

#### Rota 3 - Detalhar usuario: 

     No imsomnia crie uma http request GET, copie e cole o token no Bearer token , conforme na imagem a baixo.

          ✅ Em caso de sucesso, será retornado um objeto com informações do usuário. 

          ❌ não é possível usar token inválido.

         🔗url deploy:https://busy-jade-salamander-toga.cyclic.app/usuario

         🔗url insomnia: http://localhost:3000/usuario

<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-05-pvd/blob/master/imagens%20/rotas%20imagens/detalhar%20usuario.png" width="1000px;" alt=""/>

#### Rota 4 - Editar usuario: 

     No imsomnia crie uma http request PUT, copie e cole o token no Bearer token , conforme na imagem a baixo. Envie um objeto no formato json com as prpriedades a serem alteradas conforme imagem.

        ✅ Em caso de sucesso, não haverá resposta, somente status bem sucedido. 

        ❌ não é possível usar token inválido ou atualizar com e-mail já existente no banco de dados.

       🔗url deploy:https://busy-jade-salamander-toga.cyclic.app/usuario

       🔗url insomnia: http://localhost:3000/usuario

<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-05-pvd/blob/master/imagens%20/rotas%20imagens/editar%20usuario.png" width="1000px;" alt=""/>


#### 🔎 listar categorias: 

     No imsomnia crie uma http request GET, copie e cole o token no Bearer token , conforme na imagem a baixo. 

        ✅ Em caso de sucesso, as categorias serão retornadas. 

        ❌ não é possível usar token inválido.

        🔗url deploy:https://busy-jade-salamander-toga.cyclic.app/categoria

        🔗url insomnia: http://localhost:3000/categoria

<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-05-pvd/blob/master/imagens%20/rotas%20imagens/listar%20categorias.png" width="1000px;" alt=""/>


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
