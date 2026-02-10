
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getEVRecommendation = async (userPrompt: string, history: ChatMessage[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: `You are an expert EV consultant for "EZ EV Auto". Your goal is to help users find their perfect electric vehicle. 
          Use the following context if helpful, but be conversational:
          Available cars in our current inventory: 
          - Lucid Air Sapphire ($249k, 427mi range, 1.89s 0-60)
          - Tesla Model S Plaid ($90k, 396mi range, 1.99s 0-60)
          - Rivian R1S ($75k, 352mi range, SUV)
          - Porsche Taycan Turbo GT ($230k, Performance)
          - BMW i7 ($124k, Ultra Luxury Sedan)
          - Tesla Cybertruck ($80k, Stainless Steel Truck)

          Keep responses professional, informative, and concise. Focus on range, charging, and performance benefits of switching to EV.` }],
        },
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.content }]
        })),
        {
          role: 'user',
          parts: [{ text: userPrompt }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request right now. How can I help you find an EV?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please try asking again shortly.";
  }
};
