import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Item } from "../../../Interface";

const sellerData = {
  starNumber: 3,
};

const ProductSeller: React.FC<{ productData: Item }> = ({ productData }) => {
  const starIcon = [];
  for (let i = 0; i < sellerData.starNumber; i += 1) {
    starIcon.push(<Icon name="star" size={18} color="#FFCC00" key={i} />);
  }

  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>出品者</Text>
      <TouchableOpacity style={[styles.boxContent, styles.sellerBox]}>
        <View style={styles.sellerContent}>
          <Image
            source={require("../../../assets/user_icon.png")}
            style={styles.icon}
          />
          <View style={styles.sellerInformation}>
            <Text style={styles.sellerName}>
              {productData.user && productData.user.name}
            </Text>
            <View style={styles.sellerStarContent}>
              {starIcon}
              <Text style={styles.sellerStarNumber}>
                {sellerData.starNumber}
              </Text>
            </View>
          </View>
        </View>
        <Icon name="angle-right" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductSeller;

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
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#eee",
    borderWidth: 3,
    marginLeft: 10,
  },
  sellerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sellerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  sellerInformation: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
  sellerName: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  sellerStarContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  sellerStarNumber: {
    fontSize: 12,
    color: "blue",
    marginLeft: 5,
  },
});
