import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  signUp: {
    border: "1px solid white",
    color: "white",
    borderRadius: 19,
    margin: 15,
  },
  signUpContainer: {
    height: "100vh",
    // When it reaches the breakpoint at "xs" or smaller, then apply this CSS
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column-reverse",
    },
  },
  leftContainer: {
    backgroundColor: "black",
    color: "white",
  },
  rightContainer: {
    position: "relative",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.signUpContainer}>
      <Grid item xs={12} sm={12} md={6} className={classes.leftContainer}>
        left container
        <Button className={classes.signUp}>Sign up</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.rightContainer}>
        right container
      </Grid>
    </Grid>
  );
}

export default App;
