import React from 'react'
import YoutubeEmbed from '../Utils/Youtube'
export const Videos = () => {
  return (
    <div style={{margin:"10%"}}>
      <div>Videos</div>
      <div className="" style={{marginLeft:"0px",width:"300px",marginTop:'30px'}}><YoutubeEmbed embedId="XHoocWGgap0" title="Varindavan Parikrama" /></div>
      <div className="" style={{marginLeft:"0px",width:"300px",marginTop:'30px'}}><YoutubeEmbed embedId="NeBDbtvyL0I" title="Glories of Govardhan" /></div>
      <div className="" style={{marginLeft:"0px",width:"300px",marginTop:'30px'}}><YoutubeEmbed embedId="0L9HNNAYDj4" title="Varsana" /></div>
    </div>
  )
}
export const Lectures = () => {
    return (
      <div style={{margin:"10%"}}>
        <h1>Lectures on Vrindavan</h1>
        <div style={{marginTop:"30px"}}>Prayers before Govardhan Parikrama</div>
        <audio controls>
          <source src="https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/01.Prayers_to_Begin_Govardhana_Parikrama_IDesireTree.mp3" type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
        <div style={{marginTop:"30px"}}>Lifting of Govardhan Hill</div>
        <audio controls>
          <source src="https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_R_to_Y/His_Holiness_Radhanath_Swami/Lectures/01_-_Theme_wise/Dhaams/04_-_Various_places_in_Vrindavana/02%20-%20Govardhan%20Parikrama/02.The_Lifting_of_Govardhana_Hill_IDesireTree.mp3" type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
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
    

