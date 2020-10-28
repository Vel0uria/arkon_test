import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
function Fuego() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <WhatshotOutlinedIcon fontSize="large" />
      <List>
        <ListItem>
          <Link to="/cine">
            <FontAwesomeIcon
              icon={faFilm}
              style={{ fontSize: "x-large", color: "silver" }}
            />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Fuego;
