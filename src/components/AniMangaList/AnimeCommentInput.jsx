"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const AnimeCommentInput = ({anime_id, user_email, username, anime_title}) => {
  const [comment, setComment] = useState("");

  const router = useRouter()
  const commentRef = useRef();

  const [isCreated, setIsCreated] = useState(false);
  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();

    const data = { anime_id, user_email, comment, username, anime_title };

    const keyword = commentRef.current.value;

    if (!keyword || keyword.length <= 3 || keyword.trim() == "") return;

    const response = await fetch("/api/v1/anime/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    
    const postComment = await response.json();
    if (postComment.status == 200) {
      setIsCreated(postComment.isCreated);
      setComment("")
      router.refresh()
    }
    return;
  };
  return (
    <div className="flex flex-col gap-2 m-4">
      {isCreated && <p className="text-color-whity">Komentar terkirim...</p>}
      <textarea onChange={handleInput} className="h-32 w-full rounded-lg p-4 shadow-lg" value={comment} ref={commentRef} />
      <button
        onClick={handlePosting}
        className="bg-color-primary text-base rounded-md shadow-lg py-2 px-4 font-bold text-color-whity hover:text-slate-200 hover:bg-[#0041C8] transition-all duration-500 self-start flex my-2"
      >
        Posting Komentar
      </button>
    </div>
  );
};

export default AnimeCommentInput;
