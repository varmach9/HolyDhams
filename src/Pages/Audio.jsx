import React from 'react'
import "../App.css"
import { useState,useContext } from 'react';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import InfoIcon from '@mui/icons-material/Info';
import { AudioContext } from '../AudioContext';
const Audiopage = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const {audio}=useContext(AudioContext)
    // console.log(audio)
    const audioRef = React.useRef(null);
  
    const skipBackward = () => {
      const newTime = currentTime - 30;
      if (newTime >= 0) {
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
      }
    };
  
    const skipForward = () => {
      const newTime = currentTime + 30;
      if (newTime <= audioRef.current.duration) {
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
      }
    };
  

  return (
    <div style={{marginLeft:"10%",marginRight:"10%",marginTop:"80px"}}>
    <img src={audio[0]} alt="" width="100%" height="100%"></img>
    <div className="audio-player" style={{marginTop:"30px"}}>
      <audio
        ref={audioRef}
        controls
        src={audio[1]}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
      >
        Your Device does not support the audio element.
      </audio>
      <div className="controls">
        <button onClick={skipBackward}><FastRewindIcon/></button>
        <button style={{backgroundColor:"green"}}><InfoIcon/></button>
        <button onClick={skipForward}><FastForwardIcon/></button>
      </div>
    </div>

    </div>
  )
}


export default Audiopage