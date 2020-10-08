import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

interface CategoryItem {
  color: string;
  name: string;
  size: number;
  category: string;
  category2?: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryItem: React.FC<CategoryItem> = (props) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.categoryBox}>
      <TouchableOpacity
        style={[styles.iconBox, { backgroundColor: props.color }]}
        onPress={() => {
          navigate("SearchCategory", [props.category]);
          {
            props.category2
              ? props.setCategory(props.category + "・" + props.category2)
              : props.setCategory(props.category);
          }
        }}
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
};

export default CategoryItem;

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
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  iconBoxText: {
    textAlign: "center",
    fontSize: 12,
  },
});
