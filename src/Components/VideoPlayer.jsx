import React, { useEffect, useRef, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ url }) => {
  const iframeRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const id = url.split('v=')[1]?.split('&')[0];
    setVideoId(id);
  }, [url]);

  useEffect(() => {
    if (!videoId) return;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player(iframeRef.current, {
        videoId,
        events: {
          onReady: () => {
            setInterval(() => {
              const duration = player.getDuration();
              const currentTime = player.getCurrentTime();
              const currentProgress = (currentTime / duration) * 100;
              setProgress(currentProgress);
              localStorage.setItem(`progress_${videoId}`, currentProgress.toFixed(2));
            }, 1000);
          },
        },
      });
    };
  }, [videoId]);

  return (
    <div className="video-player">
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{progress.toFixed(2)}% watched</p>
      </div>

      <div id="player">
        {videoId ? <div ref={iframeRef}></div> : <p>Video not available</p>}
      </div>
    </div>
  );
};

export default VideoPlayer;
