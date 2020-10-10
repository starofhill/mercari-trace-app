import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Store } from "../../../Interface";

const Products: React.FC<{ order?: string }> = ({ order }) => {
  const { navigate } = useNavigation();

  const selector = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const { products } = selector;
  const { list } = products;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchProducts()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          data={
            order === "newArrival"
              ? list.sort((a, b) => b.created_at.localeCompare(a.created_at))
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
                    uri: encodeURI(item.image_url?.replace(/&/g, "%26")),
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
                {item.status === "sale" && (
                  <>
                    <View style={styles.soldBox} />
                    <Text style={styles.soldText}>SOLD</Text>
                  </>
                )}
                <Text style={styles.price}>¥{item.price.toLocaleString()}</Text>
              </TouchableOpacity>
            </View>
          )}
          numColumns={3}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

export default Products;

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
  soldBox: {
    position: "absolute",
    margin: 5,
    borderBottomColor: "transparent",
    borderBottomWidth: 40,
    borderLeftColor: "#FE0412",
    borderLeftWidth: 40,
  },
  soldText: {
    position: "absolute",
    margin: 5,
    top: 6,
    left: 0,
    transform: [{ rotate: "-45deg" }],
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
