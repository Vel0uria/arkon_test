import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "../index.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMercury } from "@fortawesome/free-solid-svg-icons";
import loop from "../assets/loop.gif";
import circuit from "../assets/circuit.png";
import blueStar from "../assets/star_b.png";
import yellowStar from "../assets/star_y.png";
function Totem() {
  const classes = useStyles();
  return (
    <Box className={classes.totem}>
      {/* <Box className={classes.mercury}> */}
      <img alt="loop" className={classes.loop} src={loop} />
      {/* <img alt="mercury" className={classes.mercuryIcon} src={mercury} /> */}
      {/* </Box> */}
      <Box className={classes.mercury}>
        <img
          className={classes.circuit}
          alt="circuit"
          src={circuit}
          style={{ width: "65%", height: "auto" }}
        />
        <img
          className={classes.stars}
          alt="stars"
          src={yellowStar}
          style={{ width: "16%", height: "auto", marginTop: -80 }}
        />
        <img
          className={classes.stars}
          alt="stars"
          src={blueStar}
          style={{ width: "12%", height: "auto", marginTop: 80 }}
        />
        <img
          className={classes.stars}
          alt="stars"
          src={blueStar}
          style={{ width: "35%", height: "auto" }}
        />
        <img
          className={classes.stars}
          alt="stars"
          src={yellowStar}
          style={{ width: "10%", height: "auto", marginTop: 180 }}
        />

        <img
          className={classes.stars}
          alt="stars"
          src={yellowStar}
          style={{ width: "10%", height: "auto", marginTop: 280 }}
        />

        <img
          className={classes.stars}
          alt="stars"
          src={yellowStar}
          style={{
            width: "10%",
            height: "auto",
            marginTop: 95,
            marginRight: 80,
          }}
        />
        <img
          className={classes.stars}
          alt="stars"
          src={yellowStar}
          style={{
            width: "10%",
            height: "auto",
            marginTop: 95,
            marginLeft: 80,
          }}
        />
      </Box>
    </Box>
  );
}

export default Totem;
