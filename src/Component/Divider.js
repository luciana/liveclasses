import { makeStyles } from '@material-ui/styles';
import React from 'react';
import iconDivider from "../Assets/Images/gray_divider_icon.png"


// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
    divider:{
        display: 'block',
        width: "100%",
        textAlign: "center",
        color: "#666666",
        textTransform: "uppercase",
        padding: "0 5px",
        margin: "0",
        position: "relative",
        "&::before":{
          content: '""',
          borderBottom: "1px solid #c9c9c9",
          heigth: "0%",
          width: "44%",
          position: "absolute",
          left: "0",
          top: "7px"
        },
        "&::after":{
          content: '""',
          borderBottom: "1px solid #c9c9c9",
          heigth: "0",
          width: "42%",
          position: "absolute",
          right: "0",
          top: "10px"
        },
        "& img":{
          verticalAlign: "middle",
          borderStyle: "none"
        }
      }, 
}))

function Divider() { 
    const Styles = useStyles()
  
    return (
        <div className={Styles.divider}>
            <img src={iconDivider} alt="icon-divider"/>
        </div>
    );
}

export default Divider;