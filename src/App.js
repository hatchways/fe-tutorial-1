import React from "react";
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
