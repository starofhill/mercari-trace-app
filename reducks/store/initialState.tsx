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
};
export default initialState;
