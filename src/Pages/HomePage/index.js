import React from 'react';
import {
  useLocation,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Header , Footer, Divider , LadingPage, NLPage } from "../../Component" 

const useStyle = makeStyles( theme => ({
  root: {
    margin: "0",
    padding: "0"
  },
  header: {
    top: '0',
    position: "sticky"
  },
  content:{
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
  },
  bottomPos:{
    position: "absolute",
    bottom: "0px",
    width: "99%",
    height: "20vh",
  },
  footer:{
    marginTop: "8vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
  }
}))

export default function HomePage() {
  const styles = useStyle()
  const location = useLocation()
  return (
      <div className={styles.root}>
        <Header className={styles.header} />
        <div className={styles.content}> 
          {location.pathname == '/' && (
            <LadingPage/>
          )}
          {location.pathname == '/not' && (
            <NLPage/>
          )}
        </div>
        <div className={styles.bottomPos}>
          <Divider/>
          <div className={styles.footer} >
            <Footer />
          </div>  
        </div>
      </div>
  );
}
