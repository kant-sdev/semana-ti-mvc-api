# MVC API – Semana TI

API REST em Node.js/Express estruturada no padrão arquitetural MVC adaptado (Routers → Controllers → Services → Prisma), com validação via Zod e ORM Prisma (PostgreSQL).

## Stack
- Node.js + TypeScript
- Express 5
- Prisma ORM (PostgreSQL)
- Zod (validação)
- CORS
- TSX (dev runner)

## Requisitos
- Node.js 18+
- PostgreSQL acessível

## Variáveis de Ambiente
Crie um arquivo `.env` na raiz com:

```bash
PORT=3001
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public"
```

- `DATABASE_URL` é obrigatória (usada pelo Prisma)
- `PORT` é opcional (padrão 3001)

## Instalação
```bash
npm install
```

## Banco de Dados (Prisma)
- Ajuste `prisma/schema.prisma` se necessário
- Gere e aplique migrações:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Execução (dev)
```bash
npm run dev
```
O servidor sobe em `http://localhost:3001/v1/api` (ou porta definida em `PORT`).

## Estrutura de Pastas (resumo)
```
src/
  server.ts                # bootstrap Express e middlewares
  routers/                 # rotas HTTP (nível de aplicação)
    main.ts                # prefixo /v1/api e montagem das sub-rotas
    clientes/cliente-route.ts
    mesas/mesa-route.ts
    reservas/reserva-router.ts
  controllers/             # orquestram requisição/resposta e chamam services
    cliente-controller.ts
    mesa-controller.ts
    reserva-controller.ts
  services/                # regras de negócio
    cliente-service.ts
    mesa-service.ts
    reserva-service.ts
  models/                  # tipos/DTOs do domínio
    cliente-model.ts
    mesa-model.ts
    reserva-model.ts
  schemas/                 # validações Zod
    cliente-schema.ts
    mesa-schema.ts
    reserva-schema.ts
  lib/prisma.ts            # cliente Prisma
prisma/
  schema.prisma            # modelos de dados
  migrations/              # migrações SQL
```

## Rotas
Base URL: `/v1/api`

- Clientes
  - `GET /clientes` – lista clientes
  - `POST /clientes` – cria cliente

- Mesas
  - `GET /mesas` – lista mesas
  - `POST /mesas` – cria mesa

- Reservas
  - `GET /reservas` – lista (placeholder atual)
  - `POST /reservas` – cria reserva

## Exemplos de Requisição
- Criar cliente
```json
  {
    "nome": "Maria Souza",
    "email": "maria@example.com",
    "telefone": "11999999999"
  }
```

- Criar mesa
```json
  {
    "numero": 10,
    "capacidade": 4,
    "descricao": "Janela"
  }
```

- Criar reserva
```json
  {
    "clienteId": 1,
    "mesaId": 1,
    "dataReserva": "2025-11-01T19:00:00.000Z",
    "numPessoas": 2,
    "observacoes": "Aniversário"
  }
```

## Scripts NPM
- `npm run dev` – desenvolvimento com TSX e `.env` (arquivo: `src/server.ts`)

## Padrão Arquitetural
Fluxo principal: `Routers` → `Controllers` → `Services` → `Prisma`. As entradas são validadas com Zod em cada controller antes da chamada de serviço.

## Erros Comuns
- `DATABASE_URL` ausente: crie `.env` conforme acima
- Migrações não aplicadas: rode `npx prisma migrate dev` e `npx prisma generate`

