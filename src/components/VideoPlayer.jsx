// VideoPlayer.js
import React from "react";

const VideoPlayer = ({ src, width, height, title }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
