import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { PurchaseProducts } from "../../../reducks/products/operations";
import { Store } from "../../../Interface";

interface PurchaseScreenFooter {
  id: number;
  paymentMethod: string;
}

const PurchaseScreenFooter: React.FC<PurchaseScreenFooter> = ({
  id,
  paymentMethod,
}) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector((state: Store) => state.users);

  return (
    <View style={styles.footer}>
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity style={styles.footerLeftButton}>
          <Text style={styles.footerLeftButtonText}>アップルPay</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity
          style={styles.footerRightButton}
          onPress={() => {
            dispatch(PurchaseProducts(id, paymentMethod, users, navigate));
          }}
        >
          <Text style={styles.footerRightButtonText}>購入する</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PurchaseScreenFooter;

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
  footerButtonContainer: {
    width: "45%",
  },
  footerLeftButton: {
    backgroundColor: "black",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
  },
  footerLeftButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerRightButton: {
    backgroundColor: "#EA352E",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
  },
  footerRightButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
