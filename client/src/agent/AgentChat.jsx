import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export function AgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Placeholder: simulate AI reply
    const reply = { role: "ai", content: "I'm an AI agent. I will respond soon!" };
    setTimeout(() => {
      setMessages((prev) => [...prev, reply]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyan-500 p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaRobot size={24} color="white" />
      </button>

      {isOpen && (
        <div className="w-[320px] h-[420px] bg-white text-black p-4 mt-2 rounded-xl shadow-xl flex flex-col">
          <div className="flex-1 overflow-y-auto mb-2 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-2 rounded-lg max-w-[90%] ${
                  msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white text-sm px-3 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
