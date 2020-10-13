import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CategoryBox, CategoryItems } from ".";

const categories = [
  "レディース",
  "メンズ",
  "ベビー・キッズ",
  "スマホ・タブレット",
  "本・メディア",
  "ゲーム",
  "おもちゃ・ホビー・グッズ",
  "コスメ・香水・美容",
  "スポーツ・レジャー",
  "家電・カメラ",
  "インテリア・住まい・小物",
  "自動車・オートバイ",
];

const Category: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <CategoryItems />
      <View style={styles.boxes}>
        {categories.map((category, categoryNumber) => (
          <CategoryBox title={category} key={categoryNumber.toString()} />
        ))}
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
