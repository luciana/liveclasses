import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import bottomYellowIcon from "../Assets/Images/BottomYellowIcon.png"



const useStyle = makeStyles( tema => ({
  root:{
    bottom: "0",
  },
  RealBottom:{
    height: "5vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "50vw"
  },
  Social: {
    display: "flex",
    flexDirection: "row",
    "& i":{
      color: "#e7a614",
      minWidth: "3vw"
    }
  }
}))

export default function Footer() {
  const Styles = useStyle()
  return (
    <>
        <div className={Styles.root}>
          <div className={Styles.RealBottom}>
            <img src={bottomYellowIcon} alt="bottom yellow icon"/>
            <span>©2014 A Lot Of Pilates All Rights Reserved Terms of Use and Privacy Policy</span>
            <div className={Styles.Social}>
              <i className="fab fa-twitter-square fa-3x"></i>
              <i className="fab fa-facebook-square fa-3x"></i>
              <i className="fab fa-youtube-square fa-3x"></i>
            </div>
          </div> 
        </div>      
    </>
  );
}

