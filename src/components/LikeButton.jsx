import { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <button
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={handleLikeClick}
    >
      Like
    </button>
  );
};

export default LikeButton;
