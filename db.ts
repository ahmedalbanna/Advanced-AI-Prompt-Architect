
/**
 * ProjectAvailabilityRecord
 * واجهة تمثل سجلًا واحدًا يصف توفر جميع بيانات المشروع.
 */
export interface ProjectAvailabilityRecord {
  // المعلومات الأساسية
  projectName: boolean;
  projectDescription: boolean;
  projectUrl: boolean;
  
  // الخصائص الأكاديمية والنوع
  documentType: boolean;
  specialization: boolean;
  educationalLevel: boolean;
  university: boolean;
  citationStyle: boolean;
  language: boolean;
  
  // الخصائص التقنية والسلوكية
  complexity: boolean; // يمثل: هل تم تحديد مستوى التعقيد؟
  behaviors: boolean;
  mandatoryRules: boolean;
  constraints: boolean;
  programmingLanguage: boolean;
  diagramType: boolean;
  
  // الأسلوب والتنسيق
  formality: boolean;
  tone: boolean;
  outputFormats: boolean;
  includedTopics: boolean;
  tableCaption: boolean;
  wordCount: boolean;
  customGuidelines: boolean;

  // الجمهور والمستوى
  audienceLevel: boolean;
  seniorityLevel: boolean;
  
  // الإطار المعرفي والتحليل
  reasoningFramework: boolean;
  knowledgeHandling: boolean;
  analysisDepth: boolean;
  
  // التحقق والضوابط
  outputVerification: boolean;
  successCriteria: boolean;
  logicalFallacyCheck: boolean;
  communicationStyle: boolean;
  toolLibraryGuidance: boolean;

  // عمود التلخيص النصي المطلوب
  summary: string;
}

/**
 * ProjectAvailabilityData
 * أمثلة لسيناريوهات مختلفة لتوفر بيانات المشروع (ممثلة بالقيم true و false).
 */
