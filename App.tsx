
import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, Copy, Check, RotateCcw, 
  Settings, User, FileText, Layout, 
  Terminal, BarChart, ListCheck, MessageSquare,
  ShieldCheck, BrainCircuit, Target, HelpCircle,
  Briefcase, Cpu, GraduationCap, BookOpen, FileCode,
  FileBarChart, ScrollText, Layers, Link as LinkIcon,
  ChevronDown, ChevronUp, Globe, Award, Zap, Scale
} from 'lucide-react';
import { ProjectData, GeneratedPrompt, FormalityLevel, OutputFormatType, ReasoningFramework, AudienceLevel, SeniorityLevel } from './types';
import { generatePrompt } from './services/promptEngine';
import { PRESET_TEMPLATES, Template } from './templates';

const App: React.FC = () => {
  const initialData: ProjectData = {
    projectName: '',
    projectDescription: '',
    projectUrl: '',
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
    outputVerification: true,
    successCriteria: '',
    knowledgeHandling: 'Standard',
    seniorityLevel: 'Senior',
    analysisDepth: 'Comprehensive',
    communicationStyle: 'Technical',
    // Fix: removed tocStructure which was not defined in ProjectData type in types.ts
    logicalFallacyCheck: true
  };

  const [formData, setFormData] = useState<ProjectData>(initialData);
  const [prompt, setPrompt] = useState<GeneratedPrompt>({
    systemInstructions: '',
    userPrompt: ''
  });

  const [copyStatus, setCopyStatus] = useState<Record<string, boolean>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'نصي وتخطيطي': true,
    'تقني ومرئي': true,
    'أكاديمي ومرجعي': true
  });

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
    setFormData({ ...initialData, ...template.data });
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
    setFormData(prev => ({ ...prev, [field]: [...prev[field], item.trim()] }));
  };

  const removeListItem = (field: 'behaviors' | 'mandatoryRules' | 'constraints', index: number) => {
    setFormData(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [id]: true });
      setTimeout(() => setCopyStatus({ ...copyStatus, [id]: false }), 2000);
    } catch (err) { console.error('Failed to copy!', err); }
  };

  const resetForm = () => setFormData(initialData);

  const getComplexityDesc = (val: number) => {
    if (val < 33) return "مبسط - تركيز على الوضوح المباشر والمفاهيم الأساسية.";
    if (val < 66) return "متوازن - تحليل مهني يجمع بين العمق وسهولة الاستيعاب.";
    return "متقدم - تعمق تقني عالٍ، معالجة شاملة، وتحليل نقدي مكثف.";
  };

  const formatCategories = [
    { label: 'نصي وتخطيطي', formats: ['heading', 'paragraph', 'list'] as OutputFormatType[] },
    { label: 'تقني ومرئي', formats: ['code', 'diagram', 'math', 'table'] as OutputFormatType[] },
    { label: 'أكاديمي ومرجعي', formats: ['citation'] as OutputFormatType[] }
  ];

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
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">مهندس البرومبت المتقدم <span className="text-blue-600">v3.0</span></h1>
          <p className="text-slate-500 mt-1 text-lg">نظام بناء الأوامر الذكي المعتمد على خوارزميات السياق العميق</p>
        </div>
        <div className="flex gap-3">
          <button onClick={resetForm} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95">
            <RotateCcw size={18} /> تصفير النموذج
          </button>
        </div>
      </header>

      {/* Templates Section */}
      <section className="w-full max-w-7xl mb-12">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Layout className="text-blue-600" size={20} /> تصفح القوالب الذكية
          </h2>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 px-2 no-scrollbar scroll-smooth">
          {PRESET_TEMPLATES.map((template) => (
            <button key={template.id} onClick={() => applyTemplate(template)} className="flex-shrink-0 w-64 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-right flex flex-col gap-3 group">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {getIcon(template.icon)}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">{template.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{template.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-7 space-y-6">
          
          {/* Core Project Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-4 border-r-4 border-blue-600 pr-3">
              <FileText className="text-blue-600" size={22} /> جوهر المشروع
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="اسم المشروع" className="input-field" />
              <input type="text" name="documentType" value={formData.documentType} onChange={handleInputChange} placeholder="نوع المستند المستهدف" className="input-field" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <LinkIcon size={16} className="absolute right-3 top-3.5 text-slate-400" />
                <input type="url" name="projectUrl" value={formData.projectUrl} onChange={handleInputChange} placeholder="رابط المرجع (اختياري)" className="input-field pr-10" />
              </div>
              <div className="relative">
                <Globe size={16} className="absolute right-3 top-3.5 text-slate-400" />
                <select name="language" value={formData.language} onChange={handleInputChange} className="input-field pr-10 appearance-none">
                  <option value="Default">اللغة: تلقائي</option>
                  <option value="Arabic">اللغة: العربية</option>
                  <option value="English">اللغة: الإنجليزية</option>
                </select>
              </div>
            </div>
            <textarea name="projectDescription" value={formData.projectDescription} onChange={handleInputChange} rows={2} placeholder="صف الغرض الأساسي والنتائج المتوقعة..." className="input-field resize-none" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} placeholder="التخصص الدقيق" className="input-field" />
              <input type="text" name="educationalLevel" value={formData.educationalLevel} onChange={handleInputChange} placeholder="المستوى الدراسي" className="input-field" />
              <input type="text" name="university" value={formData.university} onChange={handleInputChange} placeholder="الجامعة" className="input-field" />
            </div>
          </div>

          {/* Precision Controls (The "Intelligence" Part) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-4 border-r-4 border-indigo-600 pr-3">
              <Zap className="text-indigo-600" size={22} /> ضوابط الدقة المتقدمة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 flex items-center gap-1"><Award size={14} /> مستوى الأقدمية (Seniority)</label>
                <select name="seniorityLevel" value={formData.seniorityLevel} onChange={handleInputChange} className="input-field">
                  <option value="Junior">Junior (منفذ)</option>
                  <option value="Mid-Level">Mid-Level (مهني)</option>
                  <option value="Senior">Senior (مستشار)</option>
                  <option value="Principal/Expert">Principal (خبير تقني)</option>
                  <option value="Strategic Lead">Strategic Lead (قائد استراتيجي)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 flex items-center gap-1"><Layers size={14} /> عمق التحليل المطلوب</label>
                <select name="analysisDepth" value={formData.analysisDepth} onChange={handleInputChange} className="input-field">
                  <option value="Surface">Surface (موجز سريع)</option>
                  <option value="Comprehensive">Comprehensive (شامل)</option>
                  <option value="Deep-Dive">Deep-Dive (تعمق فني)</option>
                  <option value="Atomic/Extremely Detailed">Atomic (تفصيلي متناهي)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 flex items-center gap-1"><MessageSquare size={14} /> أسلوب التواصل</label>
                <select name="communicationStyle" value={formData.communicationStyle} onChange={handleInputChange} className="input-field">
                  <option value="Direct">Direct (مباشر)</option>
                  <option value="Narrative">Narrative (سردي)</option>
                  <option value="Technical">Technical (تقني دقيق)</option>
                  <option value="Persuasive">Persuasive (إقناعي)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 flex items-center gap-1"><BrainCircuit size={14} /> إطار التفكير</label>
                <select name="reasoningFramework" value={formData.reasoningFramework} onChange={handleInputChange} className="input-field">
                  <option value="Standard">Standard</option>
                  <option value="Chain of Thought">Chain of Thought</option>
                  <option value="First Principles">First Principles</option>
                  <option value="Socratic">Socratic</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-inner">
               <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700">درجة التعقيد الفني</label>
                  <span className="text-xs font-black text-white bg-slate-900 px-3 py-1 rounded-full shadow-sm">{formData.complexity}%</span>
               </div>
               <input type="range" name="complexity" min="0" max="100" value={formData.complexity} onChange={handleInputChange} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
               <p className="text-xs text-slate-500 font-medium italic">{getComplexityDesc(formData.complexity)}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 cursor-pointer group hover:bg-indigo-50 transition-colors">
                <input type="checkbox" name="logicalFallacyCheck" checked={formData.logicalFallacyCheck} onChange={handleInputChange} className="w-5 h-5 accent-indigo-600" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-indigo-900 flex items-center gap-1"><Scale size={14}/> فحص المغالغاطات المنطقية</span>
                  <span className="text-[10px] text-indigo-700">تنبيه الذكاء الاصطناعي لمراجعة صحة منطقه</span>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 cursor-pointer group hover:bg-emerald-50 transition-colors">
                <input type="checkbox" name="outputVerification" checked={formData.outputVerification} onChange={handleInputChange} className="w-5 h-5 accent-emerald-600" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-emerald-900 flex items-center gap-1"><ShieldCheck size={14}/> تفعيل المراجعة الذاتية</span>
                  <span className="text-[10px] text-emerald-700">إلزام النموذج بالتدقيق قبل الإخراج</span>
                </div>
              </label>
            </div>
          </div>

          {/* Grouped Output Formats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 border-r-4 border-amber-600 pr-3">
              <Layout className="text-amber-600" size={22} /> هيكلية المخرجات
            </h2>
            <div className="space-y-3">
              {formatCategories.map((cat) => (
                <div key={cat.label} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <button onClick={() => setExpandedCategories(p => ({...p, [cat.label]: !p[cat.label]}))} className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 transition-all">
                    <h3 className="text-xs font-bold text-slate-600 uppercase tracking-widest">{cat.label}</h3>
                    {expandedCategories[cat.label] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {expandedCategories[cat.label] && (
                    <div className="p-4 flex flex-wrap gap-2 animate-in fade-in duration-300">
                      {cat.formats.map(format => (
                        <button key={format} onClick={() => toggleOutputFormat(format)} className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 ${formData.outputFormats.includes(format) ? 'bg-amber-600 border-amber-600 text-white shadow-md scale-105' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                          {format === 'heading' && 'عناوين'}
                          {format === 'paragraph' && 'فقرات'}
                          {format === 'list' && 'قوائم'}
                          {format === 'table' && 'جداول'}
                          {format === 'code' && 'أكواد'}
                          {format === 'diagram' && 'رسومات'}
                          {format === 'math' && 'معادلات'}
                          {format === 'citation' && 'اقتباسات'}
                          {formData.outputFormats.includes(format) && <Check size={12} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.outputFormats.includes('diagram') && <input type="text" name="diagramType" value={formData.diagramType} onChange={handleInputChange} placeholder="نوع الرسم (UML, Flowchart...)" className="input-field border-amber-200" />}
              {formData.outputFormats.includes('code') && <input type="text" name="programmingLanguage" value={formData.programmingLanguage} onChange={handleInputChange} placeholder="لغة البرمجة (Python, TS...)" className="input-field border-blue-200" />}
            </div>
          </div>

          {/* Rules & Constraints */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 border-r-4 border-emerald-600 pr-3">
              <Settings className="text-emerald-600" size={22} /> السلوكيات والقيود
            </h2>
            <MultiInputSection title="سلوكيات الشخصية (Behaviors)" items={formData.behaviors} onAdd={(val) => addListItem('behaviors', val)} onRemove={(idx) => removeListItem('behaviors', idx)} icon={<User size={18} className="text-emerald-500" />} placeholder="دقيق، تحليلي..." />
            <MultiInputSection title="قواعد إجبارية" items={formData.mandatoryRules} onAdd={(val) => addListItem('mandatoryRules', val)} onRemove={(idx) => removeListItem('mandatoryRules', idx)} icon={<ShieldCheck size={18} className="text-orange-500" />} placeholder="يجب ذكر الأرقام..." />
            <MultiInputSection title="محظورات صارمة" items={formData.constraints} onAdd={(val) => addListItem('constraints', val)} onRemove={(idx) => removeListItem('constraints', idx)} icon={<Trash2 size={18} className="text-red-500" />} placeholder="تجنب المصطلحات العامية..." />
          </div>

        </section>

        {/* Output Preview */}
        <aside className="lg:col-span-5 lg:sticky lg:top-8 h-fit space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[750px] border border-slate-700">
            <div className="p-5 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="mr-3 text-sm font-bold tracking-widest text-slate-400">ENGINE_v3_PROMPT</h3>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-dark">
              <PromptBox title="SYSTEM_INSTRUCTIONS" content={prompt.systemInstructions} color="text-blue-400" bgColor="bg-blue-500/10" onCopy={() => copyToClipboard(prompt.systemInstructions, 'sys')} isCopied={copyStatus['sys']} />
              <PromptBox title="USER_PROMPT" content={prompt.userPrompt} color="text-emerald-400" bgColor="bg-emerald-500/10" onCopy={() => copyToClipboard(prompt.userPrompt, 'user')} isCopied={copyStatus['user']} />
            </div>
            <div className="p-5 bg-slate-800/80 border-t border-slate-700">
               <button onClick={() => copyToClipboard(`${prompt.systemInstructions}\n\n--- USER PROMPT ---\n\n${prompt.userPrompt}`, 'all')} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                {copyStatus['all'] ? <Check size={20} /> : <Copy size={20} />}
                {copyStatus['all'] ? 'تم نسخ كل شيء' : 'نسخ كامل للتعليمات والبرومبت'}
              </button>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex gap-4">
             <div className="p-2 bg-blue-50 rounded-xl h-fit"><HelpCircle className="text-blue-600" size={24} /></div>
             <div>
               <h4 className="font-bold text-slate-800 text-sm">التوافق</h4>
               <p className="text-xs text-slate-500 mt-1 leading-relaxed">هذه الخوارزمية محسنة خصيصاً للنماذج ذات القدرات العالية مثل GPT-4o و Claude 3.5 Sonnet و Gemini 1.5 Pro.</p>
             </div>
          </div>
        </aside>
      </main>
      
      <style>{`
        .input-field { width: 100%; padding: 0.85rem 1rem; border-radius: 1rem; border: 1px solid #e2e8f0; background-color: #fff; font-size: 0.875rem; transition: all 0.2s; color: #1e293b; font-weight: 500; }
        .input-field:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.08); }
        .scrollbar-dark::-webkit-scrollbar { width: 6px; }
        .scrollbar-dark::-webkit-scrollbar-track { background: #0f172a; }
        .scrollbar-dark::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

const PromptBox = ({ title, content, color, bgColor, onCopy, isCopied }: any) => (
  <div className="space-y-3 group">
    <div className="flex justify-between items-center">
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${color}`}>{title}</span>
      <button onClick={onCopy} className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-slate-700 rounded-md transition-all text-slate-400">
        {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </button>
    </div>
    <div className={`${bgColor} p-5 rounded-2xl border border-white/5 text-[13px] leading-relaxed whitespace-pre-wrap font-mono text-slate-300 min-h-[80px] shadow-inner`}>
      {content || 'جاري بناء الخوارزمية...'}
    </div>
  </div>
);

const MultiInputSection = ({ title, items, onAdd, onRemove, icon, placeholder }: any) => {
  const [val, setVal] = useState('');
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-1">{icon}<label className="text-sm font-semibold text-slate-700">{title}</label></div>
      <div className="flex gap-2">
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (onAdd(val), setVal(''))} placeholder={placeholder} className="input-field" />
        <button onClick={() => { onAdd(val); setVal(''); }} className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-lg"><Plus size={18} /></button>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item: string, i: number) => (
          <div key={i} className="flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl text-[11px] font-bold text-slate-700 group">
            <span>{item}</span>
            <button onClick={() => onRemove(i)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 size={12} /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
