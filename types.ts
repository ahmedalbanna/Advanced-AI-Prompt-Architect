
export type FormalityLevel = 'Informal' | 'Balanced' | 'Very Formal';

export type OutputFormatType = 
  | 'heading' 
  | 'paragraph' 
  | 'list' 
  | 'table' 
  | 'code' 
  | 'diagram' 
  | 'math'
  | 'citation';

export type ReasoningFramework = 'Standard' | 'Chain of Thought' | 'Step-by-Step' | 'First Principles' | 'Socratic';

export type AudienceLevel = 'Beginner' | 'Student' | 'Professional' | 'Expert/Researcher' | 'Executive';

export interface ProjectData {
  projectName: string;
  projectDescription: string;
  projectUrl: string; // الحقل الجديد
  documentType: string;
  specialization: string;
  educationalLevel: string;
  university: string;
  citationStyle: string;
  language: string;
  complexity: number;
  behaviors: string[];
  mandatoryRules: string[];
  constraints: string[];
  formality: FormalityLevel;
  tone: string;
  outputFormats: OutputFormatType[];
  includedTopics: string;
  tableCaption: string;
  programmingLanguage: string;
  diagramType: string;
  wordCount: string;
  customGuidelines: string;
  // مدخلات الدقة الجديدة
  audienceLevel: AudienceLevel;
  reasoningFramework: ReasoningFramework;
  outputVerification: boolean; // هل يراجع الذكاء الاصطناعي مخرجاته؟
  successCriteria: string; // ما الذي يجعل الإجابة ناجحة؟
  knowledgeHandling: 'Standard' | 'Strict (No Hallucination)' | 'Creative Synthesis';
}

export interface GeneratedPrompt {
  systemInstructions: string;
  userPrompt: string;
}
