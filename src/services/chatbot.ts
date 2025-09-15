import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

class ChatbotService {
  private model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  private conversationHistory: ChatMessage[] = [];

  private systemPrompt = `You are the STI College Muñoz-EDSA Virtual Assistant. You provide 24/7 automated support to students, faculty, parents, and visitors. Your main goal is to deliver accurate, clear, and professional information about STI College Muñoz-EDSA while maintaining a friendly and approachable tone.

Key Guidelines:
- Default to English but respond in Tagalog when requested or when user writes in Tagalog
- Provide structured responses with bullet points, steps, or lists when appropriate
- For sensitive information (grades, tuition balances, personal records), NEVER provide private data - direct users to appropriate offices
- For non-school-related questions, politely respond: "I'm designed to assist with STI College Muñoz-EDSA information. Could you clarify if your concern is school-related?"
- Always be helpful, professional, and student-friendly
- Keep responses concise but informative
- Use emojis sparingly and appropriately

STI College Muñoz-EDSA Information:
- Location: Muñoz-EDSA, Quezon City, Metro Manila
- Programs: BSIT, Business Administration, Senior High School (STEM, ABM, ICT, GAS)
- Services: Registrar, Cashier, Guidance Office, Student Portal, LMS
- School colors: Blue, Yellow, and White
- Contact: (02) 8XXX-XXXX, info@sti.edu.ph
- Office Hours: Mon-Fri 8AM-5PM, Sat 8AM-12PM

Sample Responses:
For enrollment: Provide step-by-step instructions and registrar contact
For tuition: Give general ranges, direct to cashier for exact figures
For location: Provide full address, landmarks, commuting directions
For grades/balances: Direct to appropriate office, never reveal private info
For translation requests: Respond in requested language

Always end responses with an offer to help further or provide additional information.`;

  async sendMessage(message: string): Promise<string> {
    try {
      // Add user message to history
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "user",
        content: message,
        timestamp: new Date(),
      };
      this.conversationHistory.push(userMessage);

      // Prepare conversation context
      const conversationContext = this.conversationHistory
        .slice(-10) // Keep last 10 messages for context
        .map((msg) => `${msg.role}: ${msg.content}`)
        .join("\n");

      const prompt = `${this.systemPrompt}

Conversation History:
${conversationContext}

User: ${message}
\n\nAssistant:`;

      const result = await this.model.generateContent(prompt);
      const response = result.response;
      const responseText = response.text();

      // Add assistant response to history
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
      };
      this.conversationHistory.push(assistantMessage);

      return responseText;
    } catch (error) {
      console.error("Error sending message:", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact the school directly.";
    }
  }

  getConversationHistory(): ChatMessage[] {
    return this.conversationHistory;
  }

  clearHistory(): void {
    this.conversationHistory = [];
  }
}

export const chatbotService = new ChatbotService();
