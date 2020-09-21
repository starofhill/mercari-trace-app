import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { News, NewsDetail, Notice, NoticeDetail } from "../atoms/Notices";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();

function NoticesBody() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={styles.container}
      tabBarOptions={{ style: { marginTop: insets.top } }}
      swipeEnabled={true}
    >
      <Tab.Screen name="お知らせ" component={Notice} />
      <Tab.Screen name="ニュース" component={News} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function NoticesPageTransition() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notice"
        component={NoticesBody}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="NoticeDetail" component={NoticeDetail} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
}

export default function NoticesWrapper() {
  return (
    <SafeAreaProvider>
      <NoticesPageTransition />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
