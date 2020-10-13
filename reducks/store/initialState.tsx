const initialState = {
  products: {
    list: [],
  },

  users: {
    isSignedIn: false,
    uid: "",
    name: "",
    headers: {
      accessToken: "",
      client: "",
      uid: "",
    },
  },

  search: {
    searchWord: "",
    searchWordArray: [],
    category: "",
  },
};
export default initialState;
