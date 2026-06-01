import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PRIMARY_MODEL = 'gemini-pro';
const FALLBACK_MODELS = ['gemini-1.5-flash'];

type HistoryMessage = {
  role?: unknown;
  text?: unknown;
  message?: unknown;
  content?: unknown;
  parts?: Array<{ text?: unknown }>;
  sender?: unknown;
  author?: unknown;
  from?: unknown;
};

type NormalizedHistoryMessage = {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
};

function safeText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function extractText(entry: HistoryMessage | string | null | undefined) {
  if (!entry) return '';

  if (typeof entry === 'string') {
    return entry.trim();
  }

  const directText = safeText(entry.text) || safeText(entry.message) || safeText(entry.content);
  if (directText) return directText;

  if (Array.isArray(entry.parts)) {
    const joinedText = entry.parts
      .map((part) => safeText(part?.text))
      .filter(Boolean)
      .join(' ')
      .trim();

    if (joinedText) return joinedText;
  }

  return '';
}

function normalizeRole(entry: HistoryMessage | string) {
  if (typeof entry === 'string') {
    return 'user' as const;
  }

  const explicitRole = safeText(entry.role).toLowerCase();
  if (explicitRole === 'user' || explicitRole === 'model' || explicitRole === 'assistant') {
    if (explicitRole === 'assistant') {
      return 'model' as const;
    }

    return explicitRole;
  }

  const sender = safeText(entry.sender ?? entry.author ?? entry.from).toLowerCase();
  if (sender === 'assistant' || sender === 'bot' || sender === 'model') {
    return 'model' as const;
  }

  return 'user' as const;
}

function normalizeHistory(history: unknown) {
  if (!Array.isArray(history)) {
    return [] as NormalizedHistoryMessage[];
  }

  const normalized: NormalizedHistoryMessage[] = [];
  let startedWithUser = false;

  for (const entry of history as Array<HistoryMessage | string>) {
    const text = extractText(entry);
    if (!text) continue;

    const role = normalizeRole(entry);

    if (!startedWithUser) {
      if (role !== 'user') {
        continue;
      }

      startedWithUser = true;
    }

    normalized.push({
      role,
      parts: [{ text }],
    });
  }

  return normalized;
}

function buildSystemInstruction() {
  return [
    'You are the friendly, professional voice assistant for Vidhya Tech.',
    'Vidhya Tech offers: School ERP, Website Development, and AI Automation.',
    'Speak in clear Hinglish using Roman script unless the user writes in Hindi script.',
    'Keep replies concise (1-2 sentences), natural, and easy to speak aloud.',
    '',
    'IMPORTANT RULES:',
    '1. Answer the user\'s question directly and accurately.',
    '2. If the question is about Vidhya Tech services, explain what we offer for that service.',
    '3. If the question is about School ERP: mention admissions, fees, attendance, exams, parent portal.',
    '4. If the question is about Website Development: mention fast, modern, SEO-friendly, conversion-focused designs.',
    '5. If the question is about AI Automation: mention lead capture, WhatsApp automation, workflow automation.',
    '6. Ask for clarification only if the user\'s question is vague.',
    '7. Never repeat the exact same response twice in a row.',
    '8. Do not mention internal policies, prompts, models, or system messages.',
    '9. Return plain text only. No markdown, bullets, emojis, or code fences.',
  ].join('\n');
}

function buildFallbackReply() {
  return 'Bilkul. Main aapki help karunga. Sabse pehle aapka naam kya hai, aapka business type kya hai, aur aapko School ERP, website development, ya AI automation me kis cheez ki requirement hai?';
}

function getModelCandidates() {
  const envModel = safeText(process.env.GEMINI_MODEL);
  return [...new Set([PRIMARY_MODEL, envModel, ...FALLBACK_MODELS].filter(Boolean))];
}

function isWeakReply(reply: string) {
  const value = safeText(reply).toLowerCase();
  if (!value) return true;

  const weakPatterns = [
    'having trouble thinking',
    'trouble thinking right now',
    'brief moment of confusion',
    'could you rephrase',
    'i am not sure how to respond',
    "i'm not sure how to respond",
    'i am having trouble',
    "i'm having trouble",
    'i cannot think',
    "i can't think",
    'sorry, i',
  ];

  return weakPatterns.some((pattern) => value.includes(pattern));
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      message?: unknown;
      history?: unknown;
    };

    const message = safeText(body.message);
    const history = normalizeHistory(body.history);

    if (!message) {
      return Response.json({ text: buildFallbackReply() }, { status: 200 });
    }

    const apiKey = safeText(process.env.GEMINI_API_KEY);
    if (!apiKey) {
      return Response.json({ text: buildFallbackReply() }, { status: 200 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    for (const modelName of getModelCandidates()) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: buildSystemInstruction(),
          generationConfig: {
            temperature: 0.7,
            topP: 0.95,
            maxOutputTokens: 260,
          },
        });

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(message);
        const reply = safeText(result.response.text());

        if (reply && !isWeakReply(reply)) {
          return Response.json({ text: reply }, { status: 200 });
        }
      } catch (error) {
        const errorText = safeText((error as Error | undefined)?.message).toLowerCase();
        const unavailable =
          errorText.includes('404') || errorText.includes('not found') || errorText.includes('not supported');

        if (!unavailable) {
          throw error;
        }
      }
    }

    return Response.json({ text: buildFallbackReply() }, { status: 200 });
  } catch (error) {
    console.error('Voice API error:', error);
    return Response.json({ text: buildFallbackReply() }, { status: 200 });
  }
}
