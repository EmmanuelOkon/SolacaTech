"use client";

import * as React from "react";
import { Icons } from "@/public/assets/icon";

const OnlineChat = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="hidden fixed bottom-0 right-0 m-2 sm:m-4 lg:m-8  z-[7000] border-4 border-[#434343] rounded-[30px] ">
      {/* <Icons.ChatIcon /> */}
      <div className="flex flex-col max-w-[400px] h-[600px] w-full bg-white rounded-[28px] shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#434343] text-white">
          <Icons.Logo className="text-white" />

          <Icons.XIcon className="text-white w-6 h-6 " />
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col p-4 space-y-2 flex-1 overflow-y-auto">
          <div className="flex">
            <div className="bg-gray-200 rounded-lg p-3 text-gray-700 max-w-xs">
              Hi there! How can I help you?
            </div>
          </div>

          {messages.map((msg, index) => (
            <div key={index} className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                {msg}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-2 p-4 bg-gray-50 ">
          <button
            className="px-3 py-2 bg-white border rounded-full shadow text-gray-800"
            onClick={() => handleSendMessage("Products")}
          >
            Products
          </button>
          <button
            className="px-3 py-2 bg-white border rounded-full shadow text-gray-800"
            onClick={() => handleSendMessage("Categories")}
          >
            Categories
          </button>
          <button
            className="px-3 py-2 bg-white border rounded-full shadow text-gray-800"
            onClick={() => handleSendMessage("Special Offer")}
          >
            Special Offer
          </button>
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 border border-gray-300 bg-white ">
          <input
            type="text"
            placeholder="Type message"
            className="flex-1 p-2  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 bg-[#434343] text-white p-2 rounded-[14px] shadow">
            <Icons.Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineChat;
