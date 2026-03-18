# RomIA — Plano SCRUM (MVP)

Este plano organiza o desenvolvimento do produto em sprints de 2 semanas para entregar valor contínuo.

## 1) Estrutura SCRUM sugerida

- **Product Owner (PO)**: define prioridade de negócio e aceita/reprova histórias.
- **Tech Lead / Scrum Master**: remove impedimentos, facilita cerimônias e garante qualidade técnica.
- **Squad**:
  - 1-2 devs mobile (React Native)
  - 1-2 devs backend (Fastify + banco + IA)
  - 1 dev fullstack (apoio web e integrações)
  - 1 designer/produto (part-time)

## 2) Cerimônias

- **Sprint Planning (2h)**: selecionar histórias priorizadas e quebrar em tasks.
- **Daily (15 min)**: progresso, bloqueios e plano do dia.
- **Refinement (1h/semana)**: detalhar histórias futuras.
- **Review (1h)**: demo do incremento para stakeholders.
- **Retrospective (45 min)**: o que manter/mudar na próxima sprint.

## 3) Definições de qualidade

## Definition of Ready (DoR)

Uma história só entra em sprint quando tiver:

1. objetivo claro de negócio;
2. critérios de aceitação testáveis;
3. dependências mapeadas;
4. estimativa em story points.

## Definition of Done (DoD)

Uma história só é considerada pronta quando:

1. código revisado;
2. testes mínimos do fluxo crítico aprovados;
3. telemetria/logs básicos do fluxo;
4. documentação atualizada;
5. feature disponível em ambiente de teste.

## 4) Macro-backlog do MVP

- Onboarding do aluno e metas de estudo.
- Autenticação e perfil.
- Plano diário e tarefas.
- Correção de texto com IA.
- Flashcards automáticos.
- Conversação com IA (chat/voz).
- Modo proficiência (simulados + métricas).

## 5) Planejamento por sprint (2 semanas cada)

## Sprint 0 — Setup técnico (foundation)

### Objetivo
Garantir ambiente estável para iniciar entrega contínua.

### Stories
- **S0-US1**: Como dev, quero rodar API e mobile localmente para iniciar desenvolvimento.
- **S0-US2**: Como time, quero padrões de branch/PR para manter qualidade.

### Tasks
- [ ] Configurar CI mínima (lint + typecheck).
- [ ] Criar templates de issue/PR e convenções de branch.
- [ ] Definir padrão de logs, erros e observabilidade inicial.
- [ ] Criar board SCRUM (To Do / In Progress / Review / Done).

### Entregáveis
- Pipeline básico executando.
- Guia de contribuição.

---

## Sprint 1 — Auth + Perfil + Onboarding

### Objetivo
Permitir cadastro/login e coleta de meta inicial do aluno.

### Stories
- **S1-US1**: Como aluno, quero criar conta e fazer login.
- **S1-US2**: Como aluno, quero informar idioma nativo, idioma-alvo e objetivo.

### Tasks Backend
- [ ] Modelar entidades `User`, `StudentProfile`, `LearningGoal`.
- [ ] Implementar JWT + refresh token.
- [ ] Endpoints `POST /auth/signup`, `POST /auth/login`, `GET /me`, `PATCH /me`.

### Tasks Mobile
- [ ] Telas de login/cadastro.
- [ ] Fluxo de onboarding guiado.
- [ ] Persistência de sessão e guard de rotas.

### Critérios de aceitação
- Usuário consegue autenticar e salvar meta inicial sem erro.

---

## Sprint 2 — Plano diário + Tarefas

### Objetivo
Entregar rotina prática de estudo com tarefas.

### Stories
- **S2-US1**: Como aluno, quero ver meu plano diário.
- **S2-US2**: Como aluno, quero enviar tarefa textual.

### Tasks Backend
- [ ] Entidades `Lesson`, `Task`, `TaskSubmission`.
- [ ] Endpoint de plano do dia e criação de submissão.
- [ ] Regra de priorização de tarefas por nível/meta.

