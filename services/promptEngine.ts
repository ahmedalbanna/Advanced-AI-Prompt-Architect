
import { ProjectData, GeneratedPrompt } from '../types';

export const generatePrompt = (data: ProjectData): GeneratedPrompt => {
  // --- بناء تعليمات النظام (SYSTEM INSTRUCTIONS) ---
  let systemParts: string[] = [];
  
  // 1. تعريف الهوية المعقدة (Persona & Identity)
  const behaviorsStr = data.behaviors.length > 0 
    ? ` \n- ${data.behaviors.join('\n- ')}` 
    : 'Professional Academic Consultant';

  systemParts.push(`[IDENTITY_PROTOCOL]
You are a top-tier ${data.specialization || 'domain expert'} with the following operational behaviors:${behaviorsStr}
You prioritize accuracy, depth, and adherence to established methodologies.`);

  // 2. بروتوكول التفكير (Reasoning Framework)
  const reasoningMap = {
    'Standard': 'Provide direct and concise analytical responses.',
    'Chain of Thought': 'Before providing the final answer, break down the problem into logical steps and articulate your internal reasoning process.',
    'Step-by-Step': 'Guide the user through the solution incrementally, ensuring each step is verified before proceeding.',
    'First Principles': 'Deconstruct the topic to its fundamental truths and reconstruct the answer from the ground up, avoiding common assumptions.',
    'Socratic': 'Do not provide direct answers immediately; lead the user through guided questioning and critical analysis.'
  };

  systemParts.push(`[COGNITIVE_FRAMEWORK]
Framework: ${data.reasoningFramework}
Instruction: ${reasoningMap[data.reasoningFramework]}`);

  // 3. معايير الجمهور واللغة (Audience & Linguistics)
  const formalityDesc = {
    'Informal': 'natural, approachable, and conversational',
    'Balanced': 'semi-formal, clear, and professional',
    'Very Formal': 'strictly academic, sophisticated, and rigorous'
  };

  systemParts.push(`[COMMUNICATION_STANDARDS]
- Target Audience: ${data.audienceLevel} (Tailor depth and vocabulary accordingly).
- Language: ${data.language === 'Default' ? 'Arabic/English contextual' : data.language}.
- Formality: ${formalityDesc[data.formality]}.
- Tone: ${data.tone}.
- Educational Context: ${data.educationalLevel} level at ${data.university || 'Global Academic Institutions'}.`);

  // 4. دقة البيانات ومعالجة المعرفة (Knowledge Handling)
  const knowledgeMap = {
    'Standard': 'Use the most up-to-date data available within your training.',
    'Strict (No Hallucination)': 'Crucial: If a fact is not verifiable or outside your scope, state so clearly. Do not invent citations or data.',
    'Creative Synthesis': 'Synthesize existing knowledge to generate novel insights while maintaining logical consistency.'
  };

  systemParts.push(`[KNOWLEDGE_PROTOCOL]
Mode: ${data.knowledgeHandling}
Guideline: ${knowledgeMap[data.knowledgeHandling]}`);

  // 5. إرشادات الأدوات والمنهجية (Tool & Methodology Guidance)
  if (data.specialization || data.programmingLanguage) {
    systemParts.push(`[TOOL_USAGE_PROTOCOL]
When providing technical solutions:
- Use industry-standard libraries and frameworks applicable to ${data.specialization || 'the current context'}.
- Ensure code follows best practices for ${data.programmingLanguage || 'the selected language'}.
- Reference official documentation where applicable.`);
  }

  if (data.outputVerification) {
    systemParts.push(`[VERIFICATION_STEP]
After generating the output, perform a self-audit to ensure all "Mandatory Rules" were followed and "Constraints" were avoided.`);
  }

  // 6. القواعد الصارمة (Hard Constraints)
  if (data.mandatoryRules.length > 0 || data.constraints.length > 0) {
    let constraintsSection = '[OPERATIONAL_CONSTRAINTS]\n';
    if (data.mandatoryRules.length > 0) {
      constraintsSection += `MANDATORY:\n${data.mandatoryRules.map(r => `! ${r}`).join('\n')}\n`;
    }
    if (data.constraints.length > 0) {
      constraintsSection += `PROHIBITED:\n${data.constraints.map(c => `X ${c}`).join('\n')}`;
    }
    systemParts.push(constraintsSection);
  }

  // --- بناء برومبت المستخدم (USER PROMPT) ---
  let userParts: string[] = [];

  // 1. المهمة والهدف (Objective)
  userParts.push(`## OBJECTIVE: ${data.projectName || 'Task Fulfillment'}`);
  userParts.push(`Primary Goal: Generate a ${data.documentType || 'response'} focused on: ${data.projectDescription || 'user needs'}.`);
  if (data.projectUrl) {
    userParts.push(`Reference URL: ${data.projectUrl}`);
  }

  // 2. نطاق المحتوى (Scope)
  if (data.includedTopics) {
    userParts.push(`\n## TOPICS TO ADDRESS:`);
    userParts.push(data.includedTopics.split('\n').map(t => `- ${t}`).join('\n'));
  }

  // 3. متطلبات المخرجات (Output Structure)
  if (data.outputFormats.length > 0) {
    userParts.push(`\n## OUTPUT SPECIFICATIONS:`);
    data.outputFormats.forEach(format => {
      switch(format) {
        case 'toc': 
          userParts.push(`- [Navigation]: Provide a comprehensive Table of Contents at the beginning.`); 
          if (data.tocStructure) {
            userParts.push(`  - Preferred Structure: ${data.tocStructure}`);
          }
          break;
        case 'heading': userParts.push(`- [Structure]: Use hierarchical headings.`); break;
        case 'paragraph': userParts.push(`- [Text]: Detailed and analytical paragraphs.`); break;
        case 'list': userParts.push(`- [Organization]: Use bullet points for key takeaways.`); break;
        case 'table': userParts.push(`- [Tabular]: Include data tables${data.tableCaption ? ` titled "${data.tableCaption}"` : ''}.`); break;
        case 'code': userParts.push(`- [Technical]: Provide ${data.programmingLanguage || 'documented'} code snippets.`); break;
        case 'diagram': userParts.push(`- [Visual Architecture]: You MUST include a ${data.diagramType || 'logic'} diagram. Use Mermaid.js syntax only.`); break;
        case 'math': userParts.push(`- [Formulaic]: Apply LaTeX notation for mathematical logic.`); break;
        case 'citation': userParts.push(`- [Referencing]: Adhere strictly to ${data.citationStyle} format for all citations.`); break;
      }
    });
  }

  // 4. معايير النجاح (Success Criteria)
  if (data.successCriteria) {
    userParts.push(`\n## SUCCESS METRICS:`);
    userParts.push(`The response will be considered successful if: ${data.successCriteria}`);
  }

  if (data.wordCount) {
    userParts.push(`\n## VOLUME:`);
    userParts.push(`Approximate length: ${data.wordCount}.`);
  }

  if (data.customGuidelines) {
    userParts.push(`\n## ADDITIONAL CONTEXT:`);
    userParts.push(data.customGuidelines);
  }

  return {
    systemInstructions: systemParts.join('\n\n'),
    userPrompt: userParts.join('\n')
  };
};
