import Badge from "@components/badge/badge.component";
import { useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";
import "./videoplayer.styles.scss";

export default function VideoPlayer({
  video,
  hasControls,
}: {
  video: string;
  hasControls: boolean;
}): React.ReactElement {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleTimeUpdate = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const currentTime = e.currentTarget.currentTime;
    setProgress(currentTime);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  useEffect(() => {
    handleLoadedMetadata();
  }, [videoRef]);
  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={video}
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
      />
      {hasControls && (
        <div className="controls">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <Badge icon={<HiPause />} type="transparent" />
            ) : (
              <Badge icon={<HiPlay />} type="transparent" />
            )}
          </button>
          <div className="progress">
            <div
              className="progress-bar"
              style={{
                width: `${(progress / duration) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
