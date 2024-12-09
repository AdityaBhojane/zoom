


const ChatBox= () => {
  return (
    <div className={`absolute right-0 top-0 h-full bg-gray-900 w-1/3 text-white p-4 `}>
      <h3 className="text-xl font-bold mb-4">Chat</h3>
      <div className="flex flex-col space-y-2 h-4/5 overflow-y-auto">
        {/* Messages */}
        <p className="bg-gray-800 p-2 rounded">Hello!</p>
        <p className="bg-blue-500 p-2 rounded self-end">Hi there!</p>
      </div>
      <div className="flex space-x-2 mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 bg-gray-700 text-white rounded"
        />
        <button className="bg-blue-500 px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
