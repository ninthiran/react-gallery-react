import React, { Component } from "react";
import api from "../Api/api";
import GridBox from "./GribBox";

class PhotosList extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;
    this.state = {
      AlbumID: params.id,
      photoData: []
    };
  }

  componentDidMount = () => {
    api.getDataList(`?albumId=${this.state.AlbumID}`).then(list => {
      console.log(1);
      this.setState({ photoData: list.data });
    });
  };

  imageGridGenerator = x => {
    return (
      <GridBox
        label={x.title}
        key={x.id}
        thumbnailUrl={x.thumbnailUrl}
        title={x.title}
        linkEnable={false}
        url={x.url}
      />
    );
  };

  render() {
    return (
      <div className="container">
        <h1>PhotosList</h1>
        <div className="row">
          {this.state.photoData.map(x => this.imageGridGenerator(x))}
        </div>
      </div>
    );
  }
}

export default PhotosList;
