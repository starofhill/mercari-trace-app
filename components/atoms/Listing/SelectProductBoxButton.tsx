import React from "react";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SelectProductBoxButton: React.FC<{
  name: string;
  setName: (name: string) => void;
}> = ({ name, setName }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        setName(name);

        navigate("EnterProductInformation");
      }}
    >
      <Text>{name}</Text>
      <Icon name="angle-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );
};

export default SelectProductBoxButton;

const styles = StyleSheet.create({
  box: {
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
