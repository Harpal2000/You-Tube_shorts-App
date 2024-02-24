import VideoPlayer from "./components/VideoPlayer";
import LikeButton from "./components/LikeButton";
import "./App.css";
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video3.mp4";
import video5 from "./assets/video3.mp4";

const App = () => {
  const videos = [
    { url: video1, title: "Video 1 Title" },
    { url: video2, title: "Video 2 Title" },
    { url: video3, title: "Video 3 Title" },
    { url: video4, title: "Video 4 Title" },
    { url: video5, title: "Video 5 Title" },
  ];

  return (
    <div className="app">
      <h1>YouTube Shorts</h1>
      <div className="videos">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <VideoPlayer videoUrl={video.url} title={video.title} />
            <LikeButton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
