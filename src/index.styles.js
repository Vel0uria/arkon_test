import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Commissioner",
    backgroundColor: "#3e3c4a",
    fontWeight: "normal",
    // backgroundImage: `URL(
    //  ${"https://cultura-gamer.com/wp-content/uploads/2020/07/cyberpunk-2077-33.jpg"}
    // )`,
    color: "gray",
    padding: 150,
    maxHeight: 1000,

    // "& a": {
    //   color: "pink",
    // },
    "& h1": {
      fontWeight: "normal",
    },
    "&:hover": {
      color: "#937bc3s",
    },
  },
  icons: {
    color: "gray",
    "& Button": {
      marginLeft: 20,
      color: "#4e4c5a",
      //   backgroundColor: "black",
      // "&:hover": {
      //   color: "goldenrod",
      // },
    },
  },
  textField: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    fontWeight: "normal",
    "& p": {
      fontSize: "0.64em",
      //  marginLeft: 70,
      // paddingLeft: "25px",
      // paddingRight: "25px",
      //backgroundColor: "black",
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
    marginTop: 100,
    // color: "#4e4c5a",
    marginBottom: 100,
    marginLeft: Math.floor(Math.random() * 150),
    marginRight: Math.floor(Math.random() * 150),

    // color: "",
    "& Button": {
      color: "#3e3c4a",
      width: "9vw",
      "&:hover": {
        color: "#947bc2",
      },
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
  agua: {
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "column",
    alignItems: "space-around",
  },
  feminism: {
    display: "flex",
    fontFamily: "Cinzel Decorative",
    fontSize: "larger",
    color: "goldenrod",
    backgroundColor: "#3e3c4a",
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
  nav: {
    padding: 10,
    backgroundColor: "#3e3c4a !important",
    color: "gray !important",
  },
}));

export default useStyles;
