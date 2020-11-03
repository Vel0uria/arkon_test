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

function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h1>ARCADIA</h1>
      <p>Biblioteca</p>
      <Box className={classes.star}>
        <Button>
          <Link to="/magia">
            <AllInclusiveSharpIcon fontSize="large" />
          </Link>
        </Button>
      </Box>
      <Box className={classes.icons}>
        <Link to="/fuego">
          <Button>
            <WhatshotOutlinedIcon fontSize="large" className={classes.iFire} />
          </Button>
        </Link>
        <Link to="/aire">
          <Button>
            <WavesIcon fontSize="large" className={classes.iAir} />
          </Button>
        </Link>
        <Link to="/agua">
          <Button>
            <OpacitySharpIcon fontSize="large" className={classes.iWater} />
          </Button>
        </Link>
        {/* <Link> */}
        <Button>
          <FiberManualRecordTwoToneIcon
            fontSize="large"
            className={classes.iEarth}
          />
        </Button>

        {/* </Link> */}
      </Box>
    </Box>
  );
}

export default Home;
