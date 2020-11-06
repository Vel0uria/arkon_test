import React from "react";
//import { Link } from "react-router-dom";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import {
  faLaptopCode,
  faCommentsDollar,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
function Tierra() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <FiberManualRecordTwoToneIcon
          style={{ fontSize: "xxx-large", color: "Gold", paddingBottom: 60 }}
        />
      </Box>
      <List className={classes.halls}>
        <ListItem button>
          <FontAwesomeIcon icon={faLaptopCode} />
        </ListItem>
        <ListItem button>
          <FontAwesomeIcon icon={faCommentsDollar} />
        </ListItem>
        <ListItem button>
          <FontAwesomeIcon icon={faLeaf} />
        </ListItem>
      </List>
    </Box>
  );
}

export default Tierra;
