# STI Chatbot — Muñoz-EDSA Virtual Assistant

A single-page AI chatbot for **STI College Muñoz-EDSA**, built with React, TypeScript and Vite, and powered by the **Google Gemini API**. It answers questions from students, faculty, parents and visitors about admissions, academics, student services and campus information.

---

## Overview

The app runs entirely in the browser. The user types a question, the app sends it to Gemini (`gemini-1.5-flash`) along with a school-specific system prompt and the recent conversation, and shows the reply in a chat window with STI-themed styling (blue, yellow and white).

There is no custom backend. The only external service is the Gemini API, called directly from the client through the `@google/generative-ai` SDK.

## Key Features

- **AI-generated answers** from Google Gemini (`gemini-1.5-flash`).
- **School-specific assistant persona** set by a system prompt in `src/services/chatbot.ts`, which covers:
  - STI College Muñoz-EDSA programs, offices, office hours and contact details
  - Refusing to share private data (grades, balances, personal records) and pointing users to the right office instead
  - Steering off-topic questions back to school matters
- **English and Tagalog support**: replies in Tagalog when the user writes in Tagalog or asks for it.
- **Conversation context**: the last 10 messages are sent with each request so follow-up questions make sense.
- **Chat UI**:
  - Welcome message when the page loads
  - Typing indicator while waiting for a reply
  - Message timestamps
  - Send with the **Enter** key or the send button
  - Minimize/maximize the chat window, with a floating chat button when minimized
  - Auto-scroll to the newest message
- **Responsive layout** for phones, tablets and desktops.
- **Error fallback**: if the API call fails, the bot shows a friendly "having trouble connecting" message.

## Technology Stack

| Category       | Technology |
|----------------|------------|
| Framework      | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool     | [Vite 6](https://vitejs.dev/) with `@vitejs/plugin-react-swc` |
| AI model       | [Google Gemini](https://ai.google.dev/) via `@google/generative-ai` |
| Styling        | [Tailwind CSS 3](https://tailwindcss.com/) + `tailwindcss-animate` |
| UI components  | [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/)) |
| Icons          | [lucide-react](https://lucide.dev/) |
| Routing        | `react-router-dom` (`BrowserRouter` wrapper) |
| Dev tooling    | `tempo-devtools` Vite plugin |

> Some dependencies in `package.json` come from the starter template and are not used by the chatbot yet (for example `@supabase/supabase-js`, `react-hook-form`, `zod`, `framer-motion`).

## Project Structure

```
STI-ChatBot/
├── public/
│   └── STI_logo.png              # Logo used in the header and favicon
├── src/
│   ├── components/
│   │   ├── SinglePageChatbot.tsx # Main full-page chat UI (rendered by App)
│   │   ├── ChatBot.tsx           # Alternative floating chat widget (not currently used)
│   │   └── ui/                   # shadcn/ui components (button, card, input, scroll-area, ...)
│   ├── services/
│   │   └── chatbot.ts            # Gemini client, system prompt, conversation history
│   ├── stories/                  # Component stories for the shadcn/ui components
│   ├── lib/
│   │   └── utils.ts              # `cn()` helper for merging Tailwind classes
│   ├── App.tsx                   # Renders <SinglePageChatbot />
│   ├── main.tsx                  # React entry point (StrictMode + BrowserRouter)
│   └── index.css                 # Tailwind base styles and theme variables
├── index.html                    # HTML shell
├── vite.config.ts                # Vite config (`@` alias → src, Tempo plugin)
├── tailwind.config.js            # Tailwind theme config
├── components.json               # shadcn/ui config
├── tempo.config.json             # Tempo typography presets
└── package.json
```

## How It Works

```
User types a message
        │
        ▼
SinglePageChatbot.tsx ── adds the message to the chat, shows "typing..."
        │
        ▼
chatbotService.sendMessage()  (src/services/chatbot.ts)
        │  builds the prompt:
        │    system prompt + last 10 messages + new message
        ▼
Google Gemini API (gemini-1.5-flash)
        │
        ▼
Reply is saved to history and shown in the chat
```

- `ChatbotService` keeps the conversation history in memory. It is lost when the page is refreshed.
- The chat UI waits an extra 1.5 seconds before showing each reply to simulate typing.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### Installation

```bash
git clone git@github.com:germanica-1/STI-ChatBot.git
cd STI-ChatBot
npm install
```

### Configuration

Create a `.env` file in the project root (it is already ignored by Git):

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Optional, for production builds served from a sub-path:

```env
VITE_BASE_PATH=/your-sub-path/
```

> **Note:** Vite bundles `VITE_` variables into the client code, so the API key can be seen by anyone who opens the deployed site. Use a restricted key, or move the Gemini call behind a backend before a public deployment.

### Running the App

```bash
npm run dev       # Start the dev server
npm run build     # Type-check and build for production (output: dist/)
npm run preview   # Preview the production build locally
```

## Future Improvements

- Move the Gemini API call to a backend so the API key is not exposed in the browser.
- Replace the placeholder contact number (`(02) 8XXX-XXXX`) in the system prompt and error message with the real one.
- Keep chat history after a page refresh (for example with `localStorage`).
- Render Markdown in replies (bold text, links, lists) instead of plain lines.
- Remove unused template dependencies, or use them (for example Supabase to store conversations).
- Add tests for `ChatbotService` and the chat UI.
