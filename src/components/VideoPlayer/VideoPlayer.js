import React, { useEffect, useRef, useState } from 'react';
import vid from '../../assets/video/video.mp4';
import './style.css';
function millisToSec(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
export default function VideoPlayer() {
  const videoRef = useRef();
  const [videoStatus, setVideoStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0.0);
  const [clickCount, setClickCount] = useState(1);
  useEffect(() => {
    videoRef.current.ontimeupdate = (e) => {
      setCurrentTime(
        () => (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    };

    // return () => {};
  }, []);

  const handleVideoClick = async () => {
    try {
      if (videoRef.current?.paused) {
        await videoRef.current.play();
      } else {
        await videoRef.current.pause();
      }

      // setTimeout(() => i.classList.add('fade'), 2000);
      setVideoStatus((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };
  const mute = async () => {
    try {
      videoRef.current?.muted
        ? (videoRef.current.muted = !videoRef.current.muted)
        : (videoRef.current.muted = !videoRef.current.muted);

      // setTimeout(() => i.classList.add('fade'), 2000);
      setVideoStatus((prev) => !prev);
      if (clickCount === 2) {
        handleVideoClick();
        setClickCount(1);
      }
      console.log(clickCount);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='w-screen h-screen bg-black backdrop-blur grid place-items-center'>
      <div className='w-[480px] h-fit video-div relative m-2' onClick={handleVideoClick}>
        <video
          src={vid}
          ref={videoRef}
          autoPlay
          loop
          className='relative rounded-md '
          width={480}
          height={window.innerHeight}
        ></video>
        <div className='bg-black/40  absolute w-full h-full top-0 grid place-items-center overlay'>
          {videoStatus && (
            <i
              className={`bx ${
                !videoStatus ? 'bx-pause' : 'bx-play'
              } transform-gpu text-white fade`}
            ></i>
          )}
          {!videoStatus && (
            <i
              className={`bx ${
                !videoStatus ? 'bx-pause' : 'bx-play'
              } transform-gpu text-white fade`}
            ></i>
          )}

          <div className='w-full absolute bottom-6 overflow-hidden'>
            {/* <input
              type='range'
              min='0'
              max='100'
              value={currentTime.toFixed(2)}
              className='w-full h-1 mb-6 bg-white/10 rounded-full  appearance-none cursor-pointer range-sm  timeline transition-all'
            /> */}
            <div className='bg-white/10 absolute  w-full h-0.5 bottom-2'>
              <div
                className='bg-white/40 flex w-full h-full'
                style={{
                  transform: `translateX(${currentTime - 100}%)`,
                }}
              ></div>
            </div>
            <div className='absolute text-white text-sm mx-2'>
              {`${millisToSec(
                videoRef.current?.currentTime * 600
              )} / ${millisToSec(videoRef.current?.duration * 600)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
