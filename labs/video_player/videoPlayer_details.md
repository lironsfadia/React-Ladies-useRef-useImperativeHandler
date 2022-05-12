# The Video Player

Your mission: Implement a `VideoPlayer` that can be controlled via Ref (or not)

- Use: `useImperativeHandle`, `demo_video.mp4` on public folder
- Optional: `useContenxt`

__End results__

```jsx
const VideoPlayerDemo = () => {
  const videoRef = useRef();

  const play = () => {
    videoRef.current.play()
  }

  return (
    <div>
      <h2>Video Player Demo</h2>
      <VideoPlayer ref={videoRef}/>
      <button onClick={play}>play</button>
    </div>
  );
};
```
