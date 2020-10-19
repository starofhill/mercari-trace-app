import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { CategoryBox, CategoryItems } from ".";
import { fetchProducts } from "../../../reducks/products/operations";

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

const Category: React.FC<{ loading: boolean }> = ({ loading }) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchProducts()).then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CategoryItems />
        <View style={styles.boxes}>
          {categories.map((category, categoryNumber) => (
            <CategoryBox title={category} key={categoryNumber.toString()} />
          ))}
        </View>
      </ScrollView>
      {loading && (
        <ActivityIndicator size="large" style={styles.loading} color="black" />
      )}
    </View>
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
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
