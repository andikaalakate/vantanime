"use client"

import { useState } from "react";
import YouTube from "react-youtube"

export const Trailer = ({youtubeId}) => {
    const [randomAnimeId, setRandomAnimeId] = useState(null);
    const [trailerYoutubeId, setTrailerYoutubeId] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        // Ambil ID acak dari data anime
        const randomId = Math.floor(Math.random() * topAnime.data.length);
        setRandomAnimeId(topAnime.data[randomId].id);
      };

      fetchData();
    }, []);
    
    useEffect(() => {
      const fetchTrailerYoutubeId = async () => {
        if (randomAnimeId) {
          const anime = await getAnimeResponse(`anime/${randomAnimeId}`);
          setTrailerYoutubeId(anime.data.trailer.youtube_id);
        }
      };

      fetchTrailerYoutubeId();
    }, [randomAnimeId]);
  return (
    <div>Trailer</div>
  )
}
