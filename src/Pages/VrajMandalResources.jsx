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
      <div style={{margin:"10%"}} className='lectures'>
        <h2 style={{textAlign:"center"}}> Vraj Mandal </h2>
        <h3 onClick={()=>{sa(1-a)}}>Govardhan Parikrama {a===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
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
        <h3  style={{marginTop:"50px"}} onClick={()=>{sb(1-b)}}>Govardhan Pastimes {b===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
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

        <h3  style={{marginTop:"50px"}} onClick={()=>{sc(1-c)}}>Sri Radha Kund {c===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
        <div style={{display:(c===1?"block":"none")}}>
        <div style={{marginTop:"0px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://upload.wikimedia.org/wikipedia/commons/2/29/Radha_Kund_3.jpg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/03_-_Kunds/05.The_Glories_of_Radha_Kunda_-_Radhanath_Swami_IDesireTree.mp3",
          "Glories of Radha Kund","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Glories of Radha Kund</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://upload.wikimedia.org/wikipedia/commons/2/29/Radha_Kund_3.jpg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/03_-_Kunds/06.Bathing_with_Strong_Faith_-_Radhanath_Swami_IDesireTree.mp3",
          "Bathing with Strong Faith","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Bathing with Strong Faith</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://upload.wikimedia.org/wikipedia/commons/2/29/Radha_Kund_3.jpg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_A_to_C/His_Holiness_Bhakti_Charu_Swami/OLD_LECTURES/Festivals/BCS_Festivals_-_Appearance_of_Sri_Radha_Kunda_-_2018-11-01_ISKCON_Vrindavan.mp3",
          "Appearance of Sri Radha Kund","HH Bhakti Charu Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Appearance of Sri Radha Kund</div>
        
        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://upload.wikimedia.org/wikipedia/commons/2/29/Radha_Kund_3.jpg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_A_to_C/His_Holiness_Bhakti_Charu_Swami/OLD_LECTURES/Various/Vrindavan_Mayapur%20Parikrama/BCS_Various_-_About_Uddhava_Kunda_Govinda_Kunda_and_Radha_Kunda_-_2013-11-08_Vrindavan.mp3",
          "Uddhava Kunda and Govinda Kunda","HH Bhakti Charu Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Kunds of Vrindvan</div>
        </div>



        <h3  style={{marginTop:"40px"}} onClick={()=>{se(1-e)}}>Gokula {e===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
        <div style={{display:(e===1?"block":"none")}}>
        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://storage.ning.com/topology/rest/1.0/file/get/2515727770?profile=RESIZE_1200x&width=1000",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/01_-_Gokul/01.Pastimes_of_Gokula_-_Gokula_Mahavana_IDesireTree.mp3",
          "Gokula Mahavana","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Gokula Mahavana</div>
        
        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://storage.ning.com/topology/rest/1.0/file/get/2515727770?profile=RESIZE_1200x&width=1000",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/01_-_Gokul/02.Lecture_at_Gokula-01_-_Radhanath_Swami_IDesireTree.mp3",
          "Gokula-1","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Gokula-1</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://storage.ning.com/topology/rest/1.0/file/get/2515727770?profile=RESIZE_1200x&width=1000",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/01_-_Gokul/03.Lecture_at_Gokula-02_-_Radhanath_Swami_IDesireTree.mp3",
          "Gokula-2","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Gokula-2</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://storage.ning.com/topology/rest/1.0/file/get/2515727770?profile=RESIZE_1200x&width=1000",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/01_-_Gokul/04.Lecture_at_Gokula-03_-_Radhanath_Swami_IDesireTree.mp3",
          "Gokula-3","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Gokula-3</div>

        </div>


        <h3  style={{marginTop:"40px"}} onClick={()=>{sd(1-d)}}>Sarovars{d===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
        <div style={{display:(d===1?"block":"none")}}>
        <div style={{marginTop:"0px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          navigate("/ks")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Glories of Kusum Sarovar</div>
        
        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://static.wixstatic.com/media/6114cd_15a0247562bf4a939b514f207652a5c7~mv2.png/v1/fill/w_900,h_630,al_c/6114cd_15a0247562bf4a939b514f207652a5c7~mv2.png",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Indradyumna_Swami/Lecture_with_Russian_Translation/Various/IDS_Various_Russian_Translation_-_The_Glories_of_Chandra_Sarovara_-_2018-11-01_Vrindavan.mp3",
          "Candra Sarovar","HH Indradyumna Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Candra Sarovar</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/5b2b68e09f7ab760360f9cb3.jpeg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Indradyumna_Swami/Parikrama/IDS_Parikrama_-_Pastimes_at_Prem_Sarovar_-_2008-10-27_Vrindavan.mp3",
          "Prem Sarovar","HH Indradyumna Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Prem Sarovar</div>

        <div style={{marginTop:"10px",display:"flex", border:"0.25px solid", padding:"5px", background:"linear-gradient(90deg, rgba(7,36,0,1) 0%, rgba(7,60,155,1) 0%, rgba(39,121,9,1) 0%, rgba(0,255,171,1) 100%)"}} onClick={()=>{
          setaudio(["https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0118-1.jpg",
          "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/02_-_Yatra/2002_Vrindavan_yatra/Vrindavan_Yatra_2002_39_-_Lecture_at_Pawan_Sarovar_-_Radhanath_Swami.mp3",
          "Paavan Sarovar","HH Radhanath Swami"])
           navigate("/audio")
        }}><PlayArrowIcon style={{marginRight:"10px"}}/>Paavan Sarovar</div>

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
    

