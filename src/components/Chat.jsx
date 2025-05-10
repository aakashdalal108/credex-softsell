import React, { useState } from 'react';

const Chat = () => {
 
  const [isChatOpen, setIsChatOpen] = useState(false);

  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      
      {!isChatOpen && (
        <div
          className="fixed bottom-8 right-8 cursor-pointer z-50"
          onClick={toggleChat}
        >
          <img className="w-12 rounded-full" src="/chat.png" alt="Chat" />
        </div>
      )}

     
      {isChatOpen && (
        <div
          className="fixed hidden md:block bottom-8 right-8 w-80  bg-white shadow-lg rounded-lg p-4 z-50"
          style={{ borderRadius: '10px' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Chat</h3>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 p-1 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-6 h-6"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto h-72">
            <div className="mb-4">
              <div className="bg-gray-100 p-2 rounded-lg max-w-xs">
                <p className="text-sm">Hello! How can I help you?</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-blue-100 p-2 rounded-lg max-w-xs ml-auto">
                <p className="text-sm">I need some assistance!</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="border-2 border-gray-300 w-full rounded-lg"
            />
            <button className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
