import React, { useState, useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useStyles from "../index.styles";
import useForm from "../customHooks/useForm";
function Home() {
  const classes = useStyles();
  const start = new Date();
  const [show, showForm] = useState(false);
  const [form, handleInputs] = useForm();

  const calculateTimeLeft = e => {
    console.log(e);
    const difference = +new Date(e) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutos: Math.floor(difference / 1000 / 60 % 60),
        segundos: Math.floor(difference / 1000 % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  // });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  //  console.log(timeLeft);
  // function saveTask(e) {
  //   console.log(start);
  // }

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
          multiline
          InputLabelProps={{ style: { color: "lightgray" } }}
        />
        <TextField
          id="datetime-local"
          label="Fecha límite"
          type="datetime-local"
          defaultValue={start}
          variant="filled"
          color="secondary"
          size="medium"
          fullWidth
          onChange={e => {
            handleInputs(e);
            calculateTimeLeft(e.target.value);
          }}
          InputProps={{ style: { color: "lightgray", marginLeft: 20 } }}
          InputLabelProps={{
            style: {
              color: "gray",
              marginLeft: 20,
              fontSize: "small",
              marginTop: -10,
            },
          }}
        />
        {timerComponents.length ? timerComponents : <h2>Time's up!</h2>}
        <Button>AGREGAR</Button>
      </Box>
      {/* } */}
    </Box>
  );
}

export default Home;
