import { Alert } from "react-native";
import axios from "axios";
import { signInWithEmailAction, signOutAction } from "./actions";

export const signUpWithEmail = (
  email: string,
  password: string,
  name: string,
  navigate: (nav: string) => void
) => {
  return async (dispatch: (a: unknown) => void) => {
    // Validation
    if (name === "" || email === "" || password === "") {
      Alert.alert("必須項目が未入力です");
      return false;
    }

    // email
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      Alert.alert("無効なメールアドレスを\n入力しました");
      return false;
    }

    // password
    if (!/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{7,15}$/i.test(password)) {
      Alert.alert(
        "パスワードは半角英数字を\nそれぞれ1種類以上含む7-15文字\nで入力してください"
      );
      return false;
    }

    return axios
      .post("https://mercari-trace-server.herokuapp.com/api/v1/auth/", {
        name,
        email,
        password,
      })
      .then((res) => {
        dispatch(
          signInWithEmailAction({
            isSignedIn: true,
            uid: res.data.data.id,
            name: res.data.data.name,
            headers: {
              accessToken: res.headers["access-token"],
              client: res.headers.client,
              uid: res.headers.uid,
            },
          })
        );
        Alert.alert("会員登録できました。", "", [
          {
            text: "OK",
            onPress: () => navigate("BottomTabNavigation"),
          },
        ]);
        console.log(res);
      })
      .catch((err) => {
        Alert.alert("会員登録に失敗しました。\nもう一度やり直してください。");
        console.log(err);
      });
  };
};

export const signInWithEmail = (
  email: string,
  password: string,
  navigate: (nav: string) => void
) => {
  return async (dispatch: (a: any) => void) => {
    // Validation
    if (email === "" || password === "") {
      Alert.alert("必須項目が未入力です");
      return false;
    }

    axios
      .post("https://mercari-trace-server.herokuapp.com/api/v1/auth/sign_in/", {
        email,
        password,
      })
      .then((res) => {
        dispatch(
          signInWithEmailAction({
            isSignedIn: true,
            uid: res.data.data.id,
            name: res.data.data.name,
            headers: {
              accessToken: res.headers["access-token"],
              client: res.headers.client,
              uid: res.headers.uid,
            },
          })
        );
        Alert.alert("ログインしました。", "", [
          {
            text: "OK",
            onPress: () => navigate!("BottomTabNavigation"),
          },
        ]);
      })
      .catch((err) => {
        Alert.alert("ログイン失敗です。\nもう一度やり直してください。");
        console.log(err);
      });
  };
};

export const signOut = () => {
  return async (dispatch: (a: unknown) => void) => {
    Alert.alert("確認", "ログアウトしますか?", [
      {
        text: "はい",
        onPress: () => {
          dispatch(signOutAction());
        },
      },
      {
        text: "いいえ",
        style: "cancel",
      },
    ]);
  };
};
