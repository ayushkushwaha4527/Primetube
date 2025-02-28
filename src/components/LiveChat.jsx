import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, [dispatch]);

  const sendChatMessage = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      dispatch(
        addMessage({
          name: "User",
          message: chatMessage,
        })
      );
      setChatMessage("");
    }
  };

  return (
    <div className="flex flex-col w-full md:w-1/4 p-4 gap-4 bg-white shadow-lg rounded-lg border">
      <h2 className="font-bold text-lg text-gray-800 border-b pb-2">Live Chat</h2>
      
      {/* Chat Messages Section */}
      <div className="w-full p-2 bg-gray-100 rounded-lg overflow-y-scroll h-[250px] md:h-[450px] flex flex-col-reverse border">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      {/* Chat Input */}
      <form className="flex gap-2 w-full" onSubmit={sendChatMessage}>
        <input
          type="text"
          className="border w-full border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
