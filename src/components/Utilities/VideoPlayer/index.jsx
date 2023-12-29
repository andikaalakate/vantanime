"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2 rounded-lg">
        <button
          onClick={handleVideoPlayer}
          className="text-color-whity rounded-lg float-right px-4 mb-1 bg-color-dark transition-all duration-500 ease-in-out shadow-lg"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option} className="object-cover"
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-2 shadow-lg transition-all duration-500 ease-in-out rounded-lg right-2 w-32 bg-color-whity text-color-dark"
      >
        Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
