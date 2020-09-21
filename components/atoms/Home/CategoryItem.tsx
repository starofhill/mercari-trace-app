import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function CategoryItem(props) {
  return (
    <View style={styles.categoryBox}>
      <TouchableOpacity
        style={[styles.iconBox, { backgroundColor: props.color }]}
      >
        <FontAwesome5 name={props.name} color="white" size={props.size} />
      </TouchableOpacity>
      <View style={styles.iconBoxTexts}>
        <Text style={styles.iconBoxText}>
          {props.category}
          {props.category2 && (
            <Text>
              {"\n"}
              {props.category2}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryBox: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
    width: 100,
  },
  iconBox: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 5,
  },
  iconBoxTexts: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  iconBoxText: {
    textAlign: "center",
    fontSize: 12,
  },
});
