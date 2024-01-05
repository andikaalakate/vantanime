"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const MangaCommentInput = ({ manga_id, user_email, username, manga_title }) => {
  const [comment, setComment] = useState("");

  const commentRef = useRef();

  const router = useRouter();

  const [isCreated, setIsCreated] = useState(false);
  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();

    const keyword = commentRef.current.value;

    if (!keyword || keyword.length <= 3 || keyword.trim() == "") return;

    const data = { manga_id, user_email, comment, username, manga_title };

    const response = await fetch("/api/v1/manga/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.status == 200) {
      setIsCreated(postComment.isCreated);
      setComment("");
      router.refresh();
    }
    return;
  };
  return (
    <div className="m-4 flex flex-col gap-2">
      {isCreated && <p className="text-color-whity">Komentar terkirim...</p>}
      <textarea
        onChange={handleInput}
        ref={commentRef}
        className="h-32 w-full rounded-lg bg-color-whity p-4 text-color-dark shadow-lg"
        value={comment}
      />
      <button
        onClick={handlePosting}
        className="my-2 flex self-start rounded-md bg-color-primary px-4 py-2 text-base font-bold text-color-whity shadow-lg transition-all duration-500 hover:bg-[#0041C8] hover:text-slate-200"
      >
        Posting Komentar
      </button>
    </div>
  );
};

export default MangaCommentInput;
