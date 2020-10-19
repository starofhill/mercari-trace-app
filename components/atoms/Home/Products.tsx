import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Item } from "../../../Interface";
import { MediumSoldTag } from "./SoldTag";

interface Products {
  list: Item[];
  loading: boolean;
  onRefresh: () => void;
  refreshing: boolean;
}

const Products: React.FC<Products> = ({
  list,
  loading,
  onRefresh,
  refreshing,
}) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          data={list}
          contentContainerStyle={styles.scrollView}
          keyExtractor={(item) => `products-${item.id}`}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
