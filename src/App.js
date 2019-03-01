import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AlbumList from "./components/AlbumList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumList />
      </div>
    );
  }
}

export default App;
