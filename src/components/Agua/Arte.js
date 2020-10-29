import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";

function Arte() {
  const classes = useStyles();
  return (
    <Box className={classes.feminism}>
      <FontAwesomeIcon
        icon={faPaintBrush}
        fontSize="large"
        style={{ fontSize: "xx-large", color: "pink", padding: 80 }}
      />
      <List>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaIOUViblkY8lXhyvg?e=CX7Tu2"}
          >
            (Varios) Los estatutos de la Imagen. Creación-manifestación-
            percepción
          </a>
        </ListItem>
      </List>
    </Box>
  );
}

export default Arte;
