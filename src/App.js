import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="container">
        <div id="left_container" class="half_container">
          left container
        </div>
        <div id="right_container" class="half_container">
          right container
          <a href="/signup" id="signup">
            sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
