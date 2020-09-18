import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";

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
  histories: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  history: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
    textAlign: "center",
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
  lightBlueColor: {
    color: "#00BFFF",
  },
  lightBlueBackgroundColor: {
    backgroundColor: "#00BFFF",
  },
  blueColor: {
    color: "#3366FF",
  },
  blueBackgroundColor: {
    backgroundColor: "#3366FF",
  },
  greenColor: {
    color: "#00CC99",
  },
  greenBackgroundColor: {
    backgroundColor: "#00CC99",
  },
  blackColor: {
    color: "#555",
  },
  blackBackgroundColor: {
    backgroundColor: "#555",
  },
  yellowColor: {
    color: "#CCCC00",
  },
  yellowBackgroundColor: {
    backgroundColor: "#CCCC00",
  },
  pinkColor: {
    color: "#FF6699",
  },
  pinkBackgroundColor: {
    backgroundColor: "#FF6699",
  },
  lightOrangeColor: {
    color: "#FF8856",
  },
  lightOrangeBackgroundColor: {
    backgroundColor: "#FF8856",
  },
  darkOrangeColor: {
    color: "#FF4F02",
  },
  darkOrangeBackgroundColor: {
    backgroundColor: "#FF4F02",
  },
  setting: {
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
});

export default function MerPay() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.boxes}>
            <Text style={styles.boxTitle}>使った履歴</Text>
            <View style={styles.histories}>
              <View style={styles.history}>
                <Icon name="yen" size={24} />
                <Text>売上金</Text>
              </View>
              <View style={styles.history}>
                <Icon name="product-hunt" size={24} />
                <Text>ポイント</Text>
              </View>
              <View style={styles.history}>
                <Icon name="mobile" size={32} />
                <Text style={{ textAlign: "center" }}>
                  メルペイ{"\n"}スマート払い
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.boxTitle}>使い方</Text>
            <View style={styles.methods}>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    購入金額を{"\n"}翌月払う
                  </Text>
                </View>
                <View
                  style={[styles.methodTitle, styles.lightBlueBackgroundColor]}
                >
                  <Text style={styles.methodTitleText}>
                    メルペイスマート払い
                  </Text>
                  <Icon
                    name="calendar"
                    size={16}
                    style={[styles.methodTitleIcon, styles.lightBlueColor]}
                  />
                </View>
              </View>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    購入金額を{"\n"}月々に分ける
                  </Text>
                </View>
                <View style={[styles.methodTitle, styles.blueBackgroundColor]}>
                  <Text style={styles.methodTitleText}>定額払い</Text>
                  <Icon
                    name="signal"
                    size={16}
                    style={[styles.methodTitleIcon, styles.blueColor]}
                  />
                </View>
              </View>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    銀行から入金して{"\n"}メルペイを使う
                  </Text>
                </View>
                <View style={[styles.methodTitle, styles.greenBackgroundColor]}>
                  <Text style={styles.methodTitleText}>銀行チャージ</Text>
                  <Icon
                    name="bank"
                    size={16}
                    style={[styles.methodTitleIcon, styles.greenColor]}
                  />
                </View>
              </View>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    登録できる銀行口座が{"\n"}ないときには
                  </Text>
                </View>
                <View style={[styles.methodTitle, styles.blackBackgroundColor]}>
                  <Text style={styles.methodTitleText}>本人確認</Text>
                  <Icon
                    name="user-circle"
                    size={16}
                    style={[styles.methodTitleIcon, styles.blackColor]}
                  />
                </View>
              </View>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    スマホをかざして{"\n"}決済する方法
                  </Text>
                </View>
                <View
                  style={[styles.methodTitle, styles.yellowBackgroundColor]}
                >
                  <Text style={styles.methodTitleText}>ID決済</Text>
                  <Icon
                    name="barcode"
                    size={16}
                    style={[styles.methodTitleIcon, styles.yellowColor]}
                  />
                </View>
              </View>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    コードを見せて{"\n"}決済する方法
                  </Text>
                </View>
                <View style={[styles.methodTitle, styles.pinkBackgroundColor]}>
                  <Text style={styles.methodTitleText}>コード決済</Text>
                  <Icon
                    name="qrcode"
                    size={16}
                    style={[styles.methodTitleIcon, styles.pinkColor]}
                  />
                </View>
              </View>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    ネットショップでも{"\n"}メルペイが使える
                  </Text>
                </View>
                <View
                  style={[
                    styles.methodTitle,
                    styles.lightOrangeBackgroundColor,
                  ]}
                >
                  <Text style={styles.methodTitleText}>ネット決済</Text>
                  <Icon
                    name="shopping-cart"
                    size={16}
                    style={[styles.methodTitleIcon, styles.lightOrangeColor]}
                  />
                </View>
              </View>
              <View style={styles.method}>
                <View style={styles.methodContent}>
                  <Text style={styles.methodContentText}>
                    マイナポイントの{"\n"}申込み方法
                  </Text>
                </View>
                <View
                  style={[styles.methodTitle, styles.darkOrangeBackgroundColor]}
                >
                  <Text style={styles.methodTitleText}>マイナポイント</Text>
                  <Icon
                    name="thumbs-o-up"
                    size={16}
                    style={[styles.methodTitleIcon, styles.darkOrangeColor]}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.boxes}>
            <Text style={styles.boxTitle}>設定</Text>
            <View style={styles.setting}>
              <Text>メルペイ設定</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.setting}>
              <Text>メルペイスマート払いの設定</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.setting}>
              <Text>定額払いの設定</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.setting}>
              <Text>お支払用銀行口座の登録</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.setting}>
              <Text>振込申請期限の確認</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.setting}>
              <Text>振込申請</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.setting}>
              <Text>ガイド</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
            <View style={styles.setting}>
              <Text>店舗へのメルペイの導入の申込み</Text>
              <Icon name="angle-right" size={24} color="#ccc" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
