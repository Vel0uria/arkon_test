import React from "react";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import OpacitySharpIcon from "@material-ui/icons/OpacitySharp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function Agua() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <OpacitySharpIcon
          style={{ color: "lightblue", fontSize: "xxx-large" }}
        />
      </Box>
      <List className={classes.halls}>
        <ListItem>
          <Link to="/feminismo">
            <FontAwesomeIcon
              icon={faVenus}
              style={{ fontSize: "xx-large", color: "silver" }}
            />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/arte">
            <FontAwesomeIcon
              icon={faPaintBrush}
              style={{ fontSize: "large", color: "silver" }}
            />
          </Link>
        </ListItem>
      </List>
    </Box>
    // </Box>
  );
}

export default Agua;
