import React, { Component } from "react";
import api from "../Api/api";
import GridBox from "./GribBox";

class AlbumList extends Component {
  state = {
    imagelist: [],
    uniqueAlbumList: []
  };

  componentDidMount = () => {
    api.getDataList().then(res => {
      const data = res.data;
      let uniqueAlbumList = [];
      const getUniqueAlbumIds = [...new Set(data.map(item => item.albumId))];
      getUniqueAlbumIds.forEach(unique => {
        uniqueAlbumList[unique - 1] = data
          .map(x => {
            return x;
          })
          .filter(x => x.albumId == unique)[0];
      });
      this.setState({ uniqueAlbumList });
    });
  };

  renderAlbumList = (x, y) => {
    return (
      <GridBox
        albumId={x.albumId}
        key={y}
        thumbnailUrl={x.thumbnailUrl}
        title={x.title}
        label={x.title}
        linkEnable={true}
      />
    );
  };

  render() {
    return (
      <div className="container">
        <h1>Select an album to view image </h1>
        <div className="row">
          {this.state.uniqueAlbumList.map((x, y) => this.renderAlbumList(x, y))}
        </div>
      </div>
    );
  }
}

export default AlbumList;
