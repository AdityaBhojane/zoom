import  { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaCommentAlt } from 'react-icons/fa';
import VButton from '../VButton/VButton';



interface CallControlsProps {
  toggleChat: () => void;
}

const CallControls = ({ toggleChat }: CallControlsProps) => {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-800">
      {/* Mic Toggle */}
      <VButton
        icon={micOn ? <FaMicrophone className="text-white" /> : <FaMicrophoneSlash className="text-red-500" />}
        onClick={() => setMicOn(!micOn)}
        isActive={micOn}
      />

      {/* Camera Toggle */}
      <VButton
        icon={cameraOn ? <FaVideo className="text-white" /> : <FaVideoSlash className="text-red-500" />}
        onClick={() => setCameraOn(!cameraOn)}
        isActive={cameraOn}
      />

      {/* Chat Toggle */}
      <VButton
        icon={<FaCommentAlt className="text-white" />}
        onClick={toggleChat}
      />
    </div>
  );
};

export default CallControls;
