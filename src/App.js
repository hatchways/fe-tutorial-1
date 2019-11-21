import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="container">
        <div id="left_container" class="half_container">
          left container
          <a href="/signup" id="signup">
            sign up
          </a>
        </div>
        <div id="right_container" class="half_container">
          right container
        </div>
      </div>
    </div>
  );
}

export default App;
