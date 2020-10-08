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
        <CategoryBox title="レディース" setCategory={setCategory} />
        <CategoryBox title="メンズ" setCategory={setCategory} />
        <CategoryBox title="ベビー・キッズ" setCategory={setCategory} />
        <CategoryBox title="スマホ・タブレット" setCategory={setCategory} />
        <CategoryBox title="本・メディア" setCategory={setCategory} />
        <CategoryBox title="ゲーム" setCategory={setCategory} />
        <CategoryBox
          title="おもちゃ・ホビー・グッズ"
          setCategory={setCategory}
        />
        <CategoryBox title="コスメ・香水・美容" setCategory={setCategory} />
        <CategoryBox title="スポーツ・レジャー" setCategory={setCategory} />
        <CategoryBox title="家電・カメラ" setCategory={setCategory} />
        <CategoryBox
          title="インテリア・住まい・小物"
          setCategory={setCategory}
        />
        <CategoryBox title="自動車・オートバイ" setCategory={setCategory} />
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
