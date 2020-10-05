import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackActions } from "@react-navigation/native";

const ProductHeaderButton: React.FC<{
  navigation: { dispatch: ({}) => void };
  name: string;
}> = ({ navigation, name }) => {
  const popAction = StackActions.pop(1);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.dispatch(popAction)}>
        <Icon
          name="angle-left"
          size={40}
          color="blue"
          style={styles.headerSide}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.headerSide}></View>
    </View>
  );
};

export default ProductHeaderButton;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    width: "80%",
    textAlign: "center",
  },
  headerSide: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
