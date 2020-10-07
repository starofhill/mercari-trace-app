import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignInEmailInput: React.FC = () => {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    console.log(email, password);

    await axios
      .post("https://mercari-trace-server.herokuapp.com/api/v1/auth/sign_in/", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log("サインイン完了");
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗");
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text style={styles.textStyle}>メールアドレス</Text>
          <TextInput
            placeholder="メールまたは電話番号"
            value={email}
            onChangeText={(newValue) => {
              setEmail(newValue);
            }}
          />
          <View />
        </View>
        <View style={styles.box}>
          <Text style={styles.textStyle}>パスワード</Text>
          <TextInput
            placeholder="7文字以上の半角英数字"
            value={password}
            onChangeText={(newValue) => {
              setPassword(newValue);
            }}
          />
          <View />
        </View>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>ログイン</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <TouchableOpacity>
          <Text style={styles.loginText}>パスワードを忘れた方はこちら</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInEmailInput;

const styles = StyleSheet.create({
  boxes: {
    marginTop: 30,
    marginBottom: 10,
  },
  box: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 500,
    marginRight: "auto",
    marginLeft: "auto",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textStyle: {
    width: 110,
    fontWeight: "bold",
  },
  buttonBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#EA352E",
    width: 250,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  login: {
    marginTop: 20,
    borderBottomColor: "#136FFF",
    borderBottomWidth: 1,
    marginRight: "auto",
    marginLeft: "auto",
  },
  loginText: {
    color: "#136FFF",
  },
});
