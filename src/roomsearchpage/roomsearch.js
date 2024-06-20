import React, { useState,useEffect } from 'react';
import "./roomsearchcs.css"
import Roomsearchheader from './roomsearchheader';
import roomsearchapi from '../routerapi/roomsearchapi';
import Roomserchcard from './roomserchcard';
import env from "react-dotenv";
const Roomsearch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const  fetchAPI=async()=>{
            const response= await roomsearchapi();
            setData(response.responseData);
            console.log(response);
        }
        fetchAPI();
    }, []);
    // window.env.RoomCollectionArray(setData);
    return (
      <div className="parent" style={{ backgroundColor: "rgb(41, 86, 128)" }}>
        <Roomsearchheader></Roomsearchheader>
        <div style={{ height: "100px" }}></div>
        <Roomserchcard data={data}></Roomserchcard>
      </div>
    );
}

export default Roomsearch
