import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Store } from "../../../Interface";

const Products: React.FC = () => {
  const { navigate } = useNavigation();

  const selector = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const products = selector.products;
  const list = products.list;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchProducts());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          data={list}
          contentContainerStyle={styles.scrollView}
          keyExtractor={(item) => `products-${item.id}`}
          renderItem={({ item }) => (
            <View style={styles.imageBox}>
              <TouchableOpacity
                onPress={() => {
                  navigate("Product", { ...item });
                }}
              >
                {item.image_url ? (
                  <Image
                    source={{
                      uri: encodeURI(item.image_url.replace(/&/g, "%26")),
                    }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                ) : (
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  />
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
});
