
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
    id: 'research-paper',
    title: 'ورقة بحثية (Research Paper)',
    description: 'قالب أكاديمي متكامل لنشر الأبحاث العلمية مع تركيز عالٍ على المنهجية والمصادر والمناقشة.',
    icon: 'Award',
    data: {
      projectName: 'بحث علمي متقدم',
      documentType: 'Academic Research Paper',
      complexity: 90,
      seniorityLevel: 'Senior',
      analysisDepth: 'Deep-Dive',
      communicationStyle: 'Technical',
      logicalFallacyCheck: true,
      outputFormats: ['heading', 'paragraph', 'citation', 'table', 'math'],
      knowledgeHandling: 'Strict (No Hallucination)',
      reasoningFramework: 'First Principles'
    }
  },
  {
    id: 'analytical-essay',
    title: 'مقال تحليلي (Analytical Essay)',
    description: 'تفكيك موضوع معقد إلى أجزاء أصغر لفهمه بعمق واستكشاف الروابط الخفية.',
    icon: 'Layers',
    data: {
      projectName: 'تحليل ظاهرة اقتصادية/اجتماعية',
      documentType: 'Analytical Essay',
      complexity: 70,
      seniorityLevel: 'Mid-Level',
      analysisDepth: 'Comprehensive',
      communicationStyle: 'Narrative',
      reasoningFramework: 'Chain of Thought',
      outputFormats: ['heading', 'paragraph', 'list']
    }
  },
  {
    id: 'argumentative-essay',
    title: 'مقال جدلي (Argumentative)',
    description: 'بناء حجة مقنعة مدعومة بالأدلة مع تحليل ونقد وجهات النظر المعارضة.',
    icon: 'Scale',
    data: {
      projectName: 'قضية جدلية معاصرة',
      documentType: 'Argumentative Essay',
      complexity: 75,
      seniorityLevel: 'Mid-Level',
      communicationStyle: 'Persuasive',
      logicalFallacyCheck: true,
      reasoningFramework: 'Standard',
      outputFormats: ['heading', 'paragraph', 'citation'],
      tone: 'Logical and Evidence-based'
    }
  },
  {
    id: 'literature-review',
    title: 'مراجعة أدبيات (Lit Review)',
    description: 'تجميع ونقد الأبحاث السابقة حول موضوع معين لتحديد الفجوات البحثية.',
    icon: 'BookOpen',
    data: {
      projectName: 'مسح الأدبيات العلمية',
      documentType: 'Literature Review',
      complexity: 85,
      seniorityLevel: 'Senior',
      analysisDepth: 'Deep-Dive',
      citationStyle: 'APA (7th Edition)',
      outputFormats: ['heading', 'paragraph', 'citation'],
      knowledgeHandling: 'Strict (No Hallucination)'
    }
  },
  {
    id: 'case-study',
    title: 'دراسة حالة (Case Study)',
    description: 'تحليل عميق لمثال واقعي محدد لاستخلاص استنتاجات وتوصيات عملية.',
    icon: 'Briefcase',
    data: {
      projectName: 'تحليل حالة مؤسسية',
      documentType: 'Case Study',
      complexity: 65,
      seniorityLevel: 'Mid-Level',
      analysisDepth: 'Comprehensive',
      communicationStyle: 'Technical',
      outputFormats: ['heading', 'paragraph', 'table', 'list'],
      successCriteria: 'تقديم توصيات قابلة للتنفيذ بناءً على البيانات المتاحة'
    }
  },
  {
    id: 'lab-report',
    title: 'تقرير مختبر (Lab Report)',
    description: 'توثيق دقيق لتجربة علمية: الهدف، الأدوات، الخطوات، النتائج، والاستنتاج.',
    icon: 'Cpu',
    data: {
      projectName: 'نتائج تجربة مخبرية',
      documentType: 'Lab Report',
      complexity: 60,
      seniorityLevel: 'Junior',
      analysisDepth: 'Atomic/Extremely Detailed',
      communicationStyle: 'Technical',
      outputFormats: ['heading', 'table', 'math', 'paragraph'],
      mandatoryRules: ['اتبع الهيكل العلمي الصارم للتقارير المخبرية']
    }
  },
  {
    id: 'research-proposal',
    title: 'مقترح بحثي (Proposal)',
    description: 'خطة عمل بحثية تهدف لإقناع القارئ بأهمية وجدوى الدراسة المستقبلية.',
    icon: 'Target',
    data: {
      projectName: 'مقترح مشروع بحثي',
      documentType: 'Research Proposal',
      complexity: 80,
      seniorityLevel: 'Senior',
      communicationStyle: 'Persuasive',
      analysisDepth: 'Comprehensive',
      outputFormats: ['heading', 'paragraph', 'list', 'citation'],
      successCriteria: 'وضوح الفجوة البحثية والمنهجية المقترحة'
    }
  },
  {
    id: 'thesis-statement',
    title: 'أطروحة مركزية (Thesis Statement)',
    description: 'تطوير وصقل الجملة المركزية التي تلخص الحجة الأساسية للبحث أو المقال.',
    icon: 'Zap',
    data: {
      projectName: 'صياغة الأطروحة',
      documentType: 'Thesis Statement Development',
      complexity: 95,
      seniorityLevel: 'Principal/Expert',
      analysisDepth: 'Atomic/Extremely Detailed',
      reasoningFramework: 'Socratic',
      communicationStyle: 'Direct',
      outputFormats: ['paragraph']
    }
  },
  {
    id: 'dissertation-chapter',
    title: 'فصل أطروحة (Dissertation Chapter)',
    description: 'كتابة أجزاء من رسائل الماجستير أو الدكتوراه بأسلوب أكاديمي رفيع وعميق.',
    icon: 'GraduationCap',
    data: {
      projectName: 'كتابة فصل من الرسالة',
      documentType: 'Dissertation Chapter',
      educationalLevel: 'PhD',
      complexity: 100,
      seniorityLevel: 'Principal/Expert',
      analysisDepth: 'Deep-Dive',
      communicationStyle: 'Technical',
      outputFormats: ['heading', 'paragraph', 'citation', 'math'],
      knowledgeHandling: 'Strict (No Hallucination)'
    }
  },
  {
    id: 'term-paper',
    title: 'بحث فصلي (Term Paper)',
    description: 'بحث أكاديمي شامل يقدم في نهاية الفصل الدراسي حول موضوع معين.',
    icon: 'ScrollText',
    data: {
      projectName: 'بحث المادة النهائي',
      documentType: 'Term Paper',
      complexity: 55,
      seniorityLevel: 'Mid-Level',
      communicationStyle: 'Narrative',
      outputFormats: ['heading', 'paragraph', 'list', 'citation']
    }
  },
  {
    id: 'critical-analysis',
    title: 'تحليل نقدي (Critical Analysis)',
    description: 'تقييم منهجي لعمل علمي أو فني لتحديد جودته ومنطقه ومدى تأثيره.',
    icon: 'Search',
    data: {
      projectName: 'نقد أكاديمي/نظري',
      documentType: 'Critical Analysis',
      complexity: 85,
      seniorityLevel: 'Senior',
      analysisDepth: 'Deep-Dive',
      logicalFallacyCheck: true,
      reasoningFramework: 'First Principles',
      outputFormats: ['heading', 'paragraph']
    }
  },
  {
    id: 'book-review',
    title: 'مراجعة كتاب (Book Review)',
    description: 'تلخيص وتقييم نقدي لمحتوى كتاب وأهميته في مجاله العلمي.',
    icon: 'Book',
    data: {
      projectName: 'مراجعة كتاب علمي/أدبي',
      documentType: 'Book Review',
      complexity: 40,
      seniorityLevel: 'Mid-Level',
      communicationStyle: 'Narrative',
      outputFormats: ['heading', 'paragraph', 'list']
    }
  },
  {
    id: 'article-summary',
    title: 'ملخص مقال (Article Summary)',
    description: 'تكثيف المعلومات الرئيسية والنتائج من مقال طويل في نقاط مركزة.',
    icon: 'FileText',
    data: {
      projectName: 'تلخيص مقال متخصص',
      documentType: 'Article Summary',
      complexity: 30,
      seniorityLevel: 'Mid-Level',
      analysisDepth: 'Surface',
      communicationStyle: 'Direct',
      outputFormats: ['list', 'paragraph']
    }
  },
  {
    id: 'annotated-bibliography',
    title: 'ببليوغرافيا مشروحة (Annotated Bib)',
    description: 'قائمة بالمصادر متبوعة بوصف موجز وتقييم لكل مصدر ومدى صلته بالبحث.',
    icon: 'ListCheck',
    data: {
      projectName: 'قائمة المصادر المشروحة',
      documentType: 'Annotated Bibliography',
      complexity: 70,
      seniorityLevel: 'Senior',
      communicationStyle: 'Technical',
      outputFormats: ['citation', 'paragraph'],
      citationStyle: 'APA (7th Edition)'
    }
  },
  {
    id: 'position-paper',
    title: 'ورقة موقف (Position Paper)',
    description: 'توضيح موقف جهة ما تجاه قضية معينة مع تقديم مبررات وحجج تدعم هذا الموقف.',
    icon: 'Shield',
    data: {
      projectName: 'ورقة موقف سياسي/استراتيجي',
      documentType: 'Position Paper',
      complexity: 80,
      seniorityLevel: 'Strategic Lead',
      communicationStyle: 'Persuasive',
      logicalFallacyCheck: true,
      outputFormats: ['heading', 'paragraph', 'list']
    }
  },
  {
    id: 'reflection-paper',
    title: 'ورقة تأملية (Reflection Paper)',
    description: 'تحليل شخصي للتجارب والأفكار المكتسبة خلال دورة دراسية أو تجربة عملية.',
    icon: 'User',
    data: {
      projectName: 'تقرير تأمل ذاتي',
      documentType: 'Reflection Paper',
      complexity: 35,
      seniorityLevel: 'Junior',
      communicationStyle: 'Narrative',
      formality: 'Balanced',
      outputFormats: ['paragraph']
    }
  },
  {
    id: 'technical-report',
    title: 'تقرير فني (Technical Report)',
    description: 'شرح فني مفصل لعملية هندسية أو برمجية أو تصميمية بأسلوب دقيق ومباشر.',
    icon: 'FileBarChart',
    data: {
      projectName: 'تقرير هندسي/فني',
      documentType: 'Technical Report',
      complexity: 85,
      seniorityLevel: 'Senior',
      analysisDepth: 'Comprehensive',
      communicationStyle: 'Technical',
      outputFormats: ['heading', 'paragraph', 'table', 'diagram', 'math'],
      diagramType: 'Architecture Diagram'
    }
  }
];
