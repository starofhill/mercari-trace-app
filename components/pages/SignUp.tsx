import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { SignIn } from ".";
import { SignInEmailInput } from "../atoms/SignIn";
import { SignUpEmailInput } from "../atoms/SignUp";

const Stack = createStackNavigator();

const SignUp: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.title}>
        <Image
          source={require("../../assets/IMG_6606.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titleText}>mercari</Text>
      </View>
      <View style={styles.boxes}>
        <Text style={styles.boxTitle}>初めてご利用の方は</Text>
        <View>
          <TouchableOpacity style={[styles.box, styles.blackBackgroundColor]}>
            <Icon name="apple" size={24} color="white" />
            <Text style={styles.whiteColor}>Appleでサインアップ</Text>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, styles.blueBackgroundColor]}>
            <Icon name="facebook-official" size={24} color="white" />
            <Text style={styles.whiteColor}>Facebookで登録</Text>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, styles.whiteBackgroundColor]}>
            <Icon name="google" size={24} />
            <Text style={styles.blackColor}>Googleで登録</Text>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, styles.redBackgroundColor]}
            onPress={() => navigate("SignUpEmailInput")}
          >
            <Icon name="envelope-o" size={24} color="white" />
            <Text style={styles.whiteColor}>メールアドレスで登録</Text>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.login}>
        <TouchableOpacity onPress={() => navigate("SignIn")}>
          <Text style={styles.loginText}>こちらからログイン</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const SignUpContainer: React.FC = () => {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="MyPage"
        component={SignUp}
        options={{
          title: "会員登録",
          headerBackTitle: "",
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "ログイン",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SignUpEmailInput"
        component={SignUpEmailInput}
        options={{
          title: "会員登録",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SignInEmailInput"
        component={SignInEmailInput}
        options={{
          title: "ログイン",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SignUpContainer;

const styles = StyleSheet.create({
  component: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 48,
  },
  boxes: {
    alignItems: "center",
    borderColor: "black",
    borderTopWidth: 1,
    marginTop: 30,
    paddingTop: 15,
  },
  boxTitle: {
    backgroundColor: "white",
    position: "absolute",
    top: -16,
    padding: 10,
  },
  box: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    margin: 8,
  },
  blackBackgroundColor: {
    backgroundColor: "black",
  },
  blueBackgroundColor: {
    backgroundColor: "#3B5998",
  },
  whiteBackgroundColor: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  redBackgroundColor: {
    backgroundColor: "#FF4F02",
  },
  whiteColor: {
    color: "white",
    fontWeight: "bold",
  },
  blackColor: {
    color: "black",
    fontWeight: "bold",
  },
  login: {
    marginTop: 20,
    borderBottomColor: "#136FFF",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#136FFF",
  },
});
