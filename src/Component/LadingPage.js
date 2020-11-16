import React from 'react';
import { makeStyles } from '@material-ui/styles'
import {Button} from "@material-ui/core"

const Style = makeStyles(theme => ({
  root:{
    width: "100vw",
  },
  row1:{
    width: "100vw",
    height: "40vh",
    overflow: "auto",
    backgroundColor: "#01e676",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& .insideDiv":{
      marginTop: "2vh",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "& .LargeText":{
      fontSize: "5em",
      fontWeight: "100",
      lineHeigth: "1",
    },
    "& .description":{
      fontSize: "1.25em",
      fontWeight: "100",
      lineHeigth: "1",
      marginTop: "1vh",
    },
    "& .lead":{
      fontSize: "1.25em",
      fontWeight: "100",
      lineHeigth: "1",
      marginTop: "3vh",
      "& a":{
        textDecoration: "none"
      }
    },
    "& .signUp":{
      marginTop: "4vh",
      fontSize: "3em"
    },
    "& .MuiButton-root":{
      fontSize: "0.85em",
      marginTop: "2vh",
      backgroundColor: "white",
      color: "black"
    }
  },
  Row2:{

  }
}))

function LadingPage() {
  const StylesObj = Style()
  return (
      <>
        <div className={StylesObj.root}>
          <div className={StylesObj.row1}>
            <div className="insideDiv">
              <div className="LargeText">
                Live Pilates Class
              </div>
              <div className="description">
                Join a group of Pilates enthusiasts for a LIVE Pilates class
              </div>
              <div className="lead">
                with one of our great teachers via <a href="https://zoom.us/">Zoom</a>.
              </div>
              <div className="signUp">
                Sign up for classes today!
              </div>
              <Button> View class schedule</Button>
            </div>
          </div>
          <div className={StylesObj.row2}>

          </div>
          <div className="row3">

          </div>
        </div>
      </>
  );
}

export default LadingPage;