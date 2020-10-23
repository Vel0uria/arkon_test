import React from "react";
import useStyles from "../index.styles";
import { Box } from "@material-ui/core";
//import turned from "../assets/Chau.jpg";
//import SubwayTwoToneIcon from "@material-ui/icons/SubwayTwoTone";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import OpacitySharpIcon from "@material-ui/icons/OpacitySharp";
import ColorizeSharpIcon from "@material-ui/icons/ColorizeSharp";
import AllInclusiveSharpIcon from "@material-ui/icons/AllInclusiveSharp";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PublicIcon from "@material-ui/icons/Public";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";

function Hall() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.star}>
        <StarBorderIcon fontSize="large" />
      </Box>
      <Box>
        <WhatshotOutlinedIcon fontSize="large" />
        <AllInclusiveSharpIcon fontSize="large" />
        <OpacitySharpIcon fontSize="large" />
        {/* <ColorizeSharpIcon fontSize="large" /> */}
        <FiberManualRecordTwoToneIcon fontSize="large" />

        {/* <a href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}>
        Mircea Eliade, Mito y realidad
      </a> */}
      </Box>
    </Box>
  );
}

export default Hall;
