import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.svg";
// import "./App.css";

const useStyles = makeStyles(theme => ({
  signUp: {
    border: "1px solid black",
    borderRadius: 19,
    margin: 15,
    position: "absolute",
    right: 0
  },
  leftContainer: {
    backgroundColor: "black",
    color: "white"
  },
  rightContainer: {
    position: "relative"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={6} className={classes.leftContainer}>
        left container
        <Button className={classes.signUp}>Sign up</Button>
      </Grid>
      <Grid item xs={6} className={classes.rightContainer}>
        right container
      </Grid>
    </Grid>
  );
}

export default App;
