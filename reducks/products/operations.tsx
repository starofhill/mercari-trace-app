import axios from "axios";
import { fetchProductsAction } from "./actions";

export const fetchProducts = () => {
  return async (dispatch) => {
    axios
      .get("https://mercari-trace-server.herokuapp.com/api/v1/products/")
      .then((res) => {
        const productList = [];
        productList.push(...res.data);
        dispatch(fetchProductsAction(productList));
      });
  };
};
