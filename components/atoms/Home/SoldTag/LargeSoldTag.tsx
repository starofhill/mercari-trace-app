import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LargeSoldTag: React.FC = () => {
  return (
    <>
      <View style={styles.soldBox} />
      <Text style={styles.soldText}>SOLD</Text>
    </>
  );
};

export default LargeSoldTag;

const styles = StyleSheet.create({
  soldBox: {
    position: "absolute",
    borderBottomColor: "transparent",
    borderBottomWidth: 120,
    borderLeftColor: "#FE0412",
    borderLeftWidth: 120,
    zIndex: 10,
  },
  soldText: {
    position: "absolute",
    margin: 5,
    top: 20,
    left: 0,
    transform: [{ rotate: "-45deg" }],
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    zIndex: 10,
  },
});
