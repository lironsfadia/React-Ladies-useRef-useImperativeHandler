import { useRef } from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  const videoRef = useRef();
  const onPlay = () => {
    videoRef.current.play();
  };
  return (
    <div className="container">
      <header className="display-1">React Ladies Pro Edition | 2022</header>
      <button onClick={onPlay}>Play</button>
      <VideoPlayer controls={true} src={"demo_video.mp4"} ref={videoRef} />
    </div>
  );
}

export default App;
