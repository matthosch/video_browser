import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        setSelectedVideo={setSelectedVideo}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
