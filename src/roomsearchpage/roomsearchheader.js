import React, { useState,useEffect } from 'react';
import "./roomsearchcs.css"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { House } from 'react-bootstrap-icons';
import userIcon from "../asserts/userIcon.png"
const Roomsearchheader = () => {
    return (
      <>
        <div className="row" style={{ width: "100vw", height: "100px" }}>
          <div className="row">
            <div className="col" style={{ marginTop: "20px", float: "left" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon style={{ fontSize: "40px", color: "white" }} />
              </IconButton>
            </div>
            <div
              className="col"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div
                className="col"
                style={{ marginTop: "40px", float: "right" }}
              >
                <House color="royalblue" size={40} style={{ color: "white" }} />
              </div>
              <div
                className="col"
                style={{ marginTop: "40px", float: "right", color: "white" }}
              >
                <h1>ROOMZY</h1>
              </div>
            </div>
            <div className="col">
              <img
                src={userIcon}
                alt="user"
                style={{
                  marginTop: "30px",
                  width: "50px",
                  height: "50px",
                  float: "right",
                  backgroundColor: "white",
                  borderRadius: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Roomsearchheader
