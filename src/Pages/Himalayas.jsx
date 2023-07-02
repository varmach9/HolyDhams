import { useNavigate } from "react-router-dom";

const Himalayas=()=>{
    
    const navigate = useNavigate();
    return (
      <div>
          <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"100px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #b38c45), url(https://1.bp.blogspot.com/-N-aid7EKeqA/TVOIL77xwvI/AAAAAAAADwc/hqG-hbrc6G8/s400/Sri+Ranganathar+Swamy+Temple+Festivals+Srirangam.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#b38c45"}}>
          <div onClick={()=>{navigate("/vraj")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Badrinath</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #2b1962), url(https://www.holydham.com/wp-content/uploads/2022/03/athi-varathar-standing-posture.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#2b1962"}}>
          <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Gangotri</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #616861), url(https://www.holydham.com/wp-content/uploads/2012/04/What-to-see-in-Pandharpur.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#616861"}}>
          <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Haridwar</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #cdd9e1), url(http://holydham.com/wp-content/uploads/2015/08/Rameshwaram-holydham.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#cdd9e1"}}>
          <div  style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Kedarnath</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #739bcf), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RDzlNj4UdW-855FwsktwJCic9ylqoHQ2Mw&usqp=CAU)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#739bcf"}}>
          <div  style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Rishikesh</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #846748), url(https://www.holydham.com/wp-content/uploads/2013/05/melukote.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#846748"}}>
          <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Yamunotri</div>
        </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #db9a54), url(https://www.holydham.com/wp-content/uploads/2013/05/Udupi.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#db9a54"}}>
          <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Shukratal</div>
        </div>
      </div>
    )
  }
  
  export default Himalayas