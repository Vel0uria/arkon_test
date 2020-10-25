import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../index.styles";
import { Box, Button } from "@material-ui/core";
//import turned from "../assets/Chau.jpg";
//import SubwayTwoToneIcon from "@material-ui/icons/SubwayTwoTone";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import OpacitySharpIcon from "@material-ui/icons/OpacitySharp";
import AllInclusiveSharpIcon from "@material-ui/icons/AllInclusiveSharp";
import WavesIcon from "@material-ui/icons/Waves";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";

function Hall() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h1>ARCADIA</h1>
      <p>Biblioteca</p>
      <Box className={classes.star}>
        <Button>
          <AllInclusiveSharpIcon fontSize="large" />
        </Button>
      </Box>
      <Box className={classes.icons}>
        {/* <Link> */}
        <WhatshotOutlinedIcon fontSize="large" />
        {/* </Link> */}
        {/* <Link> */}
        <WavesIcon fontSize="large" />
        {/* </Link> */}
        {/* <Link to="/feminismo"> */}
        <OpacitySharpIcon fontSize="large" />
        {/* </Link> */}
        {/* <Link> */}
        <FiberManualRecordTwoToneIcon fontSize="large" />
        {/* </Link> */}
      </Box>
    </Box>
  );
}

export default Hall;
