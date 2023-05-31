# To-do-list-API-MongoDB

#### Este projeto consiste em uma API desenvolvida utilizando o framework Express.js em conjunto com o banco de dados MongoDB Atlas. Foi utilizado TypeScript para adicionar tipagem estática ao código, fornecendo maior segurança e facilidade na manutenção. A autenticação é feita usando Jsonwebtoken para gerar tokens de acesso, enquanto o Mongoose é usado para modelagem de dados e interação com o banco de dados. A validação dos dados é feita com a biblioteca Yup e o Bcryptjs é usado para a criptografia de senhas. Além disso, o Cors foi implementado para permitir requisições de diferentes origens.

A URL base da aplicação: https://localhost:3001

---

# Pré-requisitos
Certifique-se de ter o Node.Js instalado em sua máquina.

# Instalação
Siga as etapas abaixo para configurar e executar a aplicação localmente:

Clone o repositório para o seu ambiente de trabalho:

```shell
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Navegue até o diretório do projeto:
```bash
cd To-do-list-API-MongoDB
```

Instale as dependências do projeto:
```shell
npm install
```
ou

```shell
yarn install
```
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

```shel
PORT= 3000  (Porta em que a API será executada)
DATABASE_URL= mongodb://localhost/nome-do-banco-de-dados  (URL de conexão com o MongoDB)
SECRET_KEY= segredo-do-jwt  (Chave secreta para geração de tokens JWT)
```

Certifique-se de substituir nome-do-banco-de-dados pelo nome do seu banco de dados MongoDB local e segredo-do-jwt por uma chave secreta de sua escolha para a geração de tokens JWT.

Inicie a aplicação:
```shell
npm run dev
```
ou

```shell
yarn dev
```
A API estará sendo executada em http://localhost:3001 (ou na porta especificada no arquivo .env).

## Rotas
A API possui as seguintes rotas disponíveis:

## Users
GET /users - Retorna todos os usuários cadastrados.

GET /users/:id - Retorna um usuário específico com base no ID fornecido.

POST /users - Cria um novo usuário com os dados fornecidos.

PATCH /users - Atualiza os dados ddo usuário logado. (Necessário enviar token de autenticação).

DELETE /users - Exclui o usuário logado. (Necessário enviar token de autenticação).

POST /user/login - Rota para autenticação do usuário.

---

## Tasks (Necessário enviar token de autenticação em todas as rotas).
GET /tasks - Retorna todas as tarefas do usuário logado. 

GET /tasks/:id - Retorna uma das tarefas do usuário logado específicada pelo ID fornecido. 

POST /tasks - Cria uma nova tarefa com os dados fornecidos. 

PATCH /tasks/:id - Atualiza os dados de uma tarefa específica com base no ID fornecido.

DELETE /tasks/:id - Exclui uma tarefa específica com base no ID fornecido. 


