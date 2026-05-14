"use client";
import { useState } from "react";

export default function ChatBox() {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi 👋 Welcome to Vidhya Tech!\nWhat's your name?" },
  ]);

  const handleSend = async (input) => {
    if (!input) return;

    setChat((prev) => [...prev, { sender: "user", text: input }]);

    let nextStep = step + 1;
    let botReply = "";

    if (step === 0) {
      setForm({ ...form, name: input });
      botReply = "Great! Please enter your email:";
    } else if (step === 1) {
      setForm({ ...form, email: input });
      botReply = "Your phone number?";
    } else if (step === 2) {
      setForm({ ...form, phone: input });
      botReply = "Company or project name?";
    } else if (step === 3) {
      setForm({ ...form, company: input });
      botReply = "Tell me your requirement:";
    } else if (step === 4) {
      const finalData = { ...form, message: input };

      // 📊 SAVE TO GOOGLE SHEET
      await fetch("/api/store-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      // 🤖 AI RESPONSE
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      botReply = "✅ Thank you! Our team will contact you soon.\n\n🤖 " + data.text;

      nextStep = 999; // end
    }

    setChat((prev) => [...prev, { sender: "bot", text: botReply }]);
    setStep(nextStep);
  };

  const [input, setInput] = useState("");

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-yellow-400 px-4 py-2 rounded-full z-50"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white text-black p-3 rounded-xl z-50">
          <div className="h-60 overflow-y-auto mb-2">
            {chat.map((msg, i) => (
              <div key={i} className={msg.sender === "user" ? "text-right" : "text-left"}>
                <p className="text-sm whitespace-pre-line">{msg.text}</p>
              </div>
            ))}
          </div>

          {step !== 999 && (
            <>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border w-full p-2"
                placeholder="Type..."
              />

              <button
                onClick={() => {
                  handleSend(input);
                  setInput("");
                }}
                className="bg-black text-white w-full mt-2 p-2"
              >
                Send
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}