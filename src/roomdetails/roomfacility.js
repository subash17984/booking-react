import { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { AiOutlineMore,AiOutlineArrowLeft,AiOutlineHeart} from "react-icons/ai";
import { BsFillBuildingFill,BsFillBookmarkHeartFill,BsFillStarFill } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import Roommoredetails from "./roommoredetails";

const Roomfacility = () => {
    const [show, setShow] = useState(false);
    function toggleShow() {
        setShow(!show);
      }
    return (
        <>
<Roommoredetails show={show}></Roommoredetails>
        <div className='row' style={{height:"50px",paddingTop:'50px',marginBottom:'30px',}}>
        <div className='col' style={{display:'flex',justifyContent:'flex-start'}}>
        <FaWifi className='col' size={35} style={{backgroundColor:'lightsteelblue',color:'blueviolet',marginTop:'20px',marginLeft:'30px'}} />
        <FaBowlFood className='col' size={35} style={{backgroundColor:'lightsteelblue',color:'blueviolet',marginTop:'20px',marginLeft:'30px'}} />
        <CgGym  className='col'size={35} style={{backgroundColor:'lightsteelblue',color:'blueviolet',marginTop:'20px',marginLeft:'30px'}} />
        <BsFillStarFill className='col' size={35} style={{backgroundColor:'lightsteelblue',color:'blueviolet',marginTop:'20px',marginLeft:'30px'}} />
        <AiOutlineMore  onClick={()=>toggleShow()} className='col'size={35} style={{borderRadius:'80px',backgroundColor:'lightsteelblue',color:'blueviolet',marginTop:'20px',marginLeft:'30px'}} />
        </div>
        
    </div>
        </>
    )
}

export default Roomfacility
