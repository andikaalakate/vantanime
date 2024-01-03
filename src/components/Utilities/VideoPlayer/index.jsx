"use client"

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "350",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[23.7rem] justify-center rounded-lg bg-gray-900 text-white p-4 shadow-lg aspect-video">
        <button
          onClick={handleVideoPlayer}
          className="absolute top-2 right-2 rounded-lg px-2 bg-gray-800"
        >
          Close
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          className="object-cover mx-auto"
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-32 rounded-lg bg-white text-gray-900 shadow-lg"
      >
        Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
