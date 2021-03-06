import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Store, Item } from "../../../Interface";
import { MediumSoldTag } from "./SoldTag";

interface SearchCategory {
  category: string;
}

const SearchCategory: React.FC<SearchCategory> = ({ category }) => {
  const { navigate } = useNavigation();

  const selector = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const { products } = selector;
  const { list } = products;

  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const updateList = list.filter((item) => {
      // カテゴリー
      if (category && category === item.category) {
        return true;
      }

      return false;
    });

    setItems(updateList);
  }, [category, list]);

  return (
    <FlatList
      data={items}
      contentContainerStyle={styles.scrollView}
      keyExtractor={(item) => `products-${item.id}`}
      renderItem={({ item }) => (
        <View style={styles.imageBox}>
          <TouchableOpacity
            onPress={() => {
              navigate("Product", { ...item });
            }}
          >
            <Image
              source={{
                uri: encodeURI(item.image_url?.replace(/&/g, "%26")),
              }}
              style={styles.image}
              resizeMode="cover"
            />
            {item.status === "sold" && <MediumSoldTag />}
            <Text style={styles.price}>¥{item.price.toLocaleString()}</Text>
          </TouchableOpacity>
        </View>
      )}
      numColumns={3}
    />
  );
};

export default SearchCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageBox: {
    position: "relative",
  },
  image: {
    height: 110,
    width: 110,
    margin: 5,
    borderRadius: 5,
  },
  price: {
    position: "absolute",
    left: 5,
    bottom: 5,
    backgroundColor: "rgba(30,30,30,0.8)",
    color: "white",
    padding: 3,
  },
});
