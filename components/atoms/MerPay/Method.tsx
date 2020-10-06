import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MethodItem } from ".";

const Method: React.FC = () => {
  return (
    <View style={styles.boxes}>
      <Text style={styles.boxTitle}>使い方</Text>
      <View style={styles.methods}>
        <MethodItem
          title="メルペイスマート払い"
          name="calendar"
          content="購入金額を"
          content2="翌月払う"
          color="#00BFFF"
        />
        <MethodItem
          title="定額払い"
          name="signal"
          content="購入金額を"
          content2="月々に分ける"
          color="#3366FF"
        />
        <MethodItem
          title="銀行チャージ"
          name="bank"
          content="銀行から入金して"
          content2="メルペイを使う"
          color="#00CC99"
        />
        <MethodItem
          title="本人確認"
          name="user-circle"
          content="登録できる銀行口座が"
          content2="ないときには"
          color="#555"
        />
        <MethodItem
          title="ID決済"
          name="barcode"
          content="スマホをかざして"
          content2="決済する方法"
          color="#CCCC00"
        />
        <MethodItem
          title="コード決済"
          name="qrcode"
          content="コードを見せて"
          content2="決済する方法"
          color="#FF6699"
        />
        <MethodItem
          title="ネット決済"
          name="shopping-cart"
          content="ネットショップでも"
          content2="メルペイが使える"
          color="#FF8856"
        />
        <MethodItem
          title="マイナポイント"
          name="thumbs-o-up"
          content="マイナポイントの"
          content2="申込み方法"
          color="#FF4F02"
        />
      </View>
    </View>
  );
};

export default Method;

const styles = StyleSheet.create({
  boxTitle: {
    color: "#777",
    paddingLeft: 10,
    paddingBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  boxes: {
    marginTop: 10,
    marginBottom: 20,
  },
  methods: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  method: {
    width: "45%",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
  },
  methodContent: {
    padding: 15,
  },
  methodContentText: {
    lineHeight: 16,
    fontSize: 12,
  },
  methodTitle: {
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  },
  methodTitleText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  methodTitleIcon: {
    backgroundColor: "white",
    padding: 3,
  },
});
