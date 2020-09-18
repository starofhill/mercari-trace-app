import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SafeAreaView from "react-native-safe-area-view";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  input: {
    width: 256,
    height: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});

export default function Header() {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon name="qrcode" size={24} />
        <TextInput
          style={styles.input}
          onChangeText={(newValue) => {
            setValue(newValue);
          }}
          placeholder="検索"
        />
        <Icon name="check" size={24} />
      </View>
    </SafeAreaView>
  );
}
