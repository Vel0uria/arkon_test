/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";
import loop from "../assets/elBueno.gif";
import useStyles from "../index.styles";
import RadioButtonCheckedTwoToneIcon from "@material-ui/icons/RadioButtonCheckedTwoTone";
import Brightness7TwoToneIcon from "@material-ui/icons/Brightness7TwoTone";
import Brightness4TwoToneIcon from "@material-ui/icons/Brightness4TwoTone";
import BrightnessMediumTwoToneIcon from "@material-ui/icons/BrightnessMediumTwoTone";
import Brightness2TwoToneIcon from "@material-ui/icons/Brightness2TwoTone";
import Brightness1TwoToneIcon from "@material-ui/icons/Brightness1TwoTone";
function Hall() {
  const classes = useStyles();
  const [show, showForm] = useState(false);
  const [showw, showwForm] = useState(false);
  const [showww, showwwForm] = useState(false);
  const [showwww, showwwwForm] = useState(false);
  const [showwwww, showwwwwForm] = useState(false);
  const [showwwwww, showwwwwwForm] = useState(false);
  const [showwwwwww, showwwwwwwForm] = useState(false);
  return (
    <Box className={classes.root}>
      <Button onClick={() => showForm(!show)}>
        <h1>Quién eres</h1>
      </Button>
      {show &&
        <Box component="form" className={classes.textField}>
          <h2> Soy lo que llamas el mundo. </h2>
          <Button onClick={() => showwForm(!showw)}>
            <Brightness7TwoToneIcon fontSize="large" />
          </Button>
          {showw &&
            <div>
              <h3> O quizás el universo </h3>
              <Button onClick={() => showwwForm(!showww)}>
                <Brightness4TwoToneIcon fontSize="large" />
              </Button>
            </div>}
          {showww &&
            <div>
              <h4> O quizá Dios </h4>
              <Button onClick={() => showwwwForm(!showwww)}>
                <Brightness2TwoToneIcon />
              </Button>
            </div>}
          {showwww &&
            <div>
              <h5> O quizá la Verdad </h5>
              <Button onClick={() => showwwwwForm(!showwwwww)}>
                <BrightnessMediumTwoToneIcon fontSize="medium" />
              </Button>
            </div>}
          {showwwww &&
            <div>
              <h6> O quizás Todo </h6>
              <Button onClick={() => showwwwwwForm(!showwwwwww)}>
                <Brightness1TwoToneIcon />
              </Button>
            </div>}
          {showwwwww &&
            <div>
              <p className={classes.uno}>O quizás Uno</p>
              <Button
                onClick={() => {
                  showwwwwwwForm(!showwwwwww);
                  showwwwwwForm(!showwwwww);
                  showwwwwForm(!showwwww);
                  showwwwForm(!showwww);
                  showwwForm(!showww);
                  showwForm(!showw);
                  showForm(!show);
                }}
              >
                <RadioButtonCheckedTwoToneIcon fontSize="small" />
              </Button>
            </div>}
        </Box>}
      {showwwwwww &&
        <Box>
          <Box className={classes.container}>
            <img src={loop} className={classes.image} />
            <p
              style={{
                color: "goldenrod",
                fontSize: "xxx-large",
                fontWeight: "bolder",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: `translate(${-50}%, ${-50}%)`,
              }}
            >
              Y TAMBIÉN SOY TÚ
            </p>
          </Box>
        </Box>}
    </Box>
  );
}

export default Hall;
