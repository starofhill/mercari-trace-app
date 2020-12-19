import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Item } from "../../../Interface";
import { LargeSoldTag } from "./SoldTag";

interface ProductTop {
  productData: Item;
  setProductData: React.Dispatch<React.SetStateAction<Item>>;
}

const ProductTop: React.FC<ProductTop> = ({ productData, setProductData }) => {
  const { navigate } = useNavigation();

  return (
    <>
      <Swiper style={styles.wrapper} showsButtons>
        <>
          {productData.status === "sold" && <LargeSoldTag />}
          <Image
            source={{
              uri: encodeURI(productData.image_url?.replace(/&/g, "%26")),
            }}
            style={styles.slide}
            resizeMode="contain"
          />
        </>
      </Swiper>
      <View style={styles.main}>
        <Text style={styles.title}>{productData.name}</Text>
        <Text style={styles.brand}>{productData.brand}</Text>
        <View style={styles.prices}>
          <Text style={styles.price}>
            ¥{productData.price.toLocaleString()}
          </Text>
          <Text style={styles.shippingCharges}>
            {productData.shippingCharges}
          </Text>
        </View>
        <View style={styles.buttonBoxes}>
          <View style={styles.buttonBox}>
            <View style={styles.buttonItem}>
              <TouchableOpacity style={styles.button}>
                <Text>いいね!</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>{productData.likes}</Text>
            </View>
            <View style={styles.buttonItem}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigate("CommentContainer", {
                    productData,
                    setProductData,
                  })
                }
              >
                <Text>コメント</Text>
              </TouchableOpacity>
            </View>
            {productData.comments && productData.comments.length > 0 && (
              <Text>{productData.comments.length}</Text>
            )}
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.button}>
              <Text>…</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductTop;

const styles = StyleSheet.create({
  wrapper: {
    height: 380,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 5,
  },
  brand: {
    fontSize: 12,
    color: "#555",
    marginBottom: 15,
  },
  prices: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 32,
    color: "#FE0412",
    marginRight: 10,
  },
  shippingCharges: {
    fontSize: 12,
  },
  buttonBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#eee",
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 20,
    marginRight: 5,
  },
  buttonText: {
    marginRight: 30,
  },
});
