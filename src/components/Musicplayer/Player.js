import React, { useState } from 'react';
import cover from '../../assets/image/cover.png';
import cover2 from '../../assets/image/cover2.jpg';
import Marquee from 'react-fast-marquee';
export default function Player() {
  const [isPlaying, setPlaying] = useState(false);
  const handleisPlaying = () => setPlaying((prev) => !prev);
  const [queue, setQueue] = useState(false);
  return (
    <>
      <div
        className='w-[320px] h-[580px] mt-28 mx-4 rounded-2xl'
        style={{
          background: `url(${queue ? cover2 : cover})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className='h-full w-full bg-black/40 backdrop-blur-2xl flex flex-col items-center border rounded-xl border-white/10'>
          <div className='h-80 grid place-items-center'>
            <img
              src={queue ? cover2 : cover}
              alt='cover'
              className={`rounded-lg shadow select-none transition-all ${
                !isPlaying ? 'w-60 h-60' : 'w-40 h-40'
              }`}
            />
          </div>
          <div className='place-self-start mx-8'>
            <Marquee
              className='text-white/80 font-semibold'
              speed={30}
              gradient={false}
              width='10%'
            >
              <i className='bx bxs-disc mr-1'></i>
              Song Name
            </Marquee>
            <p className='text-white/50 font-semibold'>ArtistName</p>
          </div>
          <div className='w-full flex px-8 mt-4 transition-all hover:scale-105'>
            <div
              className={`bg-white/80 w-[10%] h-2 rounded-md rounded-r-none`}
            ></div>
            <div className='bg-white/30 w-[90%] h-2 rounded-md rounded-l-none'></div>
          </div>
          <div className='text-white/70 w-full text-sm mt-2 flex justify-between px-8'>
            <span>01:12</span>
            <span>-02:14</span>
          </div>
          <div className='flex gap-6 place-items-center'>
            <i className='bx bx-fast-forward text-white rotate-180 text-4xl transition-all hover:rounded-full hover:bg-black/10'></i>
            {isPlaying ? (
              <i
                className='bx bx-play text-white text-6xl transition-all hover:rounded-full hover:bg-black/10'
                onClick={handleisPlaying}
              ></i>
            ) : (
              <i
                className='bx bx-pause text-white text-6xl transition-all hover:rounded-full hover:bg-black/10'
                onClick={handleisPlaying}
              ></i>
            )}

            <i
              className='bx bx-fast-forward text-white text-4xl transition-all hover:rounded-full hover:bg-black/10'
              onClick={() => setQueue((prev) => !prev)}
            ></i>
          </div>
          <div className='w-full flex px-10 gap-2 mt-8 items-center'>
            <i class='bx bxs-volume text-white text-sm'></i>
            <div className='w-full flex transition-all hover:scale-105'>
              <div
                className={`bg-white/80 w-[10%] h-2 rounded-md rounded-r-none`}
              ></div>

              <div className='bg-white/30 w-[90%] h-2 rounded-md rounded-l-none'></div>
            </div>
            <i class='bx bxs-volume-full text-white text-sm'></i>
          </div>
        </div>
      </div>
    </>
  );
}
