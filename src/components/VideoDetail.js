import React from "react";
import { html, safeHtml } from "common-tags";

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        {html`<h4 className="ui header">Hello</h4>`}
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
