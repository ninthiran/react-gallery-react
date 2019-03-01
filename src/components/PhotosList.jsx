import React, { Component } from "react";
import api from "../Api/api";
import GridBox from "./GribBox";

class PhotosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largeTest: []
    };
  }

  imageGridGenerator = x => {
    return (
      <div key={x.id} className="col-lg-2 col-md-4 col-sm-4 col-xs-6 grid-mar">
        <img src={x.thumbnailUrl} id={x.id} alt="" />
        <span>{x.title}</span>
      </div>
    );
  };

  render() {
    return (
      <div id="content">
        <h1>
          {this.props.photoData.length === 0
            ? "Select Album form the side bar to view photos"
            : ""}
        </h1>
        <div className="row">
          {this.props.photoData.map(x => this.imageGridGenerator(x))}
        </div>
      </div>
    );
  }
}

export default PhotosList;
