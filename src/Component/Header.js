import React from 'react';

import { Button } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Logo from '../Assets/Images/logo.png'

const useStyle = makeStyles( theme => ({
  root: {
    margin: "0",
    padding: "0 2vw",
    width: "96vw",
    height: "10vh",
    backgroundColor: "#343a40",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& img": {
      width: "15vw",
      height: "5vh"

    },
    "& .MuiButton-root":{
      fontSize: "0.9em",
      fontWeight: "lighter",
      textDecoration: "none",
      marginLeft: "1vw",
    }
  },
  buttonNoBack:{
    color: "white",
  },
  buttonWhitBack:{
    backgroundColor: "#f8f9fa"
  }
}))

export default function Header() {
  const Styles = useStyle()
  return (
    <div className={Styles.root}>
        <img alt="Logotype" src={Logo}/>    
        <div>
          <Button className={Styles.buttonNoBack} >Pricing</Button>
          <Button className={Styles.buttonNoBack} >Instructors</Button>
          <Button className={Styles.buttonWhitBack} >Sign In</Button>
        </div>
    </div>
  );
}

