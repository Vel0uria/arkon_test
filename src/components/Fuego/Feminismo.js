import React from "react";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnkh } from "@fortawesome/free-solid-svg-icons";

function Feminismo() {
  const classes = useStyles();
  return (
    <Box className={classes.feminism}>
      <h1>Mundus Sofiarum</h1>
      <FontAwesomeIcon
        icon={faAnkh}
        style={{ fontSize: "xxx-large", color: "#fc3b7f", padding: 80 }}
      />
      <List>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            (Varios) Por un Feminismo sin Mujeres
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            (Varios) TransFeminismos
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            (Varios) Transformaciones del trabajo desde una perspectiva
            feminista
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Almonacid Galvis, María Alejandra - Diálogos Entre Arte Y
            Feminismo
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Amoros, Celia - Feminismo y filosofía
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Anzaldúa, Gloria - Otras Inapropiables. Feminismos Desde Las
            Fronteras
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Arruzza, Cinzia - Las sin parte. Matrimonios y divorcios entre
            Feminismo y Marxismo
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Badinter, Elizabeth - Existe el amor maternal. Historia de la
            maternidad, siglo XII al XX
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Belfort Bax, Ernest - El Fraude Del Feminismo
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Braidotti, Rosi - Metamorfosis. Hacia una teoría materialista del
            devenir
          </a>
        </ListItem>
        <ListItem>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgP9NxwD0dBKWS3gTYQ?e=jacw7q"}
          >
            Calvera, Leonor - Mujeres Y Feminismo En La Argentina
          </a>
        </ListItem>
      </List>
    </Box>
  );
}

export default Feminismo;
