import React from "react";
import useStyles from "../../index.styles";
import { Box, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScaleRight } from "@fortawesome/free-solid-svg-icons";

function Politica() {
  const classes = useStyles();
  return (
    <Box className={classes.feminism}>
      <FontAwesomeIcon
        icon={faBalanceScaleRight}
        style={{ fontSize: "xxx-large", color: "lightyellow", padding: 80 }}
      />
      <List>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgag2D--dBgdBlM3-ag?e=qUjXf9"}
          >
            Arendt, Hannah. Qué es la política
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgagZUIaScMoJ-a0jhQ?e=GgfD5r"}
          >
            Bakunin, Mijail - Estatismo y anarquía
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgag4JGoFtsvIFgiCXw?e=jh9KSS"}
          >
            Beauvoir, Simone. El pensamiento político de la derecha
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgag5-kwhD6iL3LZJCA?e=0g3JDQ"}
          >
            Browne, del Valle Rojas y Silva, compiladores. Relatos culturales de
            la crisis. Comunicación y crítica política
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaht9T1EgKgWdKPSUw?e=1iw5hh"}
          >
            Foucault, Michel - El cuerpo utópico. Las heterotopías
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgahuk1wG7KtKiDkiRQ?e=haKnvc"}
          >
            Foucault, Michel - El ojo del poder
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaho3FPPr1_WF4nxBw?e=M04YKf"}
          >
            Foucault, Michel - Estrategias de poder
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgahnfpyRll278prdxQ?e=68cfQ0"}
          >
            Foucault, Michel - Genealogía del racismo
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgag2D--dBgdBlM3-ag?e=qUjXf9"}
          >
            Foucault, Michel - Nacimiento de la Biopolítica (Curso en el
            Collège de France, 1978-1979)
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/u/s!AqIbM7aE-jvIgahpz7LYZ8C_dDNP-w?e=G9pYSl"}
          >
            Foucault, Michel - Vigilar y castigar
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgahqtSy5s3N737-neA?e=R3TwbE"}
          >
            Foucault, Michel y Chomsky, Noam - La naturaleza humana. Justicia
            versus Poder
          </a>
        </ListItem>

        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaINSTL-CiPoRTnnYA?e=ood9sN"}
          >
            García Canclini, Nestor - De que hablamos cuando hablamos de
            resistencia
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgahWS-df-n-z8dPifQ?e=2SqyVD"}
          >
            Jünger, Ernst. La emboscadura
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgahf4K166d0wQiC02Q?e=B3aB94"}
          >
            Luhmann, Niklas. Confianza
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgahc0lByQcDY6DN-Xw?e=GVpF9A"}
          >
            Luhmann, Niklas. Poder
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgagaIE3voP-iXF90_Q?e=mpe92g"}
          >
            Marx, Karl - El Capital
          </a>
        </ListItem>
        <ListItem button>
          <a
            href={"https://1drv.ms/b/s!AqIbM7aE-jvIgaggv-eHDoghqcz76Q?e=dnZd9p"}
          >
            Marx, Karl - Manifiesto comunista
          </a>
        </ListItem>
      </List>
    </Box>
  );
}

export default Politica;
