import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { HistoryItem } from ".";

export default function History() {
  return (
    <View style={styles.boxes}>
      <Text style={styles.boxTitle}>使った履歴</Text>
      <View style={styles.histories}>
        <HistoryItem name="yen" text="売上金" size="24" />
        <HistoryItem name="product-hunt" text="ポイント" size="24" />
        <HistoryItem
          name="mobile"
          text="メルペイ"
          text2="スマート払い"
          size="32"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxes: {
    marginTop: 10,
    marginBottom: 20,
  },
  boxTitle: {
    color: "#777",
    paddingLeft: 10,
    paddingBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  histories: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
