"use client";

import { useEffect, useState } from "react";

const Trailer = ({ youtubeId }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (youtubeId) {
      setVideoId(youtubeId);
    }
  }, [youtubeId]);

  return (
    <div className="flex justify-center mx-auto rounded-lg py-2 aspect-video items-center px-4">
      {videoId && (
        <iframe
          className="w-full h-full rounded-xl border-color-primary border-4 shadow-xl"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {!videoId && (
        <iframe
          className="w-full h-full rounded-xl border-color-primary border-4 shadow-xl"
          src={`https://www.youtube.com/embed/aEOyEtArBI8`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Trailer;
