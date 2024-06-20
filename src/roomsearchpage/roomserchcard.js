import React, { useState,useEffect } from 'react';
import "./roomsearchcs.css"
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating'
import {Routes, Route, useNavigate} from 'react-router-dom';
// import startupimage1 from '../asserts/startupimage1.png'
// import startupimage from '../asserts/startupimage1.png'
import Roomshortdetail from './roomshortdetail';
const Roomserchcard = (props) => {
      const navigate = useNavigate();
const openCard=(e)=>{
    console.log(e.currentTarget.dataset);
}
    const navigateHome = () => {
        // 👇️ navigate to Roomdetail
        navigate('/Roomdetail');
      };
    return (
       <>
       <div className="card" >
    {props.data.map(usr=>{
        return (
          <div>
            <div className="space1"></div>
            <Card
              className="maincard"
              onClick={(e) => {
                openCard(e);
                navigateHome();
              }}
              style={{ width: "400px", height: "350px", borderRadius: "60px" }}
            >
              <Card.Body>
                {/* <Card.Img style={{display:"flex",justifyContent:"flex-start"}} variant="left" src="holder.js/100px180" /> */}
                <div
                  className="col"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "400px",
                    height: "100%",
                    borderRadius: "60px",
                  }}
                >
                  <div
                    className="col"
                    style={{ borderRadius: "60px", height: "100%" }}
                  >
                    <Card.Img
                      variant="left"
                      style={{
                        objectFit: "cover",
                        borderRadius: "60px",
                        width: "200px",
                        height: "100%",
                      }}
                      src={usr.images.imageUrl}
                    />
                  </div>
                  <Roomshortdetail data={usr}></Roomshortdetail>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
    })}
        </div>
       </>
    )
}

export default Roomserchcard
