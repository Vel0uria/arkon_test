import React from "react";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
function Cine() {
  const classes = useStyles();

  return (
    <Box className={classes.feminism}>
      <FontAwesomeIcon
        icon={faFilm}
        style={{ fontSize: "xxx-large", color: "violet", padding: 80 }}
      />
      <List>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaUzAHS1ix51wkUyNg?e=UjbW4e"}
          >
            Barry Langford - Film Genre ~ Hollywood and Beyond
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaVFansHVs66dzgQCQ?e=pnpuSP"}
          >
            Barthes, Roland - Retórica de la imagen
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaYRk4P_JNaOQJPMLw?e=ah4oA8"}
          >
            Bazin Andre - What Is Cinema Volume 1
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaYWF2McP3U5tgm9lQ?e=FDP7Gp"}
          >
            Bazin Andre - What Is Cinema Volume 2
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaVTwgT6-JJWcpiOLg?e=4wYd86"}
          >
            Bert Cardullo - In Search of Cinema ~ Writings on International Film
            Art
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaVQf8OH-EJ5f-o40w?e=9B6fMj"}
          >
            Birgit Beumers - Nikita Mikhalkov ~ Between Nostalgia and
            Nationalism
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaVTwgT6-JJWcpiOLg?e=8bHy7t"}
          >
            Blain Brown - Cinematography Theory and Practice ~ Image Making for
            Cinematographers, Directors and Videographers
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaYND5fdUrGfa83grg?e=RPpFdD"}
          >
            Bordwell, David - La narración en el cine de ficción
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaUzAHS1ix51wkUyNg?e=UjbW4e"}
          >
            Barry Langford - Film Genre ~ Hollywood and Beyond
          </a>
        </ListItem>
      </List>
    </Box>
  );
}

export default Cine;
