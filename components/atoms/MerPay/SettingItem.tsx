import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SettingItem(props) {
  return (
    <TouchableOpacity style={styles.setting}>
      <Text>{props.text}</Text>
      <Icon name="angle-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  setting: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 500,
    marginRight: "auto",
    marginLeft: "auto",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
