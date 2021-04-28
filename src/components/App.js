import React, { useState } from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/api";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchText) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchText,
        //  channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
      },
    });
    console.log(response);
    setVideos(response.data.items);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container" style={{ marginTop: "1em" }}>
      <SearchBar handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
