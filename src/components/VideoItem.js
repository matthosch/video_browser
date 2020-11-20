import React from "react";
import "./VideoItem.css";
import { htmlDecode } from "../utils/htmlDecode";

const VideoItem = ({ video, setSelectedVideo }) => {
  return (
    <div onClick={() => setSelectedVideo(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{htmlDecode(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