### Tasks Mobile
- [ ] Home com lista de tarefas do dia.
- [ ] Tela de envio de texto.
- [ ] Histórico de tarefas concluídas.

### Critérios de aceitação
- Usuário visualiza e conclui tarefas diárias com persistência.

---

## Sprint 3 — IA de correção de texto (primeiro valor IA)

### Objetivo
Entregar correção com feedback útil e acionável.

### Stories
- **S3-US1**: Como aluno, quero receber correção e explicação dos meus erros.

### Tasks Backend
- [ ] Integrar provedor de IA no `POST /v1/ai/correct-text`.
- [ ] Salvar feedback estruturado (nota, erros, sugestão reescrita).
- [ ] Criar fallback/retry para falha de provedor.

### Tasks Mobile
- [ ] Exibir feedback por categoria (gramática, vocabulário, fluência).
- [ ] UX de “erro -> explicação -> exemplo corrigido”.

### Critérios de aceitação
- Submissão textual retorna feedback em até X segundos (definir SLA).

---

## Sprint 4 — Flashcards automáticos

### Objetivo
Reforçar memória e retenção com revisão espaçada.

### Stories
- **S4-US1**: Como aluno, quero revisar flashcards gerados dos meus erros.

### Tasks Backend
- [ ] Integrar `POST /v1/ai/generate-flashcards` com contexto do aluno.
- [ ] Entidades `Flashcard` e agendamento de revisão.
- [ ] Algoritmo inicial de repetição espaçada.

### Tasks Mobile
- [ ] Tela de revisão diária de flashcards.
- [ ] Marcação de facilidade/dificuldade por cartão.

### Critérios de aceitação
- App apresenta lote diário de cartões e atualiza próximo review.

---

## Sprint 5 — Conversação IA (chat + voz)

### Objetivo
Habilitar prática de speaking com feedback.

### Stories
- **S5-US1**: Como aluno, quero conversar com um tutor IA no idioma-alvo.
- **S5-US2**: Como aluno, quero feedback de pronúncia básico.

### Tasks Backend
- [ ] Sessão de chat contextual com histórico.
- [ ] Integração STT/TTS (primeira versão).
- [ ] Métricas de fluência/pronúncia (versão inicial).

### Tasks Mobile
- [ ] UI de chat conversacional.
- [ ] Captura de áudio e reprodução de resposta.
- [ ] Exibição de feedback rápido de pronúncia.

### Critérios de aceitação
- Usuário completa uma conversa curta com feedback ao final.

---

## Sprint 6 — Modo proficiência

### Objetivo
Conectar estudo diário com objetivo de certificação.

### Stories
- **S6-US1**: Como aluno, quero simulados focados no meu exame (IELTS/TOEFL/JLPT...).
- **S6-US2**: Como aluno, quero acompanhar evolução por habilidade.

### Tasks Backend
- [ ] Banco de questões por habilidade e exame.
- [ ] Relatório por competência (reading/listening/writing/speaking).
- [ ] Plano adaptativo com lacunas detectadas.

### Tasks Mobile/Web
- [ ] Tela de simulado.
- [ ] Dashboard de evolução e recomendação de estudo.

### Critérios de aceitação
- Usuário consegue realizar simulado e receber diagnóstico por habilidade.

## 6) Métricas de produto por sprint

- Taxa de onboarding concluído.
- Tarefas concluídas por usuário por semana.
- Tempo médio de resposta da IA.
- Retenção D1/D7/D30.
- Evolução média de score de escrita/conversação.

## 7) Priorização do backlog (MoSCoW)

## Must have (MVP)
- Auth + onboarding
- Plano diário
- Correção de texto com IA
- Flashcards

## Should have
- Conversação com voz
- Modo proficiência básico

## Could have
- Web dashboard avançado
- Social/community learning

## Won't have (agora)
- Marketplace de professores humanos
- Conteúdo enterprise white-label

## 8) Cadência de releases

- Release para QA ao fim de cada sprint.
- Release beta a cada 2 sprints.
- Release pública após estabilidade de 2 ciclos sem incidentes críticos.
