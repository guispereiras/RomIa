# Arquitetura proposta (MVP -> Escala)

## 1) Visão geral

- **Apps**
  - `apps/mobile`: app React Native (Expo), canal principal do aluno.
  - `apps/web`: painel web (futuro próximo) para acompanhamento e gestão.
  - `apps/api`: backend central para autenticação, conteúdo e IA.
- **Package compartilhado**
  - `packages/shared`: tipos, contratos e prompts comuns.

## 2) Domínios de negócio

1. **Identity**: cadastro/login, perfil do aluno, idioma nativo/alvo.
2. **Learning Path**: módulos, lições, objetivos por CEFR.
3. **AI Tutor**: chat contextual, correção de textos, criação de atividades.
4. **Speech**: avaliação de pronúncia e fluência.
5. **Memory**: flashcards, revisão espaçada, erros recorrentes.
6. **Proficiency**: simulados e métricas para TOEFL/IELTS/JLPT/DELE etc.

## 3) Roadmap técnico sugerido

- **Sprint 1**
  - Base monorepo, endpoint health, modelos iniciais e autenticação simples.
- **Sprint 2**
  - Fluxo de onboarding + trilha personalizada.
  - Primeira versão do corretor de texto com rubrica.
- **Sprint 3**
  - Conversação com IA + feedback em tempo real.
  - Flashcards automáticos por desempenho.
- **Sprint 4**
  - Simulados de proficiência com relatório por habilidade.

## 4) Stack recomendada

- **Mobile**: Expo + React Native + Zustand/Redux Toolkit + TanStack Query.
- **Web**: Next.js + design system compartilhado.
- **API**: Fastify + Prisma + Postgres + fila (BullMQ).
- **IA**: API LLM para chat/correção + STT/TTS para voz.
- **Observabilidade**: OpenTelemetry + Sentry.
