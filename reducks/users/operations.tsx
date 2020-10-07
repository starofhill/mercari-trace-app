import { Alert } from "react-native";
import axios from "axios";
import { signInWithEmailAction } from "./actions";

export const signUpWithEmail = (
  nickname: string,
  email: string,
  password: string
) => {
  return async () => {
    // Validation
    if (nickname === "" || email === "" || password === "") {
      Alert.alert("必須項目が未入力です");
      return false;
    }

    if (password.length < 7) {
      Alert.alert("パスワードは7文字以上の\n半角英数字で入力してください");
      return false;
    }

    return axios
      .post("https://mercari-trace-server.herokuapp.com/api/v1/auth/", {
        nickname: nickname,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log("サインアップ完了");
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗");
      });
  };
};

export const signInWithEmail = (email: string, password: string) => {
  return async (dispatch: (a: any) => void) => {
    // Validation
    if (email === "" || password === "") {
      Alert.alert("必須項目が未入力です");
      return false;
    }

    axios
      .post("https://mercari-trace-server.herokuapp.com/api/v1/auth/sign_in/", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log("サインイン完了");
        dispatch(
          signInWithEmailAction({
            isSignedIn: true,
            uid: res.data.data.id,
            nickname: res.data.data.nickname,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗");
      });
  };
};
