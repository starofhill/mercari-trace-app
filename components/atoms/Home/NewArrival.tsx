import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Item, Store } from "../../../Interface";

const NewArrival: React.FC<{ value?: string; category?: string }> = ({
  value,
  category,
}) => {
  const { navigate } = useNavigation();

  const selector = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const products = selector.products;
  const list = products.list;

  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const updateList = list.filter((item) => {
      // カテゴリー
      if (category) {
        if (category === item.category) {
          // 検索
          if (value) {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
          } else return item;
        }
      } else {
        // 検索
        if (value) {
          return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        } else return item;
      }
    });

    setItems(updateList);
  }, [value]);

  return (
    <FlatList
      data={
        value
          ? items
            ? items.sort((a, b) => b.created_at.localeCompare(a.created_at))
            : list
          : list.sort((a, b) => b.created_at.localeCompare(a.created_at))
      }
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
                uri: encodeURI(item.image_url!.replace(/&/g, "%26")),
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.price}>¥{item.price.toLocaleString()}</Text>
          </TouchableOpacity>
        </View>
      )}
      numColumns={3}
    />
  );
};

export default NewArrival;

const styles = StyleSheet.create({
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
