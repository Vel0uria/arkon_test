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
    padding: 200,
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
    //marginTop: 10,
    // color: "#4e4c5a",
    marginBottom: 300,
    // color: "",
    "& Button": {
      color: "#3e3c4a",
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
    paddingTop: 120,
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
    width: "100%",
    margin: 10,
    opacity: 0,
  },
}));

export default useStyles;
