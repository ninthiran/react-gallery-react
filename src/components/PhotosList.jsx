import React, { Component } from "react";
import GridBox from "./GribBox";

class PhotosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largeTest: [],
      showPopUp: false
    };
  }

  imageGridGenerator = x => {
    return (
      <div key={x.id} className="col-lg-2 col-md-4 col-sm-4 col-xs-6 grid-mar">
        <img
          src={x.thumbnailUrl}
          id={x.id}
          alt=""
          onClick={this.imagePopupLoader}
        />
        <span>{x.title}</span>
      </div>
    );
  };

  imagePopupLoader = e => {
    const id = e.target.id;
    const url = this.props.photoData.filter(x => x.id == id);
    this.setState({ largeTest: url[0] }, function() {
      console.log(this.state.largeTest);
    });
    this.popupToggle();
  };

  popupToggle = () => {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  };

  render() {
    return (
      <div id="content">
        <h1>
          {this.props.photoData.length === 0
            ? "Select Album form the side bar to view photos"
            : `Slected Album - ${this.props.albumId}`}
        </h1>
        <div className="row">
          {this.props.photoData.map(x => this.imageGridGenerator(x))}
        </div>
      </div>
    );
  }
}

export default PhotosList;
