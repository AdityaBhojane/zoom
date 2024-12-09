
interface VideoGridProps {
  streams: MediaStream[];
}

const VideoGrid = ({ streams }:VideoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {streams.map((stream, index) => (
        <video
          key={index}
          className="rounded-lg border"
          autoPlay
          muted={index === 0} // Mute the local stream
          ref={(videoElement) => {
            if (videoElement) videoElement.srcObject = stream;
          }}
        ></video>
      ))}
    </div>
  );
};

export default VideoGrid;
