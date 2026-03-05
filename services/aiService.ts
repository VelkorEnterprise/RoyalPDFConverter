
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeDocument = async (text: string, task: string) => {
  const ai = getAI();
  const prompt = `
    You are an elite AI Document Strategist.
    Analyze the following text extracted from a PDF.
    Task: ${task}
    
    TEXT TO ANALYZE:
    ${text.substring(0, 15000)} // Buffer limit
    
    Return the response in professionally formatted Markdown.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });

  return response.text;
};
