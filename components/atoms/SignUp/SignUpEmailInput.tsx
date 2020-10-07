import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { signUpWithEmail } from "../../../reducks/users/operations";
import { useNavigation } from "@react-navigation/native";

const SignUpEmailInput: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.boxes}>
          <View style={styles.box}>
            <Text style={styles.textStyle}>メールアドレス</Text>
            <TextInput
              placeholder="メールまたは電話番号"
              value={email}
              onChangeText={(newValue) => {
                setEmail(newValue);
              }}
              style={styles.input}
              autoCapitalize="none"
            />
            <View />
          </View>
          <View style={styles.box}>
            <Text style={styles.textStyle}>パスワード</Text>
            <TextInput
              placeholder="7文字以上の半角英数字"
              value={password}
              secureTextEntry={true}
              onChangeText={(newValue) => {
                setPassword(newValue);
              }}
              maxLength={15}
              style={styles.input}
            />
            <View />
          </View>
          <View style={styles.box}>
            <Text style={styles.textStyle}>ニックネーム</Text>
            <TextInput
              placeholder="メルカリ内のユーザ名"
              value={name}
              onChangeText={(newValue) => {
                setName(newValue);
              }}
              style={styles.input}
              autoCapitalize="none"
            />
            <View />
          </View>
        </View>
        <View style={styles.boxes}>
          <View style={styles.gender}>
            <Text style={styles.textStyle}>性別(任意)</Text>
            <View style={styles.genderAnswer}>
              <TouchableOpacity style={styles.answerButton}>
                <Text style={styles.answerButtonText}>女性</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.answerButton}>
                <Text style={styles.answerButtonText}>男性</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.answerButton}>
                <Text style={styles.answerButtonText}>無回答</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.answerText}>
              性別は公開されることはありません
            </Text>
            <View />
          </View>
          <View style={styles.box}>
            <Text style={styles.textStyle}>招待コード</Text>
            <TextInput placeholder="お持ちの方のみ(任意)" />
            <View />
          </View>
        </View>
        <View style={styles.service}>
          <TouchableOpacity>
            <Text style={styles.serviceText}>
              「次へ」のボタンを押すことにより、
              <Text style={styles.serviceBlueText}>利用規約</Text>に
            </Text>
            <Text style={styles.serviceText}>同意したものとみなします。</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              dispatch(signUpWithEmail(email, password, name, navigate))
            }
          >
            <Text style={styles.buttonText}>次へ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpEmailInput;

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
  input: {
    width: "65%",
    marginRight: 100,
  },
  gender: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 500,
    marginRight: "auto",
    marginLeft: "auto",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  genderAnswer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  answerButton: {
    backgroundColor: "#999",
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  answerButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  answerText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 12,
    color: "#666",
  },
  textStyle: {
    width: 110,
    fontWeight: "bold",
  },
  buttonBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 250,
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
  service: {
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
  },
  serviceText: {
    textAlign: "center",
    marginTop: 5,
  },
  serviceBlueText: {
    borderBottomColor: "#136FFF",
    borderBottomWidth: 1,
    color: "#136FFF",
  },
});
