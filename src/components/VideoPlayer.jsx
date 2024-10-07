// VideoPlayer.js
import React from "react";

const VideoPlayer = ({ src, width, height, title }) => {
  return (
    <div className="video-container">
      <iframe
        className="video-iframe"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
