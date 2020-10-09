export const SIGN_IN_WITH_EMAIL = "SIGN_IN_WITH_EMAIL";
interface userState {
  isSignedIn: boolean;
  uid: number;
  name: string;
  headers: {
    accessToken: string;
    client: string;
    uid: string;
  };
}

export const signInWithEmailAction = (userState: userState) => {
  return {
    type: "SIGN_IN_WITH_EMAIL",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      name: userState.name,
    },
    headers: {
      accessToken: userState.headers.accessToken,
      client: userState.headers.client,
      uid: userState.headers.uid,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      name: "",
    },
  };
};
