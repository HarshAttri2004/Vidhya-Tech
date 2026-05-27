"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const panelVariants = {
  hidden: {
    opacity: 0,
    scale: 0.78,
    x: 18,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 24,
      mass: 0.9,
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.78,
    x: 18,
    y: 24,
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const lightTheme = {
  shell:
    "border-slate-200 bg-white/95 text-slate-900 shadow-[0_30px_120px_rgba(15,23,42,.22)]",
  header: "border-slate-200/90 bg-white/75",
  headline: "text-slate-900",
  subline: "text-slate-500",
  surface:
    "bg-[radial-gradient(circle_at_top,_rgba(255,204,0,.12),_transparent_58%),linear-gradient(180deg,rgba(255,255,255,.98),rgba(248,250,252,.96))]",
  botBubble: "border border-slate-200 bg-slate-100 text-slate-800",
  userBubble:
    "bg-gradient-to-br from-[#ffdf71] to-[#ffbf1a] text-black shadow-[0_12px_30px_rgba(255,191,31,.22)]",
  input:
    "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#ffcc00] focus:ring-[#ffcc00]/25",
  send: "bg-gradient-to-br from-[#ffdf71] to-[#ffbf1a] text-black hover:brightness-105",
  toggle: "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
  helper: "text-slate-500",
  typingBubble: "border border-slate-200 bg-slate-100 text-slate-800",
  launcher:
    "bg-gradient-to-br from-[#ffdf71] to-[#ffbf1a] text-black shadow-[0_18px_50px_rgba(255,191,31,.34)]",
  launcherOpen: "bg-slate-900 text-white shadow-[0_18px_50px_rgba(15,23,42,.36)]",
};

const darkTheme = {
  shell:
    "border-white/10 bg-[#0b0d12]/95 text-white shadow-[0_30px_120px_rgba(0,0,0,.55)]",
  header: "border-white/10 bg-white/[0.04]",
  headline: "text-white",
  subline: "text-white/55",
  surface:
    "bg-[radial-gradient(circle_at_top,_rgba(255,204,0,.10),_transparent_62%),linear-gradient(180deg,rgba(11,13,18,.98),rgba(7,9,14,.98))]",
  botBubble: "border border-white/10 bg-white/6 text-white",
  userBubble:
    "bg-gradient-to-br from-[#ffdf71] to-[#ffbf1a] text-black shadow-[0_12px_30px_rgba(255,191,31,.18)]",
  input:
    "border-white/10 bg-white/5 text-white placeholder:text-white/45 focus:border-[#ffcc00] focus:ring-[#ffcc00]/25",
  send: "bg-gradient-to-br from-[#ffdf71] to-[#ffbf1a] text-black hover:brightness-105",
  toggle: "border-white/10 bg-white/5 text-white hover:bg-white/10",
  helper: "text-white/55",
  typingBubble: "border border-white/10 bg-white/6 text-white",
  launcher:
    "bg-gradient-to-br from-[#ffdf71] to-[#ffbf1a] text-black shadow-[0_18px_50px_rgba(255,191,31,.34)]",
  launcherOpen: "bg-white/10 text-white border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,.36)]",
};

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    try {
      return window.localStorage.getItem("vt-chat-theme") === "dark";
    } catch {
      return false;
    }
  });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    serviceType: "",
    timeline: "",
    budget: "",
  });

  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm the Vidhya Tech sales assistant.\nI'll ask a few quick questions so I can recommend the right service.\nWhat's your name?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Added this so they can't spam enter while waiting

  useEffect(() => {
    try {
      window.localStorage.setItem("vt-chat-theme", darkMode ? "dark" : "light");
    } catch {
      // Ignore storage issues.
    }
  }, [darkMode]);

  useEffect(() => {
    if (!open) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chat, open, isTyping]);

  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 220);

    return () => window.clearTimeout(timer);
  }, [open]);

  const isWeakReply = (text) => {
    const value = (text || "").toLowerCase();
    return (
      !value ||
      value.includes("having trouble thinking") ||
      value.includes("trouble thinking right now") ||
      value.includes("brief moment of confusion") ||
      value.includes("could you rephrase") ||
      value.includes("i'm not sure how to respond") ||
      value.includes("i am not sure how to respond") ||
      value.includes("i'm having trouble") ||
      value.includes("i am having trouble") ||
      value.includes("i can't think") ||
      value.includes("i cannot think")
    );
  };

  const getSalesFallback = (lead = {}) => {
    const name = lead?.name?.trim();
    const company = lead?.company?.trim();
    const serviceType = lead?.serviceType?.trim();
    const timeline = lead?.timeline?.trim();
    const budget = lead?.budget?.trim();
    const intro = name ? `Thanks, ${name}.` : "Thanks for sharing that.";
    const companyClause = company ? ` for ${company}` : "";
    const serviceNote = serviceType ? ` I see you're looking for ${serviceType}.` : "";
    const timelineClause = timeline ? ` You mentioned the timeline is ${timeline}.` : "";
    const budgetClause = budget ? ` Your budget is ${budget}.` : "";

    return `${intro}${serviceNote} We can help${companyClause} with web development, AI automation, digital marketing, video editing, social media management, AI integration, and custom IT solutions.${timelineClause}${budgetClause} What would you like us to do next?`;
  };

  const handleSend = async (inputText) => {
    if (!inputText.trim()) return;

    // 1. Instantly add user message and clear input
    setChat((prev) => [...prev, { sender: "user", text: inputText }]);
    setInput("");
    setIsTyping(true);

    // ==========================================
    // PHASE 1: THE ONBOARDING AND QUALIFICATION FLOW (Steps 0 to 7)
    // ==========================================
    if (step < 8) {
      let nextStep = step + 1;
      let botReply = "";

      try {
        if (step === 0) {
          setForm((prev) => ({ ...prev, name: inputText }));
          botReply = "Great. Please enter your email address:";
        } else if (step === 1) {
          setForm((prev) => ({ ...prev, email: inputText }));
          botReply = "What is the best phone number to reach you?";
        } else if (step === 2) {
          setForm((prev) => ({ ...prev, phone: inputText }));
          botReply = "Which company or project is this for?";
        } else if (step === 3) {
          setForm((prev) => ({ ...prev, company: inputText }));
          botReply = "Tell me a little about what you want to build or improve:";
        } else if (step === 4) {
          setForm((prev) => ({ ...prev, message: inputText }));
          botReply =
            "Which service do you need help with - web development, AI automation, digital marketing, video editing, social media management, or something else?";
        } else if (step === 5) {
          setForm((prev) => ({ ...prev, serviceType: inputText }));
          botReply = "What timeline are you aiming for - immediately, this month, or later?";
        } else if (step === 6) {
          setForm((prev) => ({ ...prev, timeline: inputText }));
          botReply = "What budget range are you comfortable with for this project?";
        } else if (step === 7) {
          const finalData = { ...form, budget: inputText };
          setForm(finalData);
          console.log("Sending data:", finalData);

          // Save Data to Google Sheets
          const storeResponse = await fetch("/api/store-info", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalData),
          });

          if (!storeResponse.ok) {
            const errorText = await storeResponse.text().catch(() => "");
            console.error("Data save failed:", storeResponse.status, errorText);
          }

          // Ask the sales AI to answer on behalf of the company.
          let aiText = getSalesFallback(finalData);
          try {
            const res = await fetch("/api/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                message: inputText,
                lead: finalData,
                history: chat,
              }),
            });
            const data = await res.json();
            if (res.ok && data?.text && !isWeakReply(data.text)) aiText = data.text;
          } catch (err) {
            console.error("AI Fetch Error:", err);
          }

          botReply = aiText;
          nextStep = 8; // Move to continuous chat phase!
        }
      } catch (err) {
        console.error("Error:", err);
        botReply =
          "Sorry, something went wrong. We can still help with web development, AI automation, digital marketing, and more. What would you like to do next?";
        nextStep = step; // Keep them on the same step if it fails
      }

      setTimeout(() => {
        setChat((prev) => [...prev, { sender: "bot", text: botReply }]);
        setIsTyping(false);
      }, 500);

      setStep(nextStep);
    } 
    // ==========================================
    // PHASE 2: CONTINUOUS AI CHAT (Step 8+)
    // ==========================================
    else {
      const currentLead = { ...form };

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: inputText,
            lead: currentLead,
            history: chat,
          }),
        });

        const data = await res.json();

        if (res.ok && data.text && !isWeakReply(data.text)) {
          setChat((prev) => [...prev, { sender: "bot", text: data.text }]);
        } else {
          setChat((prev) => [
            ...prev,
            {
              sender: "bot",
              text: getSalesFallback(currentLead),
            },
          ]);
        }
      } catch {
        setChat((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Sorry, I hit a network issue. If you share your goal, I can still help guide you toward the right service.",
          },
        ]);
      }
      setIsTyping(false);
    }
  };

  const theme = darkMode ? darkTheme : lightTheme;
  const launcherClass = open ? theme.launcherOpen : theme.launcher;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.96 }}
        className={`fixed bottom-5 right-5 z-50 rounded-full px-5 py-3 text-sm font-black tracking-wide transition-all ${launcherClass}`}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
      >
        {open ? "Close" : "Ask Me"}
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <motion.div
            key="chat-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "bottom right" }}
            className={`fixed bottom-20 right-5 z-50 w-[min(24rem,calc(100vw-1.5rem))] overflow-hidden rounded-[28px] border backdrop-blur-2xl ${theme.shell}`}
          >
            <motion.div
              variants={childVariants}
              className={`relative overflow-hidden border-b px-4 py-3 ${theme.header}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffcc00]/70 to-transparent opacity-80" />

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>

                  <div>
                    <div className={`text-sm font-black tracking-[0.18em] uppercase ${theme.headline}`}>
                      Vidhya Tech Assistant
                    </div>
                    <div className={`mt-1 text-[11px] uppercase tracking-[0.2em] ${theme.subline}`}>
                      Sales mode | qualifying leads in real time
                    </div>
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={() => setDarkMode((prev) => !prev)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] transition ${theme.toggle}`}
                  aria-pressed={darkMode}
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </motion.button>
              </div>
            </motion.div>

            <div className={`relative h-64 overflow-y-auto px-3 py-4 ${theme.surface}`}>
              <div className="space-y-3">
                {chat.map((msg, i) => (
                  <motion.div
                    key={i}
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    layout
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2.5 text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? `${theme.userBubble} rounded-br-md`
                          : `${theme.botBubble} rounded-bl-md`
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                <AnimatePresence initial={false}>
                  {isTyping && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex justify-start"
                    >
                      <div className={`rounded-2xl rounded-bl-md px-4 py-3 ${theme.typingBubble}`}>
                        <div className="flex items-center gap-1.5">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              className={`h-2 w-2 rounded-full ${
                                darkMode ? "bg-white/70" : "bg-slate-700/70"
                              }`}
                              animate={{
                                opacity: [0.35, 1, 0.35],
                                y: [0, -2, 0],
                              }}
                              transition={{
                                duration: 1.1,
                                repeat: Infinity,
                                delay: dot * 0.14,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className={`border-t p-3 ${theme.header}`}>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isTyping) {
                      handleSend(input);
                    }
                  }}
                  className={`flex-1 rounded-2xl border px-3 py-2.5 text-sm outline-none transition focus:ring-2 ${theme.input}`}
                  placeholder={isTyping ? "AI is typing..." : "Type your message..."}
                />

                <button
                  onClick={() => handleSend(input)}
                  disabled={isTyping || !input.trim()}
                  className={`rounded-2xl px-4 text-sm font-black transition ${theme.send} disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
