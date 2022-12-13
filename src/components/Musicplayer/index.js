import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import Form from './Form';
import Player from './Player';
const ENDPOINT = 'http://127.0.0.1:5000';

function Musicplayer() {
  // const [response, setResponse] = useState('');
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   // socket.on('FromAPI', (data) => {
  //   //   setResponse(data);
  //   // });

  //   // CLEAN UP THE EFFECT
  //   return () => socket.disconnect();
  //   //
  // }, []);

  return (
    <div className='relative grid place-items-center w-full'>
      {/* <div className='bg-white/40 my-2 rounded-md w-full backdrop-blur-lg p-2 fixed top-0 left-0 right-0'>
        <h1 className='text-center border text-4xl bg-indigo-500 rounded m-2 text-white p-2'>
          JorDan's Music
        </h1>
      </div> */}
      {/* <Form /> */}
      <Player />
    </div>
  );
}

export default Musicplayer;
