import { Alert } from "react-native";
import axios from "axios";
import { signInWithEmailAction, signOutAction } from "./actions";
import { removeUser, storeUser } from "./asyncStorage";

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
        const userData = {
          isSignedIn: true,
          uid: res.data.data.id,
          name: res.data.data.name,
          headers: {
            accessToken: res.headers["access-token"],
            client: res.headers.client,
            uid: res.headers.uid,
          },
        };

        dispatch(signInWithEmailAction(userData));
        Alert.alert("会員登録できました。", "", [
          {
            text: "OK",
            onPress: () => navigate("BottomTabNavigation"),
          },
        ]);

        // 永続化
        storeUser(userData);
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

    return axios
      .post("https://mercari-trace-server.herokuapp.com/api/v1/auth/sign_in/", {
        email,
        password,
      })
      .then((res) => {
        const userData = {
          isSignedIn: true,
          uid: res.data.data.id,
          name: res.data.data.name,
          headers: {
            accessToken: res.headers["access-token"],
            client: res.headers.client,
            uid: res.headers.uid,
          },
        };

        dispatch(signInWithEmailAction(userData));

        Alert.alert("ログインしました。", "", [
          {
            text: "OK",
            onPress: () => navigate("BottomTabNavigation"),
          },
        ]);

        // 永続化
        storeUser(userData);
      })
      .catch((err) => {
        Alert.alert("ログイン失敗です。\nもう一度やり直してください。");
        console.log(err);
      });
  };
};

export const signOut = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async (dispatch: (a: unknown) => void) => {
    setTimeout(() => setLoading(true), 500);

    Alert.alert("確認", "ログアウトしますか?", [
      {
        text: "はい",
        onPress: () => {
          dispatch(signOutAction());

          // // 永続化
          removeUser();

          setLoading(false);

          Alert.alert("ログアウトしました。", "", [
            {
              text: "OK",
            },
          ]);
        },
      },
      {
        text: "いいえ",
        style: "cancel",
        onPress: () => {
          setLoading(false);
        },
      },
    ]);
  };
};
