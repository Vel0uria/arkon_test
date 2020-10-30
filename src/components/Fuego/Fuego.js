import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faMicroscope } from "@fortawesome/free-solid-svg-icons";
function Fuego() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <WhatshotOutlinedIcon
        style={{ fontSize: "xxx-large", color: "crimson", paddingBottom: 60 }}
      />
      <List className={classes.halls}>
        <ListItem>
          <Link to="/cine">
            <FontAwesomeIcon icon={faFilm} color="silver" />
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <FontAwesomeIcon icon={faMicroscope} color="silver" />
            {/* style={{ fontSize: "xx-large", color: "silver", padding: 10 }} */}
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Fuego;
