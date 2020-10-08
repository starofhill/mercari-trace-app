import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Item, Store } from "../../../Interface";

const SearchScreen: React.FC<{
  value: string;
  order?: string;
  category?: string;
}> = ({ value, order, category }) => {
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
      if (category) {
        if (category === item.category) {
          if (value) {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
          } else return item;
        }
      } else {
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
        items
          ? order === "ascending"
            ? items.sort((a, b) => a.price - b.price)
            : order === "descending"
            ? items.sort((a, b) => b.price - a.price)
            : order === "newArrival"
            ? items.sort((a, b) => b.created_at.localeCompare(a.created_at))
            : items
          : list.sort((a, b) => a.id - b.id)
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

export default SearchScreen;

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
