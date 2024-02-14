# **CSI606-2023-02 - Presencial - Trabalho Final - Resultados**

## _Aluno: Guilherme Neves_

---

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

Foi desenvolvido um sistema de gerenciamento de Recursos Humanos para cadastrar e organizar informações essenciais dos colaboradores, incluindo endereço, data de nascimento, data de contratação, departamento e função. O projeto visa otimizar a administração de recursos humanos de forma eficiente e intuitiva.

### 1. Funcionalidades implementadas

- CRUD do Colaborador
- CRUD dos departamentos/setores da empresa
- CRUD das funções
- CRUD dos Estados
- CRUD das Cidades

### 2. Funcionalidades previstas e não implementadas

- Filtros de pesquisas
- Requisições de paginação ao backend
- Destaque para o aniversariante do dia (não fazia parte do escopo principal da aplicação, mas seria um bonus interessante que gostaria de trazer para a aplicação)

### 3. Outras funcionalidades implementadas

Nada a declarar

### 4. Principais desafios e dificuldades

Não tenho tanta afinade com frontend, pricipalmente com CSS. Portanto, utilizar um Framework como o NextJS junto ao Tailwind foi um desafio que me trouxe muito aprendizado.
Adicionalmente, optei pelo uso de uma stack um pouco diferente do que foi ensinado em aula, por já possuir conhecimento nas mesmas, fazendo deste trabalho uma oportunidade para aprender novas tecnologias as quais eu ainda não conhecia.

### 5. Instruções para instalação e execução

## Instruções para iniciar o backend

1. **Instalar a SDK 8 do dotnet:**

   - [Download SDK 8 do dotnet](https://dotnet.microsoft.com/en-us/download)

2. **Instalar a IDE Visual Studio ou Visual Studio Code com a extensão C# Dev Kit:**

   - [Visual Studio](https://visualstudio.microsoft.com/pt-br/)
   - [Visual Studio Code](https://code.visualstudio.com/docs/languages/csharp)

3. **Instalar ferramentas do dotnet Entity Framework:**

   - [Entity Framework Tools](https://learn.microsoft.com/pt-br/ef/core/cli/dotnet)

4. **Instalar o MySQL Community Server:**

   - [Download MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

5. **Alterar a senha de acesso ao banco no arquivo appsettings.json**

6. **Iniciar um terminal na raiz do projeto com o comando:**

   ```bash
   dotnet ef update database

   ```

7. **Iniciar a aplicação com o comando::**
   ```bash
   dotnet run
   ```

## Instruções para iniciar o frontend

1. **Instalar o node na versão mais recente::**
   - [Download Node.js](https://nodejs.org/en)
2. **Iniciar o terminal na pasta raiz e digitar o comando:**
   ```bash
   npm install
   ```
3. **Iniciar a aplicação com o comando:**
   ```bash
   npm run dev
   ```

**Observação:** Certifique-se de que a porta em que o backend está rodando é a mesma consumida nos serviços de frontend.

### 6. Referências

Nada a declarar
