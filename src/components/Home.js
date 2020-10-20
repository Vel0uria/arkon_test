import React, {
  useState
} from "react";
import {
  Button,
  Box,
} from "@material-ui/core";
import useStyles from "../index.styles";
import AlbumIcon from "@material-ui/icons/Album";
import Brightness7TwoToneIcon from '@material-ui/icons/Brightness7TwoTone';
import Brightness4TwoToneIcon from '@material-ui/icons/Brightness4TwoTone';
import BrightnessMediumTwoToneIcon from '@material-ui/icons/BrightnessMediumTwoTone';
//import SubwayTwoToneIcon from '@material-ui/icons/SubwayTwoTone';
import Brightness2TwoToneIcon from '@material-ui/icons/Brightness2TwoTone';
import Brightness1TwoToneIcon from '@material-ui/icons/Brightness1TwoTone';
import AcUnitIcon from '@material-ui/icons/AcUnit';
function Home() {
  const classes = useStyles();

  const [show, showForm] = useState(false);
  const [showw, showwForm] = useState(false);
  const [showww, showwwForm] = useState(false);
  const [showwww, showwwwForm] = useState(false);
  const [showwwww, showwwwwForm] = useState(false);
  const [showwwwww, showwwwwwForm] = useState(false);
  const [showwwwwww, showwwwwwwForm] = useState(false);
  return ( 
    <Box className = {classes.root}>
      <h1 > Productivity App </h1> 
      <Button onClick = {
        () => showForm(!show)
      } > Quién eres
       </Button> 
      {show &&
          <Box component = "form" className = {classes.textField} >
          < h2 > Soy lo que llamas el mundo. </h2> 
          <Button onClick = {
            () => showwForm(!showw)
          } >
            <Brightness7TwoToneIcon fontSize="large"/>
          </Button> 
          {showw &&
              <>
              <h3 > O quizás el universo </h3> 
              <Button onClick = {
                () => showwwForm(!showww)}>
              <Brightness4TwoToneIcon fontSize="large"/>
              </Button> </>} 
              {showww &&
                  <>
                  < h4 > O quizá Dios </h4> 
                  < Button onClick = {
                    () => showwwwForm(!showwww)
                  } >
                  <Brightness2TwoToneIcon />
                  </Button> 
                  </>} 
                  {  showwww &&
                  <>
                  <h5 > O quizá la Verdad </h5> 
                  <Button onClick = {
                    () => showwwwwForm(!showwwwww)
                  } >
                  <BrightnessMediumTwoToneIcon fontSize="medium"/>
                  </Button> 
                  </>
              } 
              {showwwww &&
                  <>
                  <h6> O quizás Todo </h6> 
                  <Button onClick = {
                    () => showwwwwwForm(!showwwwwww)
                  } >
                  < Brightness1TwoToneIcon/>
                  </Button> </> } 
                  {  showwwwww &&
                  <>
                  <p className={classes.uno}>
                  O quizás Uno</p>
                   <Button onClick = {
                    () => showwwwwwwForm(!showwwwwww)
                  } >
                  < AlbumIcon fontSize="small"/>
                  </Button>
             </>} 
                  </Box>}
                           {showwwwwww &&
                           <Box>
                  <p style={{color:"#f50e65", fontSize:"xx-large", fontFamily:"Cinzel Decorative"}}>
              Y TAMBIÉN SOY TÚ</p>
                </Box>
 }   
            </Box>
          );
      }

      export default Home;