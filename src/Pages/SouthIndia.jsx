import { useNavigate } from "react-router-dom";

const SouthIndia = () => {
    
  const navigate = useNavigate();
  return (
    <div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"70px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #994428), url(https://blessingsonthenet.com/img/uploads//aim_bn_1598536999.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#994428"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Tirupati</div>
      </div>
        <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #b38c45), url(https://1.bp.blogspot.com/-N-aid7EKeqA/TVOIL77xwvI/AAAAAAAADwc/hqG-hbrc6G8/s400/Sri+Ranganathar+Swamy+Temple+Festivals+Srirangam.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#b38c45"}}>
        <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Sri Rangam</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #2b1962), url(https://www.holydham.com/wp-content/uploads/2022/03/athi-varathar-standing-posture.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#2b1962"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Kanchipuram</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #616861), url(https://www.holydham.com/wp-content/uploads/2012/04/What-to-see-in-Pandharpur.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#616861"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Pandharpur</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #cdd9e1), url(http://holydham.com/wp-content/uploads/2015/08/Rameshwaram-holydham.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#cdd9e1"}}>
        <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Rameshwaram</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #739bcf), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RDzlNj4UdW-855FwsktwJCic9ylqoHQ2Mw&usqp=CAU)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#739bcf"}}>
        <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Ahobilam</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #846748), url(https://www.holydham.com/wp-content/uploads/2013/05/melukote.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#846748"}}>
        <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Melukote</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #db9a54), url(https://im.hunt.in/cg/kar/Udupi/City-Guide/krishna-mutt-udupi1.jpg)`,backgroundSize: '90% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#db9a54"}}>
        <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Udipi</div>
      </div>
    </div>
  )
}

export default SouthIndia