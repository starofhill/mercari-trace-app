import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductFooterButton({ productData }) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.footer}>
      <View style={{ width: "40%" }}>
        <TouchableOpacity
          style={[styles.footerLeftButton, styles.footerButton]}
        >
          <Text style={styles.footerLeftButtonText}>
            メルペイスマート払い{"\n"}で購入手続き
          </Text>
        </TouchableOpacity>
        <SafeAreaView />
      </View>
      <View style={{ width: "50%" }}>
        <TouchableOpacity
          style={[styles.footerRightButton, styles.footerButton]}
          onPress={() => {
            navigate("Purchase", productData);
          }}
        >
          <Text style={styles.footerRightButtonText}>購入手続きへ</Text>
        </TouchableOpacity>
        <SafeAreaView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    right: 0,
    left: 0,
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
  footerLeftButton: {
    borderColor: "#EA352E",
    borderWidth: 1,
  },
  footerLeftButtonText: {
    color: "#EA352E",
    fontSize: 12,
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
});
