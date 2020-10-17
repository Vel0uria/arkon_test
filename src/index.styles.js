import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  home: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Commissioner",
    backgroundColor: "#3e3c3a",
    color: "whitesmoke",
    padding: 100,

    "& Button": {
      color: "aliceblue",
      margin: 10,
      //   backgroundColor: "black",
    },
  },
  textField: {
    display: "flex",
    alignSelf: "flex-start",
    "& Button": {
      marginLeft: 70,
      paddingLeft: "35px",
      paddingRight: "35px",
      backgroundColor: "black",
    },
  },
}));

export default useStyles;
