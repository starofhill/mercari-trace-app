import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { News, Notice } from "../atoms/Notices";

const Tab = createMaterialTopTabNavigator();

const Notices: React.FC = () => {
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

export default Notices;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
