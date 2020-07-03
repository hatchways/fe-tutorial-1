import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import SignUpImage from "./assets/sign-up.png";

const useStyles = makeStyles(theme => ({
  signUp: {
    border: "1px solid white",
    color: "white",
    borderRadius: 19,
    margin: 15
  },
  signUpContainer: {
    height: "100vh",
    // When it reaches the breakpoint at "xs" or smaller, then apply this CSS
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column-reverse"
    }
  },
  leftContainer: {
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(1)
  },
  rightContainer: {
    position: "relative",
    padding: theme.spacing(1)
  },

  inputDiv: {
    border: `1px solid black`,
    padding: theme.spacing(2)
  },

  input: {
    "&::placeholder": {
      color: "pink",
      opacity: "1 !important"
    }
  },

  label: {
    transform: `none`
  },

  labelFocused: {
    color: "black"
  },

  root: {
    color: "black",
    "& label + .MuiInput-formControl": {
      marginTop: theme.spacing(3)
    }
  },

  demoImage: {
    width: "100%"
  }
}));

function App() {
  const classes = useStyles();

  /* 
    1. classNames only apply to the root of the component
  */

  return (
    <Grid container className={classes.signUpContainer}>
      <Grid item xs={12} sm={12} md={6} className={classes.leftContainer}>
        <img src={SignUpImage} alt="Mock Image" className={classes.demoImage} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.rightContainer}>
        <form className={classes.root} noValidate autoComplete="off">
          {/* https://material-ui.com/api/text-field/#css */}

          <TextField
            id="standard-basic"
            label="E-mail"
            placeholder={"Enter e-mail address"}
            InputProps={{
              className: classes.inputDiv,
              classes: {
                input: classes.input
              },
              disableUnderline: true
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.labelFocused
              }
            }}
            classes={{ root: classes.root }}
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default App;
