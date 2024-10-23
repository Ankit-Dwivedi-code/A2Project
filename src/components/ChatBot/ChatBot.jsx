import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'bot', message: 'Hello! How can I help you today?' },
  ]);
  const [isTyping, setIsTyping] = useState(false); // New state to manage "typing" indicator

  // Toggle chatbox visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle user input and bot response
  const handleSend = () => {
    if (input.trim()) {
      const newLog = [...chatLog, { sender: 'user', message: input }];
      setChatLog(newLog);
      setInput('');
      simulateBotResponse(input);
    }
  };

  // Simulate bot response with a typing delay
  const simulateBotResponse = (userMessage) => {
    setIsTyping(true); // Bot starts typing

    // Simulate a delay before bot replies
    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      setChatLog((prevLog) => [...prevLog, { sender: 'bot', message: botReply }]);
      setIsTyping(false); // Bot stops typing
    }, 2000); // Adjust delay time (e.g., 2 seconds)
  };

  // Simple bot responses based on user input, extended with synonyms
  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hii')) {
      return 'Hello! How can I assist you?';
    } else if (lowerCaseMessage.includes('name')) {
      return 'My name is A2 Pyramid Bot. Ask your question?';
    } else if (lowerCaseMessage.includes('contact')) {
      return 'You can contact us at +91 9472994483 or studypyramid@gmail.com.';
    } else if (lowerCaseMessage.includes('location')) {
      return 'We are located at Rukunpura, Bailey Road Patna, India.';
    } else if (lowerCaseMessage.includes('services')) {
      return 'We offer web development, app development, and digital marketing services. How can we assist you?';
    } else if (lowerCaseMessage.includes('working hours')) {
      return 'Our working hours are Monday to Friday, from 9 AM to 6 PM IST.';
    } else if (lowerCaseMessage.includes('course') || lowerCaseMessage.includes('courses') || lowerCaseMessage.includes('subject')) {
      return 'We provide courses in Data Analytics, Machine Learning, MERN stack, DevOps, and QA Engineering.';
    } else if (lowerCaseMessage.includes('duration')) {
      return 'Every course has a particular duration, you can check that in our curriculum.';
    } else if (lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('price') || lowerCaseMessage.includes('fee')) {
      return 'The cost depends on the project scope. Contact us for a personalized quote.';
    } else if (lowerCaseMessage.includes('custom solutions')) {
      return 'Yes, we offer custom solutions tailored to your specific needs.';
    } else if (lowerCaseMessage.includes('consultation')) {
      return 'You can schedule a consultation by providing your preferred date and time.';
    } else if (lowerCaseMessage.includes('technologies')) {
      return 'We use technologies like React, Node.js, MongoDB, and more to build scalable applications.';
    } else if (lowerCaseMessage.includes('support') || lowerCaseMessage.includes('help')) {
      return 'Yes, we provide post-project support to ensure everything runs smoothly.';
    } else if (lowerCaseMessage.includes('progress') || lowerCaseMessage.includes('report') || lowerCaseMessage.includes('updates')) {
      return 'We provide regular updates and full transparency throughout your project’s progress.';
    } else if (lowerCaseMessage.includes('free trial') || lowerCaseMessage.includes('demo') || lowerCaseMessage.includes('test service')) {
      return 'We offer free consultations, but for demos or trial access, we can discuss the specifics based on your project needs.';
    } else {
      return 'Sorry, I didn’t understand that. Can you ask something else?';
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {/* Bot Icon */}
      <div
        onClick={toggleChat}
        className="bg-blue-600 w-12 h-12 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition duration-300 flex items-center justify-center fixed bottom-20 right-6"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaRobot className="text-xl" />}
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-80 max-w-full mb-16">
          <div className="h-64 overflow-y-auto p-2 border-b">
            {chatLog.map((log, index) => (
              <div
                key={index}
                className={`mb-2 ${log.sender === 'bot' ? 'text-left' : 'text-right'}`}
              >
                <p
                  className={`inline-block p-2 rounded-lg ${
                    log.sender === 'bot'
                      ? 'bg-gray-100 text-gray-800 font-bold text-sm'
                      : 'bg-blue-600 text-white font-bold text-sm'
                  }`}
                >
                  {log.message}
                </p>
              </div>
            ))}

            {/* Display Typing Indicator */}
            {isTyping && (
              <div className="text-left mb-2">
                <p className="inline-block p-2 rounded-lg bg-gray-100 text-gray-800 font-bold text-sm">
                  typing...
                </p>
              </div>
            )}
          </div>
          
          {/* Input Box */}
          <div className="flex items-center mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 ml-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
