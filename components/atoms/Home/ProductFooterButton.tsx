import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Item } from "../../../Interface";

const ProductFooterButton: React.FC<{
  productData: Item;
}> = ({ productData }) => {
  const { navigate } = useNavigation();
  const users = useSelector((state) => state.users);

  return (
    <View style={styles.footer}>
      {productData.status !== "sold" && users.uid !== productData.user_id && (
        <>
          <View style={styles.footerLeftButtonContainer}>
            <TouchableOpacity
              style={[styles.footerLeftButton, styles.footerButton]}
            >
              <Text style={styles.footerLeftButtonText}>あと払いする</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerRightButtonContainer}>
            <TouchableOpacity
              style={[styles.footerRightButton, styles.footerButton]}
              onPress={() => {
                navigate("PurchaseScreen", productData);
              }}
            >
              <Text style={styles.footerRightButtonText}>購入手続きへ</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {productData.status !== "sold" && users.uid === productData.user_id && (
        <View style={styles.productEditingButtonContainer}>
          <TouchableOpacity
            style={[styles.productEditingButton, styles.footerButton]}
          >
            <Text style={styles.productEditingButtonText}>商品の編集</Text>
          </TouchableOpacity>
        </View>
      )}

      {productData.status === "sold" && (
        <View style={styles.productEditingButtonContainer}>
          <TouchableOpacity
            style={[styles.footerSoldButton, styles.footerButton]}
          >
            <Text style={styles.productEditingButtonText}>売り切れました</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProductFooterButton;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    width: "100%",
  },
  footerButton: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginRight: 5,
    marginBottom: 0,
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
  },
  footerLeftButtonContainer: {
    width: "40%",
  },
  footerRightButtonContainer: {
    width: "50%",
  },
  footerLeftButton: {
    borderColor: "#EA352E",
    borderWidth: 1,
  },
  footerLeftButtonText: {
    color: "#EA352E",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  footerRightButton: {
    backgroundColor: "#EA352E",
  },
  footerRightButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  productEditingButtonContainer: {
    width: "95%",
  },
  productEditingButton: {
    backgroundColor: "#88CC33",
  },
  productEditingButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  footerSoldButton: {
    backgroundColor: "#FCBFCC",
  },
});
