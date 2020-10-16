import React, { useState } from "react";
//import PropTypes from "prop-types";
import { Button, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useStyles from "../index.styles";
function Home() {
  const classes = useStyles();
  const [show, showForm] = useState(false);
  return (
    <Box className={classes.home}>
      <h1>Super Turbo Productivity App</h1>
      <Button onClick={() => showForm(!show)}>Nueva tarea</Button>
      {/* {show && */}
      <Box component="form" className={classes.textField}>
        <TextField
          fullWidth
          id="filled-basic"
          label="Descripción"
          variant="filled"
          color="secondary"
          multiline="true"
          InputLabelProps={{ style: { color: "lightgray" } }}
        />
        <TextField
          id="datetime-local"
          label="Fecha límite"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          variant="filled"
          color="secondary"
          size="medium"
          fullWidth
          InputProps={{ style: { color: "lightgray", marginLeft: 20 } }}
          InputLabelProps={{ style: { color: "gray", marginLeft: 20 } }}
        />
        <Button>AGREGAR</Button>
      </Box>
      {/* } */}
    </Box>
  );
}

export default Home;
