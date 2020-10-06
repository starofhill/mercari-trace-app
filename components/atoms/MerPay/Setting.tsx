import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SettingItem } from ".";

const Setting: React.FC = () => {
  return (
    <View style={styles.boxes}>
      <Text style={styles.boxTitle}>設定</Text>
      <SettingItem text="メルペイ設定" />
      <SettingItem text="メルペイスマート払いの設定" />
      <SettingItem text="定額払いの設定" />
      <SettingItem text="お支払用銀行口座の登録" />
      <SettingItem text="振込申請期限の確認" />
      <SettingItem text="振込申請" />
      <SettingItem text="ガイド" />
      <SettingItem text="店舗へのメルペイの導入の申込み" />
    </View>
  );
};

export default Setting;

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
});
