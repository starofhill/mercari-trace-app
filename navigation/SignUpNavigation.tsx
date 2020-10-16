import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SignInEmailInput } from "../components/atoms/SignIn";
import { SignUpEmailInput } from "../components/atoms/SignUp";
import { SignIn, SignUp } from "../components/pages";

const Stack = createStackNavigator();

const SignUpNavigation: React.FC = () => {
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

export default SignUpNavigation;
