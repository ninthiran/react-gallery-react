import React, { Component } from "react";

class PopupLayout extends Component {
  state = {};
  render() {
    return (
      <div className="popup">
        <img src={this.props.selectedImage} alt="" className="popup-inner" />
        <button className="close-btn" onClick={this.props.popupClose}>
          X
        </button>
      </div>
    );
  }
}

export default PopupLayout;
