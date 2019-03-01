import axios from "axios";

const getDataList = (path = "") => {
  return new Promise(resolve => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos${path}`)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(
          error + `https://jsonplaceholder.typicode.com/photos${path}`
        );
      });
  });
};

export default {
  getDataList
};
