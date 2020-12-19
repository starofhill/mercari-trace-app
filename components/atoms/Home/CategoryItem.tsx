import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addCategoryAction } from "../../../reducks/search/actions";

interface CategoryItem {
  color: string;
  name: string;
  size: number;
  category: string;
  category2?: string;
}

const CategoryItem: React.FC<CategoryItem> = ({
  color,
  name,
  size,
  category,
  category2,
}) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const onPressCategory = () => {
    navigate("SearchCategory", [category]);

    if (category2) {
      dispatch(addCategoryAction(`${category}・${category2}`));
    } else {
      dispatch(addCategoryAction(category));
    }
  };

  return (
    <View style={styles.categoryBox}>
      <TouchableOpacity
        style={[styles.iconBox, { backgroundColor: color }]}
        onPress={onPressCategory}
      >
        <FontAwesome5 name={name} color="white" size={size} />
      </TouchableOpacity>
      <View style={styles.iconBoxTexts}>
        <Text style={styles.iconBoxText}>
          {category}
          {category2 && (
            <Text>
              {"\n"}
              {category2}
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
