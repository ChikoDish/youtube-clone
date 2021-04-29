import React from "react";
import ReactPlayer from "react-player";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>No video found</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed video-responsive">
        {/* <iframe
          width="853"
          height="480"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> */}
        {/* <object data={videoSrc} width="560px" height="315px"></object> */}
        <ReactPlayer controls={true} url={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
