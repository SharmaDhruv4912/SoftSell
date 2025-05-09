import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources";
import { Request, Response } from "express";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const OPENAI_MODEL = "gpt-4o";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt to set the context for the assistant
const SYSTEM_PROMPT = `You are a helpful AI assistant for SoftSell, a software license resale platform.
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

export const chatHandler = async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request. Messages array is required." });
    }

    // Format messages for OpenAI, adding system prompt
    const systemMessage = {
      role: "system" as const,
      content: SYSTEM_PROMPT
    };
    
    const formattedMessages: ChatCompletionMessageParam[] = [
      systemMessage,
      ...messages.map((msg: any) => {
        if (msg.isUser) {
          return { role: "user" as const, content: msg.text };
        } else {
          return { role: "assistant" as const, content: msg.text };
        }
      }),
    ];

    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0].message.content;
    
    return res.json({ reply });
  } catch (error) {
    console.error("Error in OpenAI chat request:", error);
    return res.status(500).json({ 
      error: "Failed to process your request", 
      details: error instanceof Error ? error.message : String(error) 
    });
  }
};