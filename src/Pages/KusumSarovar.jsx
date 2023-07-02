import React from 'react'
import { AudioContext } from '../AudioContext'
import { useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const KusumSarovar = () => {
    const [c,sc]=useState(1)
    const {audio,setaudio} = useContext(AudioContext)
    const navigate = useNavigate();
  return (
    <div style={{margin:"10%"}}>
        <h3  style={{marginTop:"50px"}} onClick={()=>{sc(1-c)}}>Kusum Sarovar {c===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
        <div style={{display:(c===1?"block":"none")}}>
        <div style={{marginTop:"0px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela-Krishna%27s_queens_at_Kusumsaovar_08_-_2016-03-31.mp3",
          "Krishna's queens at Kusumsaovar","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Krishna's queens at Kusumsaovar</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela-Narada_Story_06_-_2016-03-31.mp3",
          "Narada Story","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Narada Story</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela-Why_Uddhava_came_to_Kusumsarovar_07_-_2016-03-31.mp3",
          "Uddhava Story","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Uddhava Story</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela_01_-_2016-03-05.mp3",
          "Kusum Sarovar leela-1","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Kusum Sarovar leela-1</div>

<div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela_02_-_2016-03-05.mp3",
          "Kusum Sarovar leela-2","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Kusum Sarovar leela-2</div>

<div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela_03_-_2016-03-05.mp3",
          "Kusum Sarovar leela-3","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Kusum Sarovar leela-3</div>

<div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela_04_-_2016-03-05.mp3",
          "Kusum Sarovar leela-4","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Kusum Sarovar leela-4</div>

<div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4c/79/ec/architectural-beauty.jpg?w=1200&h=1200&s=1",
          "https://audio.iskcondesiretree.com/03_-_ISKCON_Prabhujis/ISKCON_Prabhujis_-_S_to_Y/His_Grace_Vishwarup_Prabhu_%28RNS%29/English_Lectures/Kusum_Sarovar_Leela/Vishwarup_Pr_-_Kusumsarovar_Leela_05_-_2016-03-05.mp3",
          "Kusum Sarovar leela-5","HG Vishwarup Prabhu"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Kusum Sarovar leela-5</div>



        </div>
    </div>
  )
}

export default KusumSarovar