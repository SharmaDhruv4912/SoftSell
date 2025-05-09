import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const OPENAI_MODEL = "gpt-4o";

let openai: OpenAI | null = null;

export const initializeOpenAI = (apiKey: string) => {
  openai = new OpenAI({ apiKey });
  return openai;
};

export const isOpenAIInitialized = () => {
  return openai !== null;
};

export const getChatCompletions = async (
  messages: { role: "user" | "assistant" | "system"; content: string }[]
): Promise<string> => {
  if (!openai) {
    throw new Error("OpenAI client not initialized. Please provide an API key.");
  }

  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages,
    });

    return response.choices[0].message.content || "";
  } catch (error) {
    console.error("Error getting chat completions:", error);
    return "I'm sorry, I encountered an error processing your request. Please try again later.";
  }
};

// Sample prompt for sales assistant context
export const getSystemPrompt = () => {
  return `You are a helpful AI assistant for SoftSell, a software license resale platform.
Your primary job is to help customers understand how to sell their unused software licenses through SoftSell.

Important facts about SoftSell:
- SoftSell helps businesses sell unused software licenses for up to 70% of the original purchase price
- The selling process has 3 steps: Upload License → Get Valuation → Get Paid
- We handle all the legal and compliance aspects of license transfers
- We support most major software vendors including Microsoft, Adobe, Oracle, Salesforce, etc.
- Payments are processed within 48 hours of accepting an offer
- Our platform is secure and all data is encrypted

Please provide helpful, concise responses focused on helping users understand the license selling process.
If asked about topics unrelated to software license resale, politely redirect the conversation to how SoftSell can help with their software licenses.

Always maintain a professional, supportive tone.`;
};