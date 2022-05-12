import React from 'react';

// Starter code
const VideoPlayer_start = () => {
  return (
    <div className="card bg-light" style={{ width: '600px' }}>
      <div className="card-body text-center">
        <video src='demo_video.mp4' width="550"/>
        <div className="btn-group btn-group-lg">
        <div className="btn btn-success">Play</div>
        <div className="btn btn-danger">Stop</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer_start;
