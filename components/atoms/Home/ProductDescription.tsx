import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Item } from "../../../Interface";

const ProductDescription: React.FC<{ productData: Item }> = ({
  productData,
}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>商品の説明</Text>
      <View style={styles.boxContent}>
        <Text style={styles.descriptionText}>{productData.description}</Text>
      </View>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
  },
  boxTitle: {
    marginBottom: 8,
    marginLeft: 15,
    color: "#555",
    fontSize: 14,
  },
  boxContent: {
    backgroundColor: "white",
    padding: 20,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 15,
  },
});
