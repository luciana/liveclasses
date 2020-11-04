import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Header , Footer } from "../../Component" 

const useStyle = makeStyles( theme => ({
  root: {
    margin: "0",
    padding: "0"
  },
  header: {
    top: '0',
    position: "sticky"
  }
}))

export default function HomePage() {
  const styles = useStyle()
  return (
      <div className={styles.root}>
        <Header className={styles.header} />
        <Footer/>
      </div>
  );
}
