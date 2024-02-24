/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import debounce from "lodash.debounce";

const VideoPlayer = ({ videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef();

  const handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible";
    setIsPlaying(isVisible);
  };

  const handleScroll = debounce(() => {
    const element = playerRef.current;
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    setIsPlaying(isVisible);
  }, 100);

  const handleTouchStart = (e) => {
    const touchStartY = e.touches[0].clientY;
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    function handleTouchMove(e) {
      const deltaY = e.touches[0].clientY - touchStartY;
      setIsPlaying(deltaY > 0);
    }

    function handleTouchEnd() {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      setIsPlaying(event.key === "ArrowDown");
    }
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="video-player"
      ref={playerRef}
      onTouchStart={handleTouchStart}
      tabIndex={0}
    >
      <div className="display-videos">
        <ReactPlayer
          url={videoUrl}
          playing={isPlaying}
          controls
          width="500px"
          height="500px"
          className="react-player"
        />
      </div>
      <div className="video-overlay">
        <h2 className="video-title">{title}</h2>
      </div>
    </div>
  );
};

export default VideoPlayer;
