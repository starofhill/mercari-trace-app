import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmail } from "../../../reducks/users/operations";

const SignInEmailInput: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.boxes}>
          <View style={styles.box}>
            <Text style={styles.textStyle}>メールアドレス</Text>
            <TextInput
              placeholder="メールまたは電話番号"
              style={styles.input}
              value={email}
              onChangeText={(newValue) => {
                setEmail(newValue);
              }}
              keyboardType="email-address"
              autoCompleteType="email"
            />
            <View />
          </View>
          <View style={styles.box}>
            <Text style={styles.textStyle}>パスワード</Text>
            <TextInput
              placeholder="7文字以上15文字以下の半角英数字"
              style={styles.input}
              value={password}
              secureTextEntry
              onChangeText={(newValue) => {
                setPassword(newValue);
              }}
              autoCompleteType="password"
              maxLength={15}
            />
            <View />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={() => {
              setLoading(true);
              dispatch(signInWithEmail(email, password, navigate)).then(() => {
                setLoading(false);
              });
            }}
          >
            <Text style={styles.buttonText}>ログイン</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
          <TouchableOpacity>
            <Text style={styles.loginText}>パスワードを忘れた方はこちら</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
    </View>
  );
};

export default SignInEmailInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  input: {
    width: "70%",
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
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
