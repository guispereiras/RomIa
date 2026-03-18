import type { FastifyInstance } from 'fastify';

const domainSummary = {
  identity: ['auth com email/senha e OAuth (futuro)'],
  learning: ['idiomas', 'cursos', 'lições', 'trilhas por nível CEFR'],
  tasks: ['tarefas escritas', 'tarefas de áudio', 'correção com IA + rubrica'],
  memory: ['flashcards com repetição espaçada'],
  speaking: ['conversas tutor-aluno com feedback de pronúncia'],
  proficiency: ['metas TOEFL/IELTS/DELE/JLPT com plano de estudo']
};

export async function registerRoutes(app: FastifyInstance) {
  app.get('/health', async () => ({ status: 'ok', service: 'romia-api' }));

  app.get('/v1/meta/domain', async () => domainSummary);

  app.post('/v1/ai/correct-text', async () => {
    return {
      message:
        'Endpoint inicial criado. Próximo passo: integrar provedor de IA, rubrica por idioma e armazenamento de feedback.'
    };
  });

  app.post('/v1/ai/generate-flashcards', async () => {
    return {
      message:
        'Endpoint inicial criado. Próximo passo: gerar flashcards por contexto de aula e erros recorrentes do aluno.'
    };
  });
}
