import axios from "axios";

export default function getData() {
  axios
    .get("https://mercari-trace-server.herokuapp.com/api/v1/products/")
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}
