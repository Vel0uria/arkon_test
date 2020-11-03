import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllInclusiveSharpIcon from "@material-ui/icons/AllInclusiveSharp";
function Magia() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AllInclusiveSharpIcon
        style={{ fontSize: "xxx-large", paddingBottom: 50 }}
      />
      <List className={classes.halls}>
        <ListItem />
      </List>
    </Box>
  );
}
export default Magia;
