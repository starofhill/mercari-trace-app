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

const data = [
  {
    id: 1,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 2,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 3,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 4,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 5,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 6,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 7,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 8,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 9,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
  {
    id: 10,
    text:
      "【メンテナンス】静岡銀行のシステムメンテナンスについて2020/09/18日(金) 21:00 ~ 2020/09/23(水) 08:00",
    date: "2020年9月16日 18:00",
  },
];

export default function News() {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => `news-${item.id}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            navigate("NewsDetail");
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
