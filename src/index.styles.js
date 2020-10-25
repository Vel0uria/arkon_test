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
    "& Button": {
      margin: 10,
      color: "#4e4c5a",
      //   backgroundColor: "black",
    },
    "& a": {
      color: "pink",
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
    opacity: 0.5,
  },
  star: {
    marginTop: 0,
    marginBottom: 50,
    color: "#3e3c4a",
    "&:hover": {
      color: "silver",
    },
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
  },
}));

export default useStyles;
