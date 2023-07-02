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
  
    const showSpeaker=async()=>{
        document.getElementById("speaker").style.display="block"
        document.getElementById("source").style.display="block"
        await sleep(1500)
        document.getElementById("speaker").style.display="none"
        document.getElementById("source").style.display="none"
    }
  return (
    <div style={{marginLeft:"10%",marginRight:"10%",marginTop:"60px"}}>
    {audio[2].length<29?<h2>{audio[2]}</h2>:<h3>{audio[2]}</h3>}
    <img src={audio[0]} alt="" width="100%" height="100%"></img>
    <div className="audio-player" style={{marginTop:"10px"}}>
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
        <button onClick={showSpeaker} style={{backgroundColor:"green"}}><InfoIcon/></button>
        <button onClick={skipForward}><FastForwardIcon/></button>
      </div>
    </div>
    <div id="speaker" style={{display:"none",marginTop:"20px",color:"green"}}>Speaker: {audio[3]}</div>
    <div id="source" style={{display:"none",color:"green"}}>Source: ISKCON Desire Tree Audio</div>
    </div>
  )
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default Audiopage