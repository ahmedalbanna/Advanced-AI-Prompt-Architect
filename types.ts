
export type FormalityLevel = 'Informal' | 'Balanced' | 'Very Formal';

export type OutputFormatType = 
  | 'heading' 
  | 'paragraph' 
  | 'list' 
  | 'table' 
  | 'code' 
  | 'diagram' 
  | 'math'
  | 'citation'
  | 'toc';

export type ReasoningFramework = 'Standard' | 'Chain of Thought' | 'Step-by-Step' | 'First Principles' | 'Socratic';

export type AudienceLevel = 'Beginner' | 'Student' | 'Professional' | 'Expert/Researcher' | 'Executive';

export interface ProjectData {
  projectName: string;
  projectDescription: string;
  projectUrl: string;
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
  audienceLevel: AudienceLevel;
  reasoningFramework: ReasoningFramework;
  outputVerification: boolean;
  successCriteria: string;
  knowledgeHandling: 'Standard' | 'Strict (No Hallucination)' | 'Creative Synthesis';
  tocStructure: string; // New field for Table of Contents structure
}

export interface GeneratedPrompt {
  systemInstructions: string;
  userPrompt: string;
}
