import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { News, Notice } from "../atoms";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

const Tab = createMaterialTopTabNavigator();

function Notices() {
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

export default function NoticesWrapper() {
  return (
    <SafeAreaProvider>
      <Notices />
    </SafeAreaProvider>
  );
}
