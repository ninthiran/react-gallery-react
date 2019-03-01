import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import api from "./Api/api";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should return value form API - paramater is passed", () => {
  expect.assertions(1);
  return api.getDataList("?id=100").then(res => {
    expect(res.data[0].albumId).toEqual(2);
  });
});

test("should return value for API - empty parameter", () => {
  expect.assertions(1);
  return api.getDataList().then(res => {
    expect(res.data[0].id).toEqual(1);
  });
});
