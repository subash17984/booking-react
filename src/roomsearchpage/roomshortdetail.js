import React, { useState,useEffect } from 'react';
import { Rating } from 'react-simple-star-rating'
import "./roomsearchcs.css"
const Roomshortdetail = (props) => {
    const [rating, setRating] = useState(3)
    const handleRating = (rate) => {
        setRating(rate)
      }
     
    return (
      <>
        <div className="col">
          <div
            className="row"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            {" "}
            {props.data.propertyName}
          </div>
          <div
            className="row"
            style={{
              display: "block",
              fontWeight: "lighter",
              marginBottom: "30px",
            }}
          >
            {" "}
            {props.data.description}
          </div>
          {/* <div className='row' style={{display:'block',fontWeight:'bold',marginBottom:"50px",wordWrap:'break-word'}}> {usr.description}</div> */}
          <Rating
            style={{ marginBottom: "50px" }}
            onClick={handleRating}
            initialValue={rating}
          />
          <div
            className="row"
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "30px",
              color: "green",
              marginBottom: "30px",
            }}
          >
            {" "}
            ${props.data.pricePerDay}
            <h3>per day</h3>
          </div>
        </div>
      </>
    );
}

export default Roomshortdetail
