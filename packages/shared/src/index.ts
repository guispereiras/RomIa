export type ProficiencyExam = 'TOEFL' | 'IELTS' | 'JLPT' | 'DELE' | 'DALF' | 'GOETHE';

export interface StudentGoal {
  language: string;
  exam?: ProficiencyExam;
  targetLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  deadline?: string;
}

export interface AiFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  rewrittenSuggestion?: string;
}

export const DEFAULT_SYSTEM_PROMPT = `Você é um tutor de idiomas paciente, amigável e objetivo.
Seu papel é corrigir com clareza, propor exercícios, simular conversas reais e orientar para provas de proficiência.
Sempre responda no idioma-alvo com breve suporte no idioma nativo quando necessário.`;
