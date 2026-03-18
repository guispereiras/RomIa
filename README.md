# RomIA

Monorepo preparado para um produto de **tutoria de idiomas com IA**, com foco em:

- Conversação estilo professor particular.
- Correção de tarefas (texto e, futuramente, áudio).
- Geração de flashcards e exercícios personalizados.
- Preparação para provas de proficiência (TOEFL, IELTS, JLPT, DELE etc.).

## Estrutura

```txt
apps/
  api/      # backend Fastify
  mobile/   # app React Native (Expo)
  web/      # base para web (Next.js)
packages/
  shared/   # tipos e prompts compartilhados
docs/
  architecture.md
```

## Como começar

### 1) Pré-requisitos

- Node 20+
- pnpm 9+
- Postgres (para próxima fase de persistência)

### 2) Instalação

```bash
pnpm install
cp .env.example .env
```

### 3) Desenvolvimento

```bash
pnpm dev:api
pnpm dev:mobile
# futuro
pnpm dev:web
```

## Primeiros endpoints

- `GET /health` -> status da API
- `GET /v1/meta/domain` -> mapa de capacidades do domínio
- `POST /v1/ai/correct-text` -> stub da correção de texto
- `POST /v1/ai/generate-flashcards` -> stub de geração de flashcards

## Objetivo de produto (resumo)

1. Diagnosticar nível inicial.
2. Definir meta (conversação, viagem, trabalho, prova).
3. Montar plano diário com tarefas adaptativas.
4. Corrigir e explicar erros com IA.
5. Treinar speaking/pronúncia com feedback contínuo.
6. Medir evolução por competência e por exame.

## Gestão do desenvolvimento (SCRUM)

- Plano de sprints, backlog e cerimônias: `docs/scrum-plan.md`
- Issues prontas para GitHub: `docs/github-issues-mvp.json`
- Script para criação automática das issues: `scripts/create_github_issues.sh`

## Próximos passos recomendados

- Adicionar persistência com Prisma/PostgreSQL.
- Implementar autenticação JWT + refresh token.
- Integrar provedor de IA para chat/correção.
- Integrar speech-to-text/text-to-speech.
- Criar trilhas por exame e nível CEFR.
