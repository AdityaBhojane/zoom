import React, { useState } from 'react';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import CallControls from '../../components/CallControls/CallControlls';
import ChatBox from '../../components/ChatBox/ChatBox';

const VideoCall: React.FC = () => {
  const [streams] = useState<MediaStream[]>([]); // Placeholder for video streams
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="relative h-screen flex flex-col bg-gray-900">
      <div className="flex-grow overflow-auto">
        {/* Video Grid */}
        <VideoGrid streams={streams} />
      </div>

      {/* Call Controls */}
      <CallControls toggleChat={toggleChat} />

      {/* Chat */}
      {chatOpen && <ChatBox />}
    </div>
  );
};

export default VideoCall;
