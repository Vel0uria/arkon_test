import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faBalanceScaleRight,
} from "@fortawesome/free-solid-svg-icons";
import WavesIcon from "@material-ui/icons/Waves";

function Aire() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <WavesIcon
        style={{ fontSize: "xxx-large", color: "aliceblue", paddingBottom: 50 }}
      />
      <List>
        <ListItem>
          <Link to="/politica">
            <FontAwesomeIcon
              icon={faBalanceScaleRight}
              style={{ fontSize: "x-large", color: "silver" }}
            />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/filos">
            <FontAwesomeIcon
              icon={faLandmark}
              style={{ fontSize: "x-large", color: "silver" }}
            />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Aire;
