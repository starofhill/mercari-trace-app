import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  box: {
    width: "100%",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 500,
    marginRight: "auto",
    marginLeft: "auto",
  },
  texts: {
    width: 320,
  },
  text: {
    lineHeight: 20,
  },
  date: {
    color: "#666",
    fontSize: 11,
    lineHeight: 20,
  },
  angle: {
    paddingLeft: 10,
  },
});

const data = [
  {
    id: 1,
    date: "1日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
  {
    id: 2,
    date: "2日前",
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
  },
  {
    id: 3,
    date: "1日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
  {
    id: 4,
    date: "1日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
  {
    id: 5,
    date: "1日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
  {
    id: 6,
    date: "1日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
  {
    id: 7,
    date: "7日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
  {
    id: 8,
    date: "8日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
  {
    id: 9,
    date: "9日前",
    text:
      "《ポイント獲得にはエントリーが必要です》いまだけ倍増！メルペイスマート払い利用で最大P2,000",
  },
];

export default function Notice() {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.box}
          key={item.id}
          onPress={() => {
            navigate("NoticeDetail");
          }}
        >
          <View style={styles.texts}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.angle}>
            <Icon name="angle-right" size={24} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
