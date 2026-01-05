import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, CERTIFICATIONS } from "../constants";

// Updated initialization to strictly follow Gemini API guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}. 
Your goal is to represent ${PERSONAL_INFO.name} professionally and answer questions about their background, skills, and projects based on the following information:

BACKGROUND:
${PERSONAL_INFO.summary}

CERTIFICATIONS & CREDENTIALS:
${CERTIFICATIONS.map(c => `- ${c.title} issued by ${c.issuer} (${c.date})`).join('\n')}

PROJECTS:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

SKILLS:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Instructions:
1. Be professional, friendly, and data-driven.
2. If asked about something not in the profile, politely state you don't have that information but can discuss their core competencies.
3. Keep responses concise and insightful.
4. Mention specific achievements from the background, projects, and their industry-standard certifications when relevant.
`;

export async function askAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Accessing .text property directly as per latest SDK guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return `I'm having trouble connecting to my knowledge base right now. Please try again or reach out to ${PERSONAL_INFO.name.split(' ')[0]} directly!`;
  }
}