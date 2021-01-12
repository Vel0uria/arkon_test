import { makeStyles } from "@material-ui/core/styles";
import ankh from "./assets/ankh.svg";
import film from "./assets/film-strip.svg";
import speech from "./assets/speech.svg";
import philosophy from "./assets/philosophy.svg";
import roll from "./assets/film-roll.svg";
import fem from "./assets/feminism.svg";
import art from "./assets/key-outline.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Commissioner",
    backgroundColor: "#3e3c4a !important",

    fontWeight: "normal",
    color: "gray",
    padding: 110,

    "& h1": {
      fontWeight: "normal",
      fontSize: "xxx-large",
    },
    "&:hover": {
      color: "#937bc3s",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    "& Button": {
      color: "#4e4c5a",
    },
  },
  textField: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    fontWeight: "normal",
    "& p": {
      fontSize: "0.64em",
    },
  },
  container: {
    display: "flex",
    alignSelf: "center",
    position: "relative",
    textAlign: "center",
  },
  image: {
    //  opacity: 0.5,
  },
  star: {
    marginTop: Math.floor(Math.random() * 170),
    marginBottom: 100,
    marginLeft: Math.floor(Math.random() * 150),
    marginRight: Math.floor(Math.random() * 150),
    // color: "#3e3c4a !important",
    "& Button": {
      color: "#3e3c4a !important",
      "&:hover": {
        color: "#947bc2 !important",
      },
    },
  },
  iInfinite: {
    "& Button": {
      color: "#4e4c5a !important",
    },
  },
  iFire: {
    "&:hover": { color: "#e63b00" },
  },
  iAir: {
    "&:hover": { color: "#a8d4f8" },
  },
  iWater: {
    "&:hover": { color: "#365795" },
  },
  iEarth: {
    "&:hover": { color: "#d99717" },
  },
  // agua: {
  //   display: "flex",
  //   alignSelf: "flex-start",
  //   flexDirection: "column",
  //   alignItems: "space-around",
  // },
  halls: {
    fontSize: "xx-large",
    color: "silver",
    paddingBottom: 60,
  },
  magia: {
    display: "flex",
    fontSize: "larger",
    paddingBottom: 1000,
    backgroundColor: "#3e3c4a",
    backgroundImage: `URL(${ankh})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      display: "flex",
      color: "gray",
      fontFamily: "Commissioner",
    },
    "& img": {
      width: 100,
      color: "#fc3b7f",
    },
  },
  cine: {
    display: "flex",
    fontSize: "larger",
    paddingBottom: 1000,
    backgroundColor: "#3e3c4a",
    backgroundImage: `URL(${film})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      display: "flex",
      color: "gray",
      fontFamily: "Commissioner",
    },
  },
  foto: {
    display: "flex",
    fontSize: "larger",
    paddingBottom: 2000,
    backgroundColor: "#3e3c4a",
    backgroundImage: `URL(${roll})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      display: "flex",
      color: "gray",
      fontFamily: "Commissioner",
    },
  },
  poli: {
    display: "flex",
    fontSize: "larger",
    paddingBottom: 1000,
    backgroundColor: "#3e3c4a",
    backgroundImage: `URL(${speech})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      display: "flex",
      color: "gray",
      fontFamily: "Commissioner",
    },
  },
  filos: {
    display: "flex",
    fontSize: "larger",
    paddingBottom: 1200,
    backgroundColor: "#3e3c4a",
    backgroundImage: `URL(${philosophy})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      display: "flex",
      color: "gray",
      fontFamily: "Commissioner",
    },
  },
  fem: {
    display: "flex",
    fontSize: "larger",
    paddingBottom: 1200,
    backgroundColor: "#3e3c4a",
    backgroundImage: `URL(${fem})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      display: "flex",
      color: "gray",
      fontFamily: "Commissioner",
    },
  },
  arte: {
    display: "flex",
    fontSize: "larger",
    paddingBottom: 1400,
    paddingRight: 200,
    backgroundColor: "#3e3c4a",
    backgroundImage: `URL(${art})`,
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "right",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      display: "flex",
      color: "gray",
      fontFamily: "Commissioner",
    },
  },
  totem: {
    backgroundColor: "black",
    color: "pink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Commissioner",
    padding: 200,
  },
  mercury: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  mercuryIcon: {
    position: "absolute",
    height: 390,
  },
  loop: {
    position: "absolute",
    opacity: 0.6,
    height: 480,
    marginTop: -50,
    marginLeft: 10,
  },
  circuit: {
    transform: "rotate(90deg)",
    margin: 370,
  },
  pendu: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: 400,
  },
}));

export default useStyles;
