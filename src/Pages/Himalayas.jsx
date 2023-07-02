import { useNavigate } from "react-router-dom";

const Himalayas=()=>{
    
    const navigate = useNavigate();
    return (
      <div>
          <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"100px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #0e826a), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LczIAAU0jWwCdcoKRmd9nbqaL4M0GWc_oQ&usqp=CAU)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#0e826a"}}>
          <div onClick={()=>{navigate("/vraj")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Badrinath</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #3e5151), url(https://registrationandtouristcare.uk.gov.in/images/gangotri/gangotri.jpg)`,backgroundSize: '90% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#3e5151"}}>
          <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Gangotri</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #519cb9), url(https://images.livemint.com/img/2023/03/18/1140x641/iStock-458237899_1679157218168_1679157248305_1679157248305.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#519cb9"}}>
          <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Haridwar</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #29353f), url(https://www.jagranimages.com/images/newimg/22072022/22_07_2022-kedarnathyatra_22915650.webp)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#29353f"}}>
          <div  style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Kedarnath</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #293527), url(https://www.makemytrip.com/travel-guide/media/dg_image/rishikesh/Tryambakeshvar-Temple.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#293527"}}>
          <div  style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Rishikesh</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #75725a), url(https://www.chardham-tours.com/wp-content/uploads/2018/03/yamnotri-opening-dates.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#75725a"}}>
          <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Yamunotri</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #715238), url(https://qph.cf2.quoracdn.net/main-qimg-673619cc536fe003f22c3009b63bbe79-lq)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#715238"}}>
          <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Shukratal</div>
        </div>
      </div>
    )
  }
  
  export default Himalayas