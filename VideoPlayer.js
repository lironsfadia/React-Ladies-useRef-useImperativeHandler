import { forwardRef, useImperativeHandle } from "react";

function VideoPlayer({ src, controls }, ref) {
  const videoRef = ref || { current: null };

  useImperativeHandle(
    ref,
    () => ({
      play,
      stop: pause,
      toggle,
      focus,
      isPlaying: true,
    }),
    []
  );

  const focus = () => {
    videoRef.current.focus();
  };
  const toggle = () => {
    console.log("toggle");
  };
  const play = () => {
    //videoRef.current.play();
    console.log(videoRef);
  };
  const pause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <video src={src} width={400} ref={videoRef} />
      {controls && (
        <div className="btn-grp">
          <button className="btn btn-primary" onClick={play}>
            PLAY
          </button>
          <button className="btn btn-info" onClick={pause}>
            PAUSE
          </button>
        </div>
      )}
    </>
  );
}

VideoPlayer.defaultProps = {
  controls: true,
  src: "demo_video.mp4",
};

export default forwardRef(VideoPlayer);
