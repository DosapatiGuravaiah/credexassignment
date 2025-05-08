import { useState } from 'react';
import { motion } from 'framer-motion';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you?' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [...m, { sender: 'bot', text: 'We will get back to you shortly.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border rounded-lg shadow-lg w-72 p-3"
        >
          <div className="flex justify-between items-center mb-2">
            <strong>SoftSell Assistant</strong>
            <button onClick={() => setIsOpen(false)}>✖️</button>
          </div>
          <div className="h-40 overflow-y-auto text-sm mb-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`my-1 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <span className={`inline-block px-2 py-1 rounded ${m.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'}`}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              className="flex-1 text-black px-2 py-1 border rounded-l"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me..."
            />
            <button className="bg-blue-500 text-white px-2 rounded-r" onClick={send}>
              Send
            </button>
          </div>
        </motion.div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full p-3 shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
}

export default ChatWidget;
