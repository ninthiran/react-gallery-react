import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import api from "./Api/api";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("testing api data", () => {
  it("should load user data", () => {
    return api.getDataList().then(data => {
      expect(data).toBeDefined();
    });
  });
});

describe("testing api data", () => {
  it("should load user data", () => {
    return api.getDataList("?albumId=1").then(data => {
      expect(data).toBeDefined();
    });
  });
});
