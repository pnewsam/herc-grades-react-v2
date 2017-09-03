import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar />
        <h1>Herc Grades</h1>
      </div>
    )
  }
}



export default App;