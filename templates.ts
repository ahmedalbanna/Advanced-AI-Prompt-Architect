
import { ProjectData } from './types';

export interface Template {
  id: string;
  title: string;
  description: string;
  icon: string;
  data: Partial<ProjectData>;
}

export const PRESET_TEMPLATES: Template[] = [
  {
    id: 'ai-ml-research',
    title: 'ورقة بحثية AI/ML',
    description: 'هيكل لنشر أبحاث تعلم الآلة، باتباع معايير IMRaD و ArXiv.',
    icon: 'BrainCircuit',
    data: {
      projectName: 'تحليل الخوارزميات العصبية',
      documentType: 'Research Paper',
      specialization: 'Artificial Intelligence / Machine Learning',
      educationalLevel: 'PhD / Master',
      citationStyle: 'IEEE',
      complexity: 90,
      behaviors: ['باحث أكاديمي دقيق', 'محلل بيانات'],
      mandatoryRules: ['استخدم أحدث المصادر من ArXiv', 'اشرح المنهجية الرياضية بالتفصيل'],
      outputFormats: ['heading', 'paragraph', 'math', 'citation'],
      reasoningFramework: 'First Principles',
      knowledgeHandling: 'Strict (No Hallucination)'
    }
  },
  {
    id: 'business-proposal',
    title: 'مقترح عمل (Business Proposal)',
    description: 'قالب إقناعي مصمم لعرض منتج أو خدمة جديدة على العملاء أو أصحاب المصلحة.',
    icon: 'Briefcase',
    data: {
      projectName: 'مشروع توسعة السوق الرقمي',
      documentType: 'Business Proposal',
      specialization: 'Business Development',
      educationalLevel: 'Professional',
      complexity: 60,
      formality: 'Very Formal',
      tone: 'Persuasive & Professional',
      outputFormats: ['heading', 'paragraph', 'table', 'list'],
      successCriteria: 'إقناع المستثمر بجدوى المشروع المالية والتقنية',
      audienceLevel: 'Executive'
    }
  },
  {
    id: 'comp-eng-grad',
    title: 'مشروع تخرج هندسة حاسب',
    description: 'قالب قوي لمشاريع السنة النهائية، يغطي التحليل والتنفيذ والاختبار.',
    icon: 'Cpu',
    data: {
      projectName: 'نظام التحكم الذكي المدمج',
      documentType: 'Graduation Project Report',
      specialization: 'Computer Engineering',
      educationalLevel: 'Bachelor',
      citationStyle: 'APA (7th Edition)',
      complexity: 80,
      behaviors: ['مهندس أنظمة', 'محلل فني'],
      outputFormats: ['heading', 'paragraph', 'code', 'diagram', 'table'],
      diagramType: 'Circuit Diagram / Flowchart',
      programmingLanguage: 'C++ / Python'
    }
  },
  {
    id: 'grad-project-standard',
    title: 'مشروع تخرج عام',
    description: 'قالب قياسي لمشاريع التخرج الجامعية النهائية.',
    icon: 'GraduationCap',
    data: {
      projectName: 'دراسة أثر التحول الرقمي',
      documentType: 'Graduation Project',
      specialization: 'General Science / Humanities',
      educationalLevel: 'Bachelor',
      complexity: 70,
      outputFormats: ['heading', 'paragraph', 'list', 'citation'],
      reasoningFramework: 'Step-by-Step'
    }
  },
  {
    id: 'research-paper-imrad',
    title: 'ورقة بحثية (IMRaD)',
    description: 'قالب يتبع هيكل IMRaD القياسي للأوراق البحثية الأكاديمية.',
    icon: 'BookOpen',
    data: {
      projectName: 'أثر التكنولوجيا على التعليم',
      documentType: 'Academic Research Paper',
      specialization: 'Social Sciences',
      educationalLevel: 'Master',
      citationStyle: 'Chicago Style',
      complexity: 75,
      outputFormats: ['heading', 'paragraph', 'citation'],
      mandatoryRules: ['يجب اتباع هيكل: Introduction, Methods, Results, and Discussion']
    }
  },
  {
    id: 'sdd-ieee',
    title: 'وثيقة تصميم النظام (IEEE 1016)',
    description: 'وصف تصميم برمجيات شامل (SDD) يعتمد على معايير IEEE، محسن للمشاريع الهندسية المعقدة.',
    icon: 'FileCode',
    data: {
      projectName: 'نظام إدارة قواعد البيانات السحابية',
      documentType: 'System Design Document (SDD)',
      specialization: 'Software Engineering',
      educationalLevel: 'Professional / Expert',
      complexity: 85,
      reasoningFramework: 'Step-by-Step',
      outputFormats: ['heading', 'diagram', 'table', 'code'],
      diagramType: 'UML Class Diagram',
      mandatoryRules: ['التزم بمعيار IEEE 1016 للصياغة']
    }
  },
  {
    id: 'simple-business-report',
    title: 'تقرير عمل بسيط',
    description: 'هيكل تقرير موجز يركز على التحليل والاستنتاجات والتوصيات الرئيسية.',
    icon: 'FileBarChart',
    data: {
      projectName: 'تقرير الأداء الربع سنوي',
      documentType: 'Business Report',
      specialization: 'Management',
      complexity: 40,
      formality: 'Balanced',
      outputFormats: ['heading', 'list', 'table'],
      audienceLevel: 'Professional'
    }
  },
  {
    id: 'software-doc',
    title: 'توثيق برمجيات',
    description: 'قالب شامل لإنشاء أدلة المستخدم أو التوثيق الفني لمنتج برمجيات.',
    icon: 'ScrollText',
    data: {
      projectName: 'دليل مطور واجهة برمجة التطبيقات',
      documentType: 'Software Documentation',
      specialization: 'Technical Writing',
      complexity: 55,
      outputFormats: ['heading', 'code', 'paragraph', 'list'],
      programmingLanguage: 'Markdown / JSON',
      behaviors: ['كاتب تقني محترف']
    }
  },
  {
    id: 'software-project-report',
    title: 'تقرير مشروع برمجيات',
    description: 'يولد تقريراً فنياً شاملاً لمشاريع تطوير البرمجيات، بما في ذلك أقسام التحليل والتصميم والبرمجة والاختبار.',
    icon: 'Layers',
    data: {
      projectName: 'تطبيق إدارة المهام الذكي',
      documentType: 'Software Project Report',
      specialization: 'Software Development',
      complexity: 75,
      outputFormats: ['heading', 'code', 'diagram', 'table', 'paragraph'],
      diagramType: 'Entity Relationship Diagram (ERD)',
      programmingLanguage: 'TypeScript / Node.js'
    }
  },
  {
    id: 'tech-report-full',
    title: 'تقرير فني شامل',
    description: 'قالب تقرير فني متكامل يتضمن جميع الأقسام القياسية من الملخص إلى الملاحق.',
    icon: 'FileText',
    data: {
      projectName: 'دراسة جدوى هندسية',
      documentType: 'Comprehensive Technical Report',
      specialization: 'Engineering',
      complexity: 80,
      outputFormats: ['heading', 'paragraph', 'table', 'list', 'math', 'citation'],
      audienceLevel: 'Expert/Researcher'
    }
  }
];
