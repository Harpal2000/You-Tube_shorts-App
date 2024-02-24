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

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="video-player" ref={playerRef}>
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
