import React, { Component } from "react";
import api from "../Api/api";
// import GridBox from "./GribBox";

class AlbumList extends Component {
  state = {
    imagelist: [],
    uniqueAlbumList: []
  };

  componentDidMount = () => {
    api.getDataList().then(res => {
      const data = res.data;
      const getUniqueAlbumIds = [...new Set(data.map(item => item.albumId))];
      // getUniqueAlbumIds.forEach(unique => {
      //   uniqueAlbumList[unique - 1] = data
      //     .map(x => {
      //       return x;
      //     })
      //     .filter(x => x.albumId == unique)[0];
      // });
      this.setState({ uniqueAlbumList: getUniqueAlbumIds });
    });
  };

  renderAlbumList = (x, y) => {
    return (
      <li key={y}>
        <span key={y} id={x} onClick={this.albumHandler} id={x}>
          Album - {x}
        </span>
      </li>
    );
  };

  render() {
    return (
      <div className="wrapper">
        <div className="scrollable">
          <nav
            id="sidebar"
            className="navbar navbar-expand-lg navbar-light bg-light"
          >
            <ul className="list-unstyled components">
              {this.state.uniqueAlbumList.map((x, y) =>
                this.renderAlbumList(x, y)
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default AlbumList;
