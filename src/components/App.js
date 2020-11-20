import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
    setSelectedVideo(data.items[0]);
  };

  return (
    <div style={{ marginTop: "10px" }} className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              setSelectedVideo={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;