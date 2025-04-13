// import { useState } from "react";
// import { FaRobot } from "react-icons/fa";

// export function AgentChat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;
//     const userMessage = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     // Placeholder: simulate AI reply
//     const reply = { role: "ai", content: "I'm an AI agent. I will respond soon!" };
//     setTimeout(() => {
//       setMessages((prev) => [...prev, reply]);
//     }, 600);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-cyan-500 p-4 rounded-full shadow-lg hover:scale-105 transition"
//       >
//         <FaRobot size={24} color="white" />
//       </button>

//       {isOpen && (
//         <div className="w-[320px] h-[420px] bg-white text-black p-4 mt-2 rounded-xl shadow-xl flex flex-col">
//           <div className="flex-1 overflow-y-auto mb-2 space-y-2">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`text-sm px-3 py-2 rounded-lg max-w-[90%] ${
//                   msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
//                 }`}
//               >
//                 {msg.content}
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-2">
//             <input
//               className="flex-1 border rounded-lg px-3 py-2 text-sm"
//               placeholder="Ask me anything..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-black text-white text-sm px-3 py-2 rounded-lg"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

const AgentChat = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/chat", { query });
      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("⚠️ Failed to get response.");
    }
    setLoading(false);
  };

  return (
    <section className="bg-white py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Ask My Portfolio 🤖</h2>
      <textarea
        className="w-full border p-3 rounded-lg resize-none"
        placeholder="Ask me anything about my skills, projects, or experience..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleAsk}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>
      {answer && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow-sm text-gray-700 whitespace-pre-line">
          {answer}
        </div>
      )}
    </section>
  );
};

export default AgentChat;
