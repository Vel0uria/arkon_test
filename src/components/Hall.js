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
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

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
        <Button>
          <WhatshotOutlinedIcon fontSize="large" className={classes.iFire} />
        </Button>
        {/* </Link> */}
        {/* <Link> */}
        <Button>
          <WavesIcon fontSize="large" className={classes.iAir} />
        </Button>
        {/* </Link> */}
        {/* <Link to="/feminismo"> */}
        <Button>
          <OpacitySharpIcon fontSize="large" className={classes.iWater} />
        </Button>
        {/* </Link> */}
        {/* <Link> */}
        <Button>
          <FiberManualRecordTwoToneIcon
            fontSize="large"
            className={classes.iEarth}
          />
        </Button>

        {/* </Link> */}
      </Box>
      <BottomNavigation showLabels color="primary" className={classes.nav}>
        <BottomNavigationAction label="Agradecimientos" />
      </BottomNavigation>
    </Box>
  );
}

export default Hall;
