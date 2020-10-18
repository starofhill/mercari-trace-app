import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const PurchasePaymentMethodBox: React.FC<{
  name: string;
  setName: (name: string) => void;
}> = ({ name, setName }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        setName(name);
        navigate("PurchaseScreen");
      }}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default PurchasePaymentMethodBox;

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
    height: 55,
  },
});
