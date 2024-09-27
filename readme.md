# Desafio Técnico - Vaga SDET

## Implementado com JavaScript e Playwright

### Testes cobertos

- Login com credenciais válidas - OK
- Login com credenciais inválidas - OK
- Adicionar item ao carrinho - OK
- Remover item do carrinho - OK
- Ordenar produtos por ordem alfabética - OK
- Ordenar produtos por preço - OK
- Realizar logout - OK
- Acessar página de detalhes do produto - OK
- Adicionar produto ao carrinho diretamente da página do produto - OK
- Remover produto do carrinho diretamente da página do produto - OK
- Preencher dados de checkout - OK
- Finalizar compra com sucesso - OK

Running 42 tests using 8 workers
42 passed (20.3s)

## Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM (gerenciador de pacotes do Node)

## Instalação

1. **Clone o repositório**:

2. **Acesse o diretório do projeto**:

3. **Instale as dependências**:

   npm install

4. **Instale os browsers necessários para o Playwright**:

   npx playwright install

## Executando os Testes

### Executar todos os testes

Para rodar todos os testes simultaneamente:

npx playwright test

### Executar teste específico

npx playwright test tests/login.spec.js

### Visualizar resultado dos testes

npx playwright show-report
