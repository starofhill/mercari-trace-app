import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Search(props) {
    // console.log(props);

  return (
    <ScrollView>
      <View style={styles.boxes}>
        <TouchableOpacity style={styles.box}>
          <Text>写真から探す</Text>
          <Icon name="angle-right" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>カテゴリーから探す</Text>
          <Icon name="angle-right" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>ブランドから探す</Text>
          <Icon name="angle-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.boxes}>
        <Text style={styles.boxTitle}>保存した検索条件</Text>
        <TouchableOpacity style={styles.box}>
          <Text>保存した検索条件はまだありません</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxes}>
        <Text style={styles.boxTitle}>検索履歴</Text>
        <TouchableOpacity style={styles.box}>
          <Text>例 ガイド</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>例 お問い合わせ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>例 メルカリボックス</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    maxWidth: 500,
    height: 100,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#eee",
    borderWidth: 3,
    marginLeft: 10,
  },
  headerTitle: {
    fontWeight: "700",
    marginLeft: 10,
  },
  boxes: {
    marginTop: 10,
    marginBottom: 20,
  },
  box: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 500,
    marginRight: "auto",
    marginLeft: "auto",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
});