export const ProjectAvailabilityData: ProjectAvailabilityRecord[] = [
  // ----------------------------------------------------------------------
  // السيناريو 1: الحد الأدنى للمعلومات (Skeletal Input)
  {
    projectName: true,
    projectDescription: true,
    projectUrl: false,
    documentType: false,
    specialization: false,
    educationalLevel: false,
    university: false,
    citationStyle: false,
    language: true,
    complexity: false,
    behaviors: false,
    mandatoryRules: false,
    constraints: false,
    formality: false,
    tone: false,
    outputFormats: false,
    includedTopics: false,
    tableCaption: false,
    programmingLanguage: false,
    diagramType: false,
    wordCount: false,
    customGuidelines: false,
    audienceLevel: false,
    reasoningFramework: false,
    outputVerification: false,
    successCriteria: false,
    knowledgeHandling: false,
    seniorityLevel: false,
    analysisDepth: false,
    communicationStyle: false,
    logicalFallacyCheck: false,
    toolLibraryGuidance: false,
    summary: "المعلومات المتوفرة هي اسم المشروع ووصفه ولغة الإخراج فقط. لا توجد قيود شكلية أو متطلبات أكاديمية أو تقنية محددة.",
  },
  // ----------------------------------------------------------------------
  // السيناريو 2: التركيز الأكاديمي والشكلي (Academic and Formal Focus)
  {
    projectName: true,
    projectDescription: true,
    projectUrl: false,
    documentType: true,
    specialization: true,
    educationalLevel: true,
    university: true,
    citationStyle: true,
    language: true,
    complexity: false,
    behaviors: false,
    mandatoryRules: false,
    constraints: false,
    formality: true,
    tone: true,
    outputFormats: true,
    includedTopics: true,
    tableCaption: false,
    programmingLanguage: false,
    diagramType: false,
    wordCount: true,
    customGuidelines: true,
    audienceLevel: true,
    reasoningFramework: false,
    outputVerification: false,
    successCriteria: false,
    knowledgeHandling: true,
    seniorityLevel: false,
    analysisDepth: false,
    communicationStyle: false,
    logicalFallacyCheck: false,
    toolLibraryGuidance: false,
    summary: "تم تحديد جميع المتطلبات الأكاديمية (الجامعة، المستوى، أسلوب الاقتباس، النوع) مع تحديد القواعد الشكلية والأسلوب (النبرة، الصياغة). لا توجد متطلبات تقنية أو برمجية.",
  },
  // ----------------------------------------------------------------------
  // السيناريو 3: التركيز التقني والقيود (Technical and Constraint Focus)
  {
    projectName: true,
    projectDescription: false,
    projectUrl: true,
    documentType: false,
    specialization: false,
    educationalLevel: false,
    university: false,
    citationStyle: false,
    language: true,
    complexity: true,
    behaviors: true,
    mandatoryRules: true,
    constraints: true,
    formality: false,
    tone: false,
    outputFormats: true,
    includedTopics: true,
    tableCaption: true,
    programmingLanguage: true,
    diagramType: true,
    wordCount: false,
    customGuidelines: false,
    audienceLevel: true,
    reasoningFramework: false,
    outputVerification: false,
    successCriteria: false,
    knowledgeHandling: false,
    seniorityLevel: true,
    analysisDepth: true,
    communicationStyle: false,
    logicalFallacyCheck: false,
    toolLibraryGuidance: true,
    summary: "توفر بيانات تقنية مفصلة تشمل لغة البرمجة، نوع المخططات، السلوكيات، والقواعد الإلزامية والقيود. تم تحديد مستوى التعقيد وعمق التحليل ومستوى الأقدمية للجمهور.",
  },
  // ----------------------------------------------------------------------
  // السيناريو 4: التركيز على الجودة والتحقق (Quality and Verification Focus)
  {
    projectName: true,
    projectDescription: true,
    projectUrl: false,
    documentType: false,
    specialization: false,
    educationalLevel: false,
    university: false,
    citationStyle: false,
    language: true,
    complexity: false,
    behaviors: false,
    mandatoryRules: false,
    constraints: false,
    formality: false,
    tone: false,
    outputFormats: false,
    includedTopics: false,
    tableCaption: false,
    programmingLanguage: false,
    diagramType: false,
    wordCount: false,
    customGuidelines: false,
    audienceLevel: false,
    reasoningFramework: true,
    outputVerification: true,
    successCriteria: true,
    knowledgeHandling: true,
    seniorityLevel: false,
    analysisDepth: true,
    communicationStyle: true,
    logicalFallacyCheck: true,
    toolLibraryGuidance: false,
    summary: "التركيز الأساسي على ضمان الجودة والمنطق؛ تم تحديد إطار العمل المنطقي، ومعايير النجاح، وآلية التحقق من المخرجات، وضوابط المغالحات المنطقية، ونمط التواصل.",
  },
  // ----------------------------------------------------------------------
  // السيناريو 5: البيانات متوفرة بالكامل (Full Specification Available)
  {
    projectName: true,
    projectDescription: true,
    projectUrl: true,
    documentType: true,
    specialization: true,
    educationalLevel: true,
    university: true,
    citationStyle: true,
    language: true,
    complexity: true,
    behaviors: true,
    mandatoryRules: true,
    constraints: true,
    formality: true,
    tone: true,
    outputFormats: true,
    includedTopics: true,
    tableCaption: true,
    programmingLanguage: true,
    diagramType: true,
    wordCount: true,
    customGuidelines: true,
    audienceLevel: true,
    reasoningFramework: true,
    outputVerification: true,
    successCriteria: true,
    knowledgeHandling: true,
    seniorityLevel: true,
    analysisDepth: true,
    communicationStyle: true,
    logicalFallacyCheck: true,
    toolLibraryGuidance: true,
    summary: "جميع حقول بيانات المشروع محددة ومتوفرة بالكامل، مما يوفر أقصى قدر من السياق والقيود لإنشاء المشروع.",
  },
];
