import { useState } from "react";
import { BsFillBuildingFill,BsFillBookmarkHeartFill,BsFillStarFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Roomfacility from "./roomfacility";
import Roomavailability from "../roomavailability/roomavailability";
const Roomcardcontent = () => {
  const [Booking, setbooking] = useState(false);
  function bookingShow() {
    setbooking(!Booking);
  }
  return (
    <>
      {Booking ? (
        <Roomavailability booking={Booking}></Roomavailability>
      ) : (
        <></>
      )}
      <div className="row">
        <div className="row" style={{ height: "50px", paddingTop: "50px" }}>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "10px",
            }}
          >
            <BsFillBuildingFill size={30} style={{ color: "orange" }} />
            <h3 style={{ color: "orange", paddingLeft: "10px" }}>
              {" "}
              Recommended Rooms
            </h3>
          </div>
        </div>
        <div className="row" style={{ height: "50px", paddingTop: "50px" }}>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "10px",
            }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "35px" }}>
              Sekartaji Rooms
            </h1>
            <BsFillBookmarkHeartFill
              size={35}
              style={{ color: "green", marginTop: "20px", marginLeft: "30px" }}
            />
          </div>
        </div>
        <div className="row" style={{ height: "50px", paddingTop: "50px" }}>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "10px",
            }}
          >
            <BsFillStarFill
              size={35}
              style={{
                outlineStyle: "dotted",
                color: "green",
                marginTop: "20px",
                marginLeft: "30px",
              }}
            />
            <h1
              style={{
                fontWeight: "lighter",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            >
              4.6 | 123 Reviews
            </h1>
          </div>
        </div>
        <div
          className="row"
          style={{ height: "50px", paddingTop: "50px", marginBottom: "30px" }}
        >
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "10px",
            }}
          >
            <h1
              style={{
                fontWeight: "lighter",
                marginTop: "20px",
                marginLeft: "10px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              This impressive paella is a perfect .if you like.
            </h1>
          </div>
        </div>

        <Roomfacility></Roomfacility>
        <div
          className="row"
          style={{
            height: "50px",
            paddingTop: "40px",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "5px",
            }}
          >
            <h1
              className="col"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              Wifi
            </h1>
            <h1
              className="col"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              Food
            </h1>
            <h1
              className="col"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              Gym
            </h1>
            <h1
              className="col"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              Heater
            </h1>
            <h1
              className="col"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              More
            </h1>
          </div>
        </div>
        <div
          className="row"
          style={{
            height: "50px",
            paddingTop: "40px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              bookingShow();
            }}
            style={{
              borderRadius: "50px",
              width: "300px",
              height: "70px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
            variant="success"
          >
            <h1>Book for $123 Now</h1>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Roomcardcontent
