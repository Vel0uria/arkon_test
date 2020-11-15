import React from "react";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

function Foto() {
  const classes = useStyles();
  return (
    <Box className={classes.foto}>
      <FontAwesomeIcon
        icon={faCameraRetro}
        fontSize="large"
        style={{ fontSize: "xxx-large", color: "lavender", padding: 80 }}
      />
      <List>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgal--BGeIzBt7p3A3g?e=KcVvxe"}
          >
            (Varios) - La santa biblia (versión biblia de Jerusalén)
          </a>
        </ListItem>
      </List>
    </Box>
  );
}
export default Foto;
