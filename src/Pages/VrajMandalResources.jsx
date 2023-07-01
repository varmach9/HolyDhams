import React from 'react'
import YoutubeEmbed from '../Utils/Youtube'
import { AudioContext } from '../AudioContext'
import { useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import HeadphonesIcon from '@mui/icons-material/Headphones';
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
  
  const [a,sa]=useState(0)
  const [b,sb]=useState(0)
  const [c,sc]=useState(0)
  const [d,sd]=useState(0)
  const [e,se]=useState(0)
  const [f,sf]=useState(0)
  const [g,sg]=useState(0)
    return (
      <div style={{margin:"10%",marginTop:"20%"}} className='lectures'>
        <h3 onClick={()=>{sa(1-a);console.log(a)}}>Govardhan Parikrama {a===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
      <div style={{display:(a===1?"block":"none")}}>
      <div style={{marginTop:"10px"}} >Prayers before Parikrama</div>
        <div><button onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/01.Prayers_to_Begin_Govardhana_Parikrama_IDesireTree.mp3",
           "",""])
          navigate("/audio")
        }}><HeadphonesIcon/></button></div>

      <div style={{marginTop:"30px"}}>Govardhan Parikrama-1 </div>
        <div><button onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/05.Govardhan_Parikrama-01_IDesireTree.mp3","",""])
          navigate("/audio")
        }}><HeadphonesIcon/></button></div>

      <div style={{marginTop:"30px"}}>Govardhan Parikrama-2</div>
        <div><button onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/06.Govardhan_Parikrama-02_IDesireTree.mp3","",""])
          navigate("/audio")
        }}><HeadphonesIcon/></button></div>

      <div style={{marginTop:"30px"}}>Parikrama Completion Prayers</div>
        <div><button onClick={()=>{
          setaudio(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrGQe9nFDATuAfCR8Iu9MoR0TG64Ac2TyVDw_JAAaoNNRWpjridCfRyyN8zSs_shJ-2E&usqp=CAU",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/03.Parikrama_Completion_Prayers_IDesireTree.mp3","",""])
          navigate("/audio")
        }}><HeadphonesIcon/></button></div>

        </div>
        <h3 onClick={()=>{sb(1-b);console.log(b)}}>Govardhan Pastimes {b===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
        <div style={{display:(b===1?"block":"none")}}>
        <div style={{marginTop:"10px"}}>Lifting of Govardhan Hill</div>
        <div><button onClick={()=>{
          setaudio(["govardhan.jpeg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/02.The_Lifting_of_Govardhana_Hill_IDesireTree.mp3","",""])
          navigate("/audio")
        }}><HeadphonesIcon/></button></div>
        <div style={{marginTop:"10px"}}>Lifting of Govardhan Hill</div>
        <div><button onClick={()=>{
          setaudio(["govardhan.jpeg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Giriraj_Swami/Festivals/GRS_Festivals_-_Govardhan_Puja-The_Glories_of_Govardhan_Hill_-_2014-10-24_Houston.mp3","",""])
          navigate("/audio")
        }}><HeadphonesIcon/></button></div>
        </div>
        <div>more coming ...</div>
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
    

