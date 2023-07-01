import React from 'react'
import YoutubeEmbed from '../Utils/Youtube'
import { AudioContext } from '../AudioContext'
import { useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export const Videos = () => {
  return (
    <div style={{margin:"10%",marginTop:"20%"}}>
      {/* <div>Videos</div> */}
      <div className="" style={{marginLeft:"0px",width:"300px",marginTop:'30px'}}><YoutubeEmbed embedId="XHoocWGgap0" title="Varindavan Parikrama" /></div>
      <div className="" style={{marginLeft:"0px",width:"300px",marginTop:'30px'}}><YoutubeEmbed embedId="NeBDbtvyL0I" title="Glories of Govardhan" /></div>
      <div className="" style={{marginLeft:"0px",width:"300px",marginTop:'30px'}}><YoutubeEmbed embedId="0L9HNNAYDj4" title="Varsana" /></div>
    </div>
  )
}
export const Lectures = () => {
  const {audio,setaudio} = useContext(AudioContext)
  const navigate = useNavigate();
  
  const [a,sa]=useState(1)
  const [b,sb]=useState(1)
  const [c,sc]=useState(1)
  const [d,sd]=useState(1)
  const [e,se]=useState(1)
  const [f,sf]=useState(1)
  const [g,sg]=useState(1)
    return (
      <div style={{margin:"10%",marginTop:"20%"}} className='lectures'>
        <h3 onClick={()=>{sa(1-a);console.log(a)}}>Govardhan Parikrama {a===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
      <div style={{display:(a===1?"block":"none")}}>
      <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/01.Prayers_to_Begin_Govardhana_Parikrama_IDesireTree.mp3",
           "Prayers before Parikrama","HH Radhanath Swami"])
          navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Prayers before Parikrama</div>

      <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}}
         onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/05.Govardhan_Parikrama-01_IDesireTree.mp3",
          "Govardhan Parikrama-1","HH Radhanath Swami"])
          navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Govardhan Parikrama-1</div>

      <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/06.Govardhan_Parikrama-02_IDesireTree.mp3",
          "Govardhan Parikrama-2","HH Radhanath Swami"])
          navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Govardhan Parikrama-2</div>

      <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/03.Parikrama_Completion_Prayers_IDesireTree.mp3",
          "Parikrama Completion Prayers","HH Radhanath Swami"])
          navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Parikrama Completion Prayers</div>

        </div>
        <h3  style={{marginTop:"50px"}} onClick={()=>{sb(1-b);console.log(b)}}>Govardhan Pastimes {b===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
        <div style={{display:(b===1?"block":"none")}}>
        <div style={{marginTop:"0px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["govardhan.jpeg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/02.The_Lifting_of_Govardhana_Hill_IDesireTree.mp3",
          "Lifting of Govardhan Hill","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Lifting of Govardhan Hill</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["govardhan.jpeg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Giriraj_Swami/Festivals/GRS_Festivals_-_Govardhan_Puja-The_Glories_of_Govardhan_Hill_-_2014-10-24_Houston.mp3",
          "Glories of Govardhan","HH Giriraj Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Glories of Govardhan</div>
        
        
        </div>


        
      </div>
    )
  }
  
export const More = () => {
    return (
      <div style={{margin:'0%'}}>
        <div>Lotus of Vraj</div>
        <img src="lotusofvraj.png" alt="" width="100%"></img>
      </div>
    )
  }
  export const Photos = () => {
    return (
      <div>
        <div>Photos</div>
        
      </div>
    )
  }
    

