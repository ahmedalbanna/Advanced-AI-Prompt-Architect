
import { ProjectData, GeneratedPrompt } from '../types';

export const generatePrompt = (data: ProjectData): GeneratedPrompt => {
  let systemParts: string[] = [];
  
  // 1. بروتوكول الهوية المتقدم (Advanced Identity Protocol)
  const behaviorsStr = data.behaviors.length > 0 
    ? ` \n- ${data.behaviors.join('\n- ')}` 
    : 'Professional Subject Matter Expert';

  systemParts.push(`[IDENTITY_PROTOCOL]
You are a ${data.seniorityLevel} in the field of ${data.specialization || 'Professional Consulting'}.
Operational Role: You are not just a chatbot; you are a high-level advisor with the following behaviors:${behaviorsStr}
Quality Mandate: Your work must reflect the depth expected from someone with 10+ years of experience in ${data.specialization || 'the field'}.`);

  // 2. بروتوكول التفكير والتحليل (Analytical Protocol)
  const analysisDepthMap = {
    'Surface': 'Provide quick, high-level summaries without deep technical jargon.',
    'Comprehensive': 'Deliver balanced insights covering both breadth and depth.',
    'Deep-Dive': 'Explore nuances, edge cases, and historical/theoretical foundations of every concept mentioned.',
    'Atomic/Extremely Detailed': 'Deconstruct every component to its smallest parts. No detail is too small to be analyzed.'
  };

  const reasoningMap = {
    'Standard': 'Provide direct analytical responses.',
    'Chain of Thought': 'Articulate your internal reasoning process step-by-step before arriving at the conclusion.',
    'Step-by-Step': 'Guide the user through the logic incrementally.',
    'First Principles': 'Strip away assumptions and rebuild the logic from fundamental truths.',
    'Socratic': 'Lead the user to the answer through insightful questioning.'
  };

  systemParts.push(`[COGNITIVE_FRAMEWORK]
Analysis Depth: ${data.analysisDepth} (${analysisDepthMap[data.analysisDepth]})
Reasoning Mode: ${data.reasoningFramework} (${reasoningMap[data.reasoningFramework]})
${data.logicalFallacyCheck ? 'Strict Mandate: Audit your response for logical fallacies (e.g., circular reasoning, straw man, false dilemma) before finalizing output.' : ''}`);

  // 3. أسلوب التواصل (Communication Protocol)
  const styleMap = {
    'Direct': 'Concise, action-oriented, and devoid of fluff.',
    'Narrative': 'Story-driven, engaging, and flows like a professional discourse.',
    'Technical': 'Heavy on precision, industry terminology, and data-driven insights.',
    'Persuasive': 'Focused on logic-driven persuasion, addressing counter-arguments, and building a solid case.'
  };

  systemParts.push(`[COMMUNICATION_STANDARDS]
- Primary Style: ${styleMap[data.communicationStyle]}
- Formality: ${data.formality}
- Tone: ${data.tone}
- Language: ${data.language}
- Audience Compatibility: Tailor all concepts for an "${data.audienceLevel}" level.`);

  // 4. معالجة المعرفة والتحقق (Knowledge Management)
  if (data.outputVerification) {
    systemParts.push(`[QUALITY_ASSURANCE]
Perform a post-generation self-audit:
1. Did the output violate any "PROHIBITED" constraints?
2. Does the output meet the defined "SUCCESS METRICS"?
3. Is the complexity level at precisely ${data.complexity}%?`);
  }

  // 5. القواعد الصارمة
  if (data.mandatoryRules.length > 0 || data.constraints.length > 0) {
    let constraintsSection = '[OPERATIONAL_BOUNDARIES]\n';
    if (data.mandatoryRules.length > 0) {
      constraintsSection += `MUST ADHERE TO:\n${data.mandatoryRules.map(r => `! ${r}`).join('\n')}\n`;
    }
    if (data.constraints.length > 0) {
      constraintsSection += `STRICTLY AVOID:\n${data.constraints.map(c => `X ${c}`).join('\n')}`;
    }
    systemParts.push(constraintsSection);
  }

  // --- بناء برومبت المستخدم ---
  let userParts: string[] = [];
  userParts.push(`## TASK OVERVIEW: ${data.projectName || 'New Document Generation'}`);
  userParts.push(`Generate a ${data.documentType || 'comprehensive output'} for: ${data.projectDescription || 'user requirements'}.`);
  
  if (data.projectUrl) userParts.push(`Reference URL for context: ${data.projectUrl}`);

  if (data.includedTopics) {
    userParts.push(`\n## MANDATORY TOPICS:`);
    userParts.push(data.includedTopics.split('\n').map(t => `- ${t}`).join('\n'));
  }

  userParts.push(`\n## OUTPUT SPECIFICATIONS:`);
  data.outputFormats.forEach(format => {
    switch(format) {
      case 'heading': userParts.push(`- Use semantic Markdown headers.`); break;
      case 'paragraph': userParts.push(`- Professional ${data.communicationStyle} paragraphs.`); break;
      case 'list': userParts.push(`- Structured lists for key insights.`); break;
      case 'table': userParts.push(`- Data tables${data.tableCaption ? ` titled "${data.tableCaption}"` : ''}.`); break;
      case 'code': userParts.push(`- ${data.programmingLanguage} code following clean architecture principles.`); break;
      case 'diagram': userParts.push(`- A Mermaid.js ${data.diagramType} visual diagram.`); break;
      case 'math': userParts.push(`- Precise LaTeX formulas.`); break;
      case 'citation': userParts.push(`- Full ${data.citationStyle} citations.`); break;
    }
  });

  if (data.successCriteria) userParts.push(`\n## GOAL: The response is successful IF: ${data.successCriteria}`);
  if (data.wordCount) userParts.push(`\n## SCOPE: Target around ${data.wordCount}.`);

  return {
    systemInstructions: systemParts.join('\n\n'),
    userPrompt: userParts.join('\n')
  };
};
