
import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, Copy, Check, RotateCcw, 
  Settings, User, FileText, Layout, 
  Terminal, BarChart, ListCheck, MessageSquare,
  ShieldCheck, BrainCircuit, Target, HelpCircle,
  Briefcase, Cpu, GraduationCap, BookOpen, FileCode,
  FileBarChart, ScrollText, Layers, ChevronLeft, ChevronRight
} from 'lucide-react';
import { ProjectData, GeneratedPrompt, FormalityLevel, OutputFormatType, ReasoningFramework, AudienceLevel } from './types';
import { generatePrompt } from './services/promptEngine';
import { PRESET_TEMPLATES, Template } from './templates';

const App: React.FC = () => {
  const initialData: ProjectData = {
    projectName: '',
    projectDescription: '',
    documentType: '',
    specialization: '',
    educationalLevel: '',
    university: '',
    citationStyle: 'APA (7th Edition)',
    language: 'Default',
    complexity: 50,
    behaviors: [],
    mandatoryRules: [],
    constraints: [],
    formality: 'Balanced',
    tone: 'Professional',
    outputFormats: ['heading', 'paragraph'],
    includedTopics: '',
    tableCaption: '',
    programmingLanguage: '',
    diagramType: 'Use Case',
    wordCount: '',
    customGuidelines: '',
    audienceLevel: 'Professional',
    reasoningFramework: 'Standard',
    outputVerification: false,
    successCriteria: '',
    knowledgeHandling: 'Standard'
  };

  const [formData, setFormData] = useState<ProjectData>(initialData);
  const [prompt, setPrompt] = useState<GeneratedPrompt>({
    systemInstructions: '',
    userPrompt: ''
  });

  const [copyStatus, setCopyStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const result = generatePrompt(formData);
    setPrompt(result);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    const val = type === 'checkbox' ? (e.target as any).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const applyTemplate = (template: Template) => {
    setFormData({
      ...initialData,
      ...template.data
    });
    // التمرير للأسفل قليلاً لبدء التحرير
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const toggleOutputFormat = (format: OutputFormatType) => {
    setFormData(prev => ({
      ...prev,
      outputFormats: prev.outputFormats.includes(format)
        ? prev.outputFormats.filter(f => f !== format)
        : [...prev.outputFormats, format]
    }));
  };

  const addListItem = (field: 'behaviors' | 'mandatoryRules' | 'constraints', item: string) => {
    if (!item.trim()) return;
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], item.trim()]
    }));
  };

  const removeListItem = (field: 'behaviors' | 'mandatoryRules' | 'constraints', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [id]: true });
      setTimeout(() => setCopyStatus({ ...copyStatus, [id]: false }), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'BrainCircuit': return <BrainCircuit size={20} />;
      case 'Briefcase': return <Briefcase size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'GraduationCap': return <GraduationCap size={20} />;
      case 'BookOpen': return <BookOpen size={20} />;
      case 'FileCode': return <FileCode size={20} />;
      case 'FileBarChart': return <FileBarChart size={20} />;
      case 'ScrollText': return <ScrollText size={20} />;
      case 'Layers': return <Layers size={20} />;
      default: return <FileText size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-right w-full md:w-auto">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">مهندس البرومبت المتقدم <span className="text-blue-600">v2.1</span></h1>
          <p className="text-slate-500 mt-1 text-lg">نظام بناء الأوامر الذكي المعتمد على خوارزميات التفكير المنطقي</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={resetForm}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            <RotateCcw size={18} />
            تصفير النموذج
          </button>
        </div>
      </header>

      {/* Template Browser Section */}
      <section className="w-full max-w-7xl mb-12">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Layout className="text-blue-600" size={20} />
            تصفح القوالب الجاهزة
          </h2>
          <span className="text-xs text-slate-400 font-medium">اختر قالباً للبدء بسرعة</span>
        </div>
        <div className="relative group">
          <div className="flex overflow-x-auto gap-4 pb-4 px-2 no-scrollbar scroll-smooth">
            {PRESET_TEMPLATES.map((template) => (
              <button
                key={template.id}
                onClick={() => applyTemplate(template)}
                className="flex-shrink-0 w-64 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-right flex flex-col gap-3 group/card"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors">
                  {getIcon(template.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{template.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{template.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-7 space-y-6">
          
          {/* Section 1: Project Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-4 border-r-4 border-blue-600 pr-3">
              <FileText className="text-blue-600" size={22} />
              جوهر المشروع
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-600">اسم المشروع</label>
                <input type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="مثال: تحليل البيانات الكمية" className="input-field" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-600">نوع المستند</label>
                <input type="text" name="documentType" value={formData.documentType} onChange={handleInputChange} placeholder="تقرير، خوارزمية، مقال..." className="input-field" />
              </div>
            </div>

            <textarea name="projectDescription" value={formData.projectDescription} onChange={handleInputChange} rows={2} placeholder="صف الغرض الأساسي من الطلب..." className="input-field resize-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} placeholder="التخصص الدقيق" className="input-field" />
              <input type="text" name="educationalLevel" value={formData.educationalLevel} onChange={handleInputChange} placeholder="المستوى الدراسي" className="input-field" />
              <input type="text" name="university" value={formData.university} onChange={handleInputChange} placeholder="الجامعة / المؤسسة" className="input-field" />
            </div>
          </div>

          {/* New Section: Logic & Precision */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-4 border-r-4 border-indigo-600 pr-3">
              <BrainCircuit className="text-indigo-600" size={22} />
              بروتوكولات التفكير والدقة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600">إطار التفكير (Reasoning)</label>
                <select name="reasoningFramework" value={formData.reasoningFramework} onChange={handleInputChange} className="input-field">
                  <option value="Standard">Standard (مباشر)</option>
                  <option value="Chain of Thought">Chain of Thought (سلسلة أفكار)</option>
                  <option value="Step-by-Step">Step-by-Step (خطوة بخطوة)</option>
                  <option value="First Principles">First Principles (المبادئ الأولى)</option>
                  <option value="Socratic">Socratic (المنهج السقراطي)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600">مستوى الجمهور المستهدف</label>
                <select name="audienceLevel" value={formData.audienceLevel} onChange={handleInputChange} className="input-field">
                  <option value="Beginner">مبتدئ (تبسيط شديد)</option>
                  <option value="Student">طالب (توضيح المفاهيم)</option>
                  <option value="Professional">مهني (تركيز على العمل)</option>
                  <option value="Expert/Researcher">خبير / باحث (تعمق تقني)</option>
                  <option value="Executive">تنفيذي (ملخصات واضحة)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600">معالجة الحقائق</label>
                <select name="knowledgeHandling" value={formData.knowledgeHandling} onChange={handleInputChange} className="input-field">
                  <option value="Standard">معياري</option>
                  <option value="Strict (No Hallucination)">صارم (منع الهلوسة)</option>
                  <option value="Creative Synthesis">تأليف إبداعي</option>
                </select>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <input type="checkbox" name="outputVerification" checked={formData.outputVerification} onChange={handleInputChange} className="w-5 h-5 accent-indigo-600 cursor-pointer" id="chk-verify" />
                <label htmlFor="chk-verify" className="text-sm font-medium text-slate-700 cursor-pointer flex flex-col">
                  تفعيل المراجعة الذاتية (Self-Verification)
                  <span className="text-xs text-slate-500 font-normal">سيقوم الذكاء الاصطناعي بمراجعة إجابته قبل عرضها</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Target size={16} className="text-red-500" />
                معايير نجاح المخرج (ما الذي يجعل الإجابة مثالية؟)
              </label>
              <input type="text" name="successCriteria" value={formData.successCriteria} onChange={handleInputChange} placeholder="مثال: أن تكون الخطة قابلة للتنفيذ في غضون 30 يوماً..." className="input-field" />
            </div>
          </div>

          {/* Section 2: Personas & Rules */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 border-r-4 border-emerald-600 pr-3">
              <Settings className="text-emerald-600" size={22} />
              السلوكيات والقيود الصارمة
            </h2>

            <MultiInputSection title="السلوكيات (Behaviors)" items={formData.behaviors} onAdd={(val) => addListItem('behaviors', val)} onRemove={(idx) => removeListItem('behaviors', idx)} icon={<User size={18} className="text-emerald-500" />} placeholder="دقيق، تحليلي، نقدي..." />
            <MultiInputSection title="قواعد لا يمكن كسرها" items={formData.mandatoryRules} onAdd={(val) => addListItem('mandatoryRules', val)} onRemove={(idx) => removeListItem('mandatoryRules', idx)} icon={<ShieldCheck size={18} className="text-orange-500" />} placeholder="إلزامي: استخدم المصادر الرسمية فقط..." />
            <MultiInputSection title="محظورات (Constraints)" items={formData.constraints} onAdd={(val) => addListItem('constraints', val)} onRemove={(idx) => removeListItem('constraints', idx)} icon={<Trash2 size={18} className="text-red-500" />} placeholder="تجنب: استخدام المصطلحات المعقدة..." />
          </div>

          {/* Section 4: Output Format */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 border-r-4 border-amber-600 pr-3">
              <Layout className="text-amber-600" size={22} />
              هيكلية المخرجات والنمط
            </h2>

            <div className="flex flex-wrap gap-2">
              {(['heading', 'paragraph', 'list', 'table', 'code', 'diagram', 'math', 'citation'] as OutputFormatType[]).map(format => (
                <button key={format} onClick={() => toggleOutputFormat(format)} className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all flex items-center gap-2 ${formData.outputFormats.includes(format) ? 'bg-amber-600 border-amber-600 text-white shadow-md' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                  {format === 'heading' && 'عناوين'}
                  {format === 'paragraph' && 'فقرات'}
                  {format === 'list' && 'قوائم'}
                  {format === 'table' && 'جداول'}
                  {format === 'code' && 'أكواد'}
                  {format === 'diagram' && 'رسومات'}
                  {format === 'math' && 'معادلات'}
                  {format === 'citation' && 'اقتباسات'}
                  {formData.outputFormats.includes(format) && <Check size={14} />}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-600">نمط الاقتباس</label>
                <select name="citationStyle" value={formData.citationStyle} onChange={handleInputChange} className="input-field">
                  <option>APA (7th Edition)</option>
                  <option>MLA (9th Edition)</option>
                  <option>Chicago Style</option>
                  <option>Harvard</option>
                  <option>IEEE</option>
                  <option>Vancouver</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-600">نبرة الصوت</label>
                <input type="text" name="tone" value={formData.tone} onChange={handleInputChange} placeholder="Professional, Creative..." className="input-field" />
              </div>
            </div>

            <textarea name="includedTopics" value={formData.includedTopics} onChange={handleInputChange} rows={3} placeholder="المواضيع المحددة (سطر لكل موضوع)..." className="input-field resize-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input type="text" name="wordCount" value={formData.wordCount} onChange={handleInputChange} placeholder="الطول المستهدف (مثال: 1000 كلمة)" className="input-field" />
               <div className="flex p-1 bg-slate-100 rounded-lg gap-1">
                  {(['Informal', 'Balanced', 'Very Formal'] as FormalityLevel[]).map(level => (
                    <button key={level} onClick={() => setFormData(prev => ({ ...prev, formality: level }))} className={`flex-1 py-1.5 px-3 rounded-md text-xs font-bold transition-all ${formData.formality === level ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                      {level === 'Informal' ? 'غير رسمي' : level === 'Balanced' ? 'متوازن' : 'رسمي جداً'}
                    </button>
                  ))}
                </div>
            </div>
          </div>
        </section>

        {/* Output Preview */}
        <aside className="lg:col-span-5 lg:sticky lg:top-8 space-y-6 h-fit">
          <div className="bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[750px] border border-slate-700">
            <div className="p-5 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="mr-3 text-sm font-bold tracking-widest text-slate-400">ENGINE_OUTPUT_PREVIEW</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-dark">
              <PromptBox title="SYSTEM_INSTRUCTIONS" content={prompt.systemInstructions} color="text-blue-400" bgColor="bg-blue-500/10" onCopy={() => copyToClipboard(prompt.systemInstructions, 'sys')} isCopied={copyStatus['sys']} />
              <PromptBox title="USER_PROMPT" content={prompt.userPrompt} color="text-emerald-400" bgColor="bg-emerald-500/10" onCopy={() => copyToClipboard(prompt.userPrompt, 'user')} isCopied={copyStatus['user']} />
            </div>

            <div className="p-5 bg-slate-800/80 border-t border-slate-700 flex gap-3">
               <button onClick={() => copyToClipboard(`${prompt.systemInstructions}\n\n--- USER PROMPT ---\n\n${prompt.userPrompt}`, 'all')} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                {copyStatus['all'] ? <Check size={20} /> : <Copy size={20} />}
                {copyStatus['all'] ? 'تم النسخ بنجاح' : 'نسخ التعليمات والبرومبت'}
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
             <div className="flex gap-4">
                <div className="p-2 bg-blue-50 rounded-lg h-fit">
                   <HelpCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">كيفية الاستخدام</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    1. قم بنسخ <b>SYSTEM_INSTRUCTIONS</b> ووضعها في حقل "System Prompt" أو "Custom Instructions".<br/>
                    2. قم بنسخ <b>USER_PROMPT</b> وأرسله كرسالة عادية.<br/>
                    3. تم تصميم هذه القوالب لتتوافق مع نماذج GPT-4 و Gemini و Claude 3.5.
                  </p>
                </div>
             </div>
          </div>
        </aside>
      </main>
      
      <style>{`
        .input-field {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background-color: #fff;
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        .input-field:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .scrollbar-dark::-webkit-scrollbar { width: 6px; }
        .scrollbar-dark::-webkit-scrollbar-track { background: #0f172a; }
        .scrollbar-dark::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

// Helper Components
const PromptBox = ({ title, content, color, bgColor, onCopy, isCopied }: any) => (
  <div className="space-y-3 group">
    <div className="flex justify-between items-center">
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${color}`}>{title}</span>
      <button onClick={onCopy} className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-slate-700 rounded-md transition-all text-slate-400">
        {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </button>
    </div>
    <div className={`${bgColor} p-5 rounded-2xl border border-white/5 text-sm leading-relaxed whitespace-pre-wrap font-mono text-slate-200 min-h-[100px]`}>
      {content || 'بانتظار المدخلات...'}
    </div>
  </div>
);

const MultiInputSection = ({ title, items, onAdd, onRemove, icon, placeholder }: any) => {
  const [val, setVal] = useState('');
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <label className="text-sm font-semibold text-slate-700">{title}</label>
      </div>
      <div className="flex gap-2">
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (onAdd(val), setVal(''))} placeholder={placeholder} className="input-field" />
        <button onClick={() => { onAdd(val); setVal(''); }} className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-lg"><Plus size={18} /></button>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item: string, i: number) => (
          <div key={i} className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-xl text-xs text-blue-800 animate-in zoom-in duration-200 group">
            <span>{item}</span>
            <button onClick={() => onRemove(i)} className="text-blue-300 hover:text-red-500 transition-colors"><Trash2 size={12} /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
