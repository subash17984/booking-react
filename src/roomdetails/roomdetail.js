
import Card from 'react-bootstrap/Card';
import './roomdetailcs.css'

import { BsFillBuildingFill,BsFillBookmarkHeartFill,BsFillStarFill } from "react-icons/bs";
import { AiOutlineMore,AiOutlineArrowLeft,AiOutlineHeart} from "react-icons/ai";

import {Routes, Route, useNavigate} from 'react-router-dom';
import Roomavailability from "../roomavailability/roomavailability";
import Roomimage from "./roomimage";
import Roomfacility from "./roomfacility";
import Roomcardcontent from "./roomcardcontent";
const Roomdetail = () => {
   
      const navigate = useNavigate();
      const navigateHome = () => {
        // 👇️ navigate to Roomdetail
        navigate('/roomsearch');
      };
    return (
      <div className="parent">
        <div
          className="col"
          style={{ width: "100vw", height: "20px", flex: "0.1" }}
        >
          <div className="row" style={{ float: "left" }}>
            <AiOutlineArrowLeft
              size={40}
              onClick={() => navigateHome()}
            ></AiOutlineArrowLeft>
          </div>
          <div className="row" style={{ float: "right" }}>
            <AiOutlineHeart
              size={40}
              onClick={() => navigateHome()}
            ></AiOutlineHeart>
          </div>
        </div>

        <div
          className="col"
          style={{
            width: "100%",
            height: "350px",
            marginTop: "-60px",
            zIndex: "-1",
          }}
        >
          <Roomimage></Roomimage>
        </div>
        <Card
          className="col"
          style={{
            overflowY: "scroll",
            marginTop: "-200px",
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "70px",
            borderTopRightRadius: "70px",
          }}
        >
          <Roomcardcontent></Roomcardcontent>
        </Card>
      </div>
    );
}
export default Roomdetail;