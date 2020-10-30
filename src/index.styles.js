import { makeStyles } from "@material-ui/core/styles";

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
  // agua: {
  //   display: "flex",
  //   alignSelf: "flex-start",
  //   flexDirection: "column",
  //   alignItems: "space-around",
  // },
  halls: {
    fontSize: "xxx-large",
    color: "silver !important",
    paddingBottom: 60,
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
}));

export default useStyles;
