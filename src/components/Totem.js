import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "../index.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMercury } from "@fortawesome/free-solid-svg-icons";
import loop from "../assets/loop.gif";
import mercury from "../assets/mercurio.svg";
import circuit from "../assets/circuit.png";
import pendu from "../assets/pendu.png";
function Totem() {
  const classes = useStyles();
  return (
    <Box className={classes.totem}>
      <Box className={classes.mercury}>
        <img alt="loop" className={classes.loop} src={loop} />
        <img alt="mercury" className={classes.mercuryIcon} src={mercury} />
      </Box>
      <Box className={classes.circuit}>
        <img
          alt="circuit"
          src={circuit}
          style={{ width: "500%", height: "auto" }}
        />
      </Box>
      <Box className={classes.pendu}>
        <img alt="pendu" src={pendu} style={{ width: "50%", height: "auto" }} />
      </Box>
    </Box>
  );
}

export default Totem;
