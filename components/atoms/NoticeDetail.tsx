import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 20,
  },
  couponBox: {
    backgroundColor: "white",
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
    borderLeftColor: "#EA352E",
    borderLeftWidth: 10,
  },
  content: {
    padding: 15,
  },
  percent: {
    fontWeight: "bold",
    fontSize: 32,
  },
  redColor: {
    color: "#EA352E",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  expirationDate: {
    color: "#555",
    marginTop: 20,
  },
  selector: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
  selectorBox: {
    width: "50%",
  },
  selectorButton: {
    padding: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
  },
  selectorText: {
    textAlign: "center",
  },
});

export default function NoticeDetail() {
  return (
    <View>
      <Text style={styles.text}>以下のクーポンがご利用できます</Text>
      <View style={styles.couponBox}>
        <View style={styles.content}>
          <Text style={styles.percent}>5%</Text>
          <Text style={styles.redColor}>5%のクーポン(ポイントバック)</Text>
          <Text style={styles.expirationDate}>[有効期限]2020/09/20 23:59</Text>
        </View>
        <View style={styles.selector}>
          <View style={styles.selectorBox}>
            <TouchableOpacity style={styles.selectorButton}>
              <Text style={styles.selectorText}>条件詳細を見る</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.selectorBox}>
            <TouchableOpacity style={styles.selectorButton}>
              <Text style={styles.selectorText}>商品を見る</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
