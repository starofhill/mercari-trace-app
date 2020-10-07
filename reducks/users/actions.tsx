export const SIGN_IN_WITH_EMAIL = "SIGN_IN_WITH_EMAIL";
export const signInWithEmailAction = (userState: {
  isSignedIn: boolean;
  uid: number;
  nickname: string;
}) => {
  return {
    type: "SIGN_IN_WITH_EMAIL",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      nickname: userState.nickname,
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
      nickname: "",
    },
  };
};
