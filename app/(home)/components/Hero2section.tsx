import React from 'react';
import Link from 'next/link'
import videoBg from '../assets/videos/purple_moves.mp4';
import './h2.css';

function Main () {
  return (
    <div className='main'>
      <div className="overlay">
        
      </div>
      <video  src={videoBg} autoPlay loop muted id="videoBg"></video>
        <div className='content'>
          <h1>This is my HERO jargon </h1>
          <p>Welcome to here </p>

          </div>
    </div>
  )
}
export default Main;