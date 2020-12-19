import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SmallSoldTag: React.FC = () => {
  return (
    <>
      <View style={styles.soldBox} />
      <Text style={styles.soldText}>SOLD</Text>
    </>
  );
};

export default SmallSoldTag;

const styles = StyleSheet.create({
  soldBox: {
    position: "absolute",
    margin: 3,
    borderBottomColor: "transparent",
    borderBottomWidth: 40,
    borderLeftColor: "#FE0412",
    borderLeftWidth: 40,
  },
  soldText: {
    position: "absolute",
    margin: 5,
    top: 4,
    left: -2,
    transform: [{ rotate: "-45deg" }],
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
