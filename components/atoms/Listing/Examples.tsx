import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Examples() {
  return (
    <View style={styles.examples}>
      <View style={styles.examplesTitle}>
        <Image
          source={require("../../../assets/IMG_6603.jpeg")}
          style={{ width: 300, height: 150 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.example}>
        <Text style={styles.exampleTitle}>Tシャツ・薄い衣類の梱包例</Text>
        <View style={styles.exampleImages}>
          <Image
            source={require("../../../assets/IMG_6586.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6587.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6588.jpeg")}
            style={styles.exampleImage}
          />
        </View>
        <View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❶</Text>
            <Text style={styles.exampleSentence}>
              きれいに折り畳み、防水のためにビニール袋に入れます。
            </Text>
          </View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❷</Text>
            <Text style={styles.exampleSentence}>
              宅配ビニール袋や封筒、薄型箱に入れて発送します。
            </Text>
          </View>
        </View>
        <View style={styles.shippingMethod}>
          <Text style={styles.shippingMethodTitle}>おすすめ配送方法</Text>
          <View>
            <Text>
              らくらくメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                ネコポス¥<Text style={styles.examplePrice}>195</Text>
              </Text>
            </Text>
            <Text>
              ゆうゆうメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                ゆうパケット¥<Text style={styles.examplePrice}>175</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.example}>
        <Text style={styles.exampleTitle}>割れ物・雑貨類の梱包例</Text>
        <View style={styles.exampleImages}>
          <Image
            source={require("../../../assets/IMG_6591.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6592.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6593.jpeg")}
            style={styles.exampleImage}
          />
        </View>
        <View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❶</Text>
            <Text style={styles.exampleSentence}>
              壊れないように緩衝材シート等で包みます。
            </Text>
          </View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❷</Text>
            <Text style={styles.exampleSentence}>
              緩衝材シートや新聞紙などをつめた段ボール箱に入れて発送します。
            </Text>
          </View>
        </View>
        <View style={styles.shippingMethod}>
          <Text style={styles.shippingMethodTitle}>おすすめ配送方法</Text>
          <View>
            <Text>
              らくらくメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                宅急便コンパクト¥
                <Text style={styles.examplePrice}>380~</Text>
              </Text>
            </Text>
            <Text>
              ゆうゆうメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                ゆうパケットプラス¥
                <Text style={styles.examplePrice}>375~</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.example}>
        <Text style={styles.exampleTitle}>かばん・靴類の梱包例</Text>
        <View style={styles.exampleImages}>
          <Image
            source={require("../../../assets/IMG_6594.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6595.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6596.jpeg")}
            style={styles.exampleImage}
          />
        </View>
        <View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❶</Text>
            <Text style={styles.exampleSentence}>
              傷がつかないように緩衝材シート等で包みます。
            </Text>
          </View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❷</Text>
            <Text style={styles.exampleSentence}>
              厚手の紙袋や段ボール箱に入れ、ガムテープ等でしっかりとめて発送します。
            </Text>
          </View>
        </View>
        <View style={styles.shippingMethod}>
          <Text style={styles.shippingMethodTitle}>おすすめ配送方法</Text>
          <View>
            <Text>
              らくらくメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                宅急便¥<Text style={styles.examplePrice}>700~</Text>
              </Text>
            </Text>
            <Text>
              ゆうゆうメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                ゆうパック¥<Text style={styles.examplePrice}>700~</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.example}>
        <Text style={styles.exampleTitle}>漫画セット・本の梱包例</Text>
        <View style={styles.exampleImages}>
          <Image
            source={require("../../../assets/IMG_6597.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6598.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6599.jpeg")}
            style={styles.exampleImage}
          />
        </View>
        <View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❶</Text>
            <Text style={styles.exampleSentence}>
              防水のためにビニール袋等で包みます。
            </Text>
          </View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❷</Text>
            <Text style={styles.exampleSentence}>
              緩衝材をつめた段ボール箱に入れ、ガムテープ等でしっかりとめて発送します。
            </Text>
          </View>
        </View>
        <View style={styles.shippingMethod}>
          <Text style={styles.shippingMethodTitle}>おすすめ配送方法</Text>
          <View>
            <Text>
              らくらくメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                宅急便¥<Text style={styles.examplePrice}>700~</Text>
              </Text>
            </Text>
            <Text>
              ゆうゆうメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                ゆうパック¥<Text style={styles.examplePrice}>700~</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.example}>
        <Text style={styles.exampleTitle}>パソコン・家電製品の梱包例</Text>
        <View style={styles.exampleImages}>
          <Image
            source={require("../../../assets/IMG_6600.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6601.jpeg")}
            style={styles.exampleImage}
          />
          <Image
            source={require("../../../assets/IMG_6602.jpeg")}
            style={styles.exampleImage}
          />
        </View>
        <View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❶</Text>
            <Text style={styles.exampleSentence}>
              家電製品は壊れないように緩衝材シート等しっかりとした梱包をします。
            </Text>
          </View>
          <View style={styles.exampleOrder}>
            <Text style={styles.exampleNumber}>❷</Text>
            <Text style={styles.exampleSentence}>
              元箱がある場合には元箱へしまって、配送用段ボール箱の中で動かないよう、しっかりと隙間を埋めて配送します。
            </Text>
          </View>
        </View>
        <View style={styles.shippingMethod}>
          <Text style={styles.shippingMethodTitle}>おすすめ配送方法</Text>
          <View>
            <Text>
              らくらくメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                宅急便¥<Text style={styles.examplePrice}>700~</Text>
              </Text>
            </Text>
            <Text>
              ゆうゆうメルカリ便:{" "}
              <Text style={styles.fontWightBold}>
                ゆうパック¥<Text style={styles.examplePrice}>700~</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  examples: {
    padding: 10,
  },
  examplesTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  example: {
    borderTopColor: "#2E8B57",
    borderTopWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  exampleTitle: {
    color: "#2E8B57",
    fontWeight: "bold",
    fontSize: 20,
  },
  exampleImages: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  exampleImage: {
    height: 100,
    width: 100,
  },
  exampleOrder: {
    flexDirection: "row",
    marginTop: 10,
  },
  exampleNumber: {
    fontSize: 16,
    color: "#2E8B57",
    marginRight: 5,
  },
  exampleSentence: {
    fontSize: 16,
    width: 300,
    flexWrap: "wrap",
    lineHeight: 20,
  },
  shippingMethod: {
    backgroundColor: "#eee",
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 25,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  shippingMethodTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#2E8B57",
    color: "white",
    paddingTop: 3,
    paddingRight: 5,
    paddingBottom: 3,
    paddingLeft: 5,
    fontSize: 12,
  },
  fontWightBold: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationColor: "#AFEEEE",
  },
  examplePrice: {
    fontSize: 20,
  },
});
