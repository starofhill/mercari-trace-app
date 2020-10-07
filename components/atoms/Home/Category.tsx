import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CategoryBox, CategoryItems } from ".";

const Category: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setCategory }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <CategoryItems setCategory={setCategory} />
      <View style={styles.boxes}>
        <CategoryBox title="レディース" />
        <CategoryBox title="メンズ" />
        <CategoryBox title="ベビー・キッズ" />
        <CategoryBox title="インテリア・住まい・小物" />
        <CategoryBox title="本・音楽・ゲーム" />
      </View>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  boxes: {
    marginTop: 30,
  },
});
