import React from "react";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SelectProductDetailsButton: React.FC<{
  categoryName?: string;
  category?: string;
  conditionName?: string;
  condition?: number;
  setCategory?: (categoryName: string) => void;
  setCondition?: (categoryName: string) => void;
}> = ({
  categoryName,
  category,
  conditionName,
  condition,
  setCategory,
  setCondition,
}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        if (setCategory && categoryName) {
          setCategory(categoryName);
        }

        if (setCondition && conditionName) {
          setCondition(conditionName);
        }

        navigate("EnterProductInformation");
      }}
    >
      {categoryName ? (
        <Text>{categoryName}</Text>
      ) : (
        <Text>{conditionName}</Text>
      )}
      <Icon name="angle-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );
};

export default SelectProductDetailsButton;

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
