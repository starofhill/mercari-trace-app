import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { News, NewsDetail, Notice, NoticeDetail } from "../atoms/Notices";

const Tab = createMaterialTopTabNavigator();

const NoticesBody: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={styles.container}
      tabBarOptions={{ style: { marginTop: insets.top } }}
      swipeEnabled
    >
      <Tab.Screen name="お知らせ" component={Notice} />
      <Tab.Screen name="ニュース" component={News} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const NoticesPageTransition: React.FC = () => {
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
};

const NoticesWrapper: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NoticesPageTransition />
    </SafeAreaProvider>
  );
};

export default NoticesWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
