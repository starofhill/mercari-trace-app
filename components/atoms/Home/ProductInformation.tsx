import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Item } from "../../../Interface";
import {
  conditionConversion,
  prefectureConversion,
  shippingDayConversion,
  shippingFeeConversion,
  shippingMethodConversion,
} from "./ProductInformationConversion";

const ProductInformation: React.FC<{ productData: Item }> = ({
  productData,
}) => {
  const condition = conditionConversion(productData.condition);
  const shippingFee = shippingFeeConversion(productData.shipping_fee);
  const shippingMethod = shippingMethodConversion(productData.shipping_method);
  const prefecture = prefectureConversion(productData.prefecture);
  const shippingDay = shippingDayConversion(productData.shipping_day);

  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>商品の情報</Text>
      <View style={styles.boxContent}>
        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>カテゴリー</Text>
          <Text style={styles.informationContent}>{productData.category}</Text>
        </View>
        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>商品の状態</Text>
          <Text style={styles.informationContent}>{condition}</Text>
        </View>
        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>配送料の負担</Text>
          <Text style={styles.informationContent}>{shippingFee}</Text>
        </View>
        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>配送の方法</Text>
          <Text style={styles.informationContent}>{shippingMethod}</Text>
        </View>
        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>発送元の地域</Text>
          <Text style={styles.informationContent}>{prefecture}</Text>
        </View>
        <View style={[styles.informationBox, styles.noBorder]}>
          <Text style={styles.informationTitle}>発送までの日数</Text>
          <Text style={styles.informationContent}>{shippingDay}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductInformation;

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
  },
  informationBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  informationTitle: {
    width: 120,
    color: "#555",
    backgroundColor: "#f3f3f3",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  informationContent: {
    fontSize: 13,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
