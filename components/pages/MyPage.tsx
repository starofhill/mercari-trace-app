import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";

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

export default function MyPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/user_icon.png")}
            style={styles.icon}
          />
          <Text style={styles.headerTitle}>会員情報・ログインへ</Text>
        </View>
        <View>
          <View style={styles.boxes}>
            <View style={styles.box}>
              <Text>いいね！・閲覧履歴</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.box}>
              <Text>保存した検索条件</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={styles.box}>
              <Text>出品した商品</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.box}>
              <Text>購入した商品</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.box}>
              <Text>下書き一覧</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.box}>
              <Text>持ち物一覧</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.boxTitle}>ガイド・お問い合わせ</Text>
            <View style={styles.box}>
              <Text>ガイド</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.box}>
              <Text>お問い合わせ</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.box}>
              <Text>メルカリボックス</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={styles.box}>
              <Text>バーション情報</Text>
              <Text>4.36.0(66004)</Text>
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={styles.box}>
              <Text>キャッシュを消去する</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
