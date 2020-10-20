import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Commissioner",
    backgroundColor: "#3e3c4a",
    // backgroundImage: `URL(
    //  ${"https://cultura-gamer.com/wp-content/uploads/2020/07/cyberpunk-2077-33.jpg"}
    // )`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    color: "gray",
    padding: 200,

    "& Button": {
      color: "aliceblue",
      margin: 10,
      //   backgroundColor: "black",
    },
  },

  textField: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    "& p": {
      fontSize: "0.64em",
      //  marginLeft: 70,
      // paddingLeft: "25px",
      // paddingRight: "25px",
      //backgroundColor: "black",
    },
    tu: {
      display: "flex",
      color: "red",
    },
  },
}));

export default useStyles;
