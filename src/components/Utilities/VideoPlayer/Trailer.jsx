"use client"

import YouTube from "react-youtube";
import { useEffect, useState } from "react";

const Trailer = ({ youtubeId }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (youtubeId) {
      setVideoId(youtubeId);
    }
  }, [youtubeId]);

  const option = {
    width: "w-full",
    height: "h-full",
  };

  return (
    <div className="flex justify-center mx-auto rounded-lg py-2 aspect-video items-center px-4">
      {videoId && (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
      {!videoId && (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/aEOyEtArBI8`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default Trailer;
