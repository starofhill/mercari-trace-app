import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MediumSoldTag: React.FC = () => {
  return (
    <>
      <View style={styles.soldBox} />
      <Text style={styles.soldText}>SOLD</Text>
    </>
  );
};

export default MediumSoldTag;

const styles = StyleSheet.create({
  soldBox: {
    position: "absolute",
    margin: 5,
    borderBottomColor: "transparent",
    borderBottomWidth: 40,
    borderLeftColor: "#FE0412",
    borderLeftWidth: 40,
  },
  soldText: {
    position: "absolute",
    margin: 5,
    top: 6,
    left: 0,
    transform: [{ rotate: "-45deg" }],
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
