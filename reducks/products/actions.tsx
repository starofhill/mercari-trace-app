export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const addProductAction = (products) => {
  return {
    type: "ADD_PRODUCTS",
    payload: products,
  };
};
