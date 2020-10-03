import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Navigation } from "../../../Interface";

const Purchase: React.FC<Navigation> = (props) => {
  const { navigate } = useNavigation();
  const productData = props.route.params;

  return (
    <View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerLeftButton}>
          <Text style={styles.footerLeftButtonText}>アップルPay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerRightButton}
          onPress={() => {
            navigate("Purchase");
          }}
        >
          <Text style={styles.footerRightButtonText}>購入する</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.imageBox}>
          <Image
            source={require("../../../assets/seigiman369_TP_V.jpg")}
            style={styles.image}
          />
          <View style={styles.title}>
            <Text>{productData.name}</Text>
            <View style={styles.priceBox}>
              <Text style={styles.shipping}>送料込み</Text>
              <Text style={styles.price}>
                ¥{productData.price.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.boxes}>
          <TouchableOpacity style={[styles.box, styles.borderBottom]}>
            <View>
              <Text style={styles.useProceeds}>売上金の使用</Text>
              <View style={styles.useItemBox}>
                <Text style={styles.proceeds}>売上金:</Text>
                <Text style={styles.proceeds}>¥0</Text>
              </View>
            </View>
            <View>
              <Text style={styles.pointSubscribe}>売上金でポイントを購入</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <View>
              <Text>ポイントを使用</Text>
              <View style={styles.useItemBox}>
                <Text>P100</Text>
                <Text>P0</Text>
              </View>
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.usePoints}>P100を使用する</Text>
              <Icon name="angle-right" size={22} color="#888" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.boxes}>
          <TouchableOpacity style={[styles.box, styles.borderBottom]}>
            <Text>支払い方法</Text>
            <View style={styles.rightBox}>
              <Text style={styles.paymentNumber}>************1234</Text>
              <Icon name="angle-right" size={22} color="#888" />
            </View>
          </TouchableOpacity>
          <View style={styles.box}>
            <Text>支払い金額</Text>
            <View>
              <Text style={styles.paymentMoney}>
                ¥{productData.price.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.delivery}>
          <Text>配送先</Text>
          <View style={styles.deliveryRight}>
            <View style={styles.deliveryTexts}>
              <Text style={styles.deliveryText}>飯塚花子(イイヅカ ハナコ)</Text>
              <Text style={styles.deliveryText}>〒111-1111</Text>
              <Text style={styles.deliveryText}>福岡県福岡市博多区</Text>
              <Text></Text>
              <Text style={styles.deliveryText}>※郵便局/コンビニ受取可能</Text>
              <Text style={styles.deliveryText}>※匿名配送</Text>
            </View>
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Purchase;

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
  footerLeftButton: {
    backgroundColor: "black",
    width: "45%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  footerLeftButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  footerRightButton: {
    backgroundColor: "#EA352E",
    height: 50,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  footerRightButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageBox: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 70,
  },
  image: {
    width: 70,
    height: 70,
    position: "absolute",
  },
  title: {
    padding: 10,
    flexWrap: "nowrap",
    paddingLeft: 80,
    paddingBottom: 0,
    width: "100%",
  },
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 5,
  },
  shipping: {
    backgroundColor: "#EA352E",
    padding: 3,
    color: "white",
    fontWeight: "bold",
    marginRight: 8,
    fontSize: 10,
  },
  price: {
    fontWeight: "bold",
  },
  boxes: {
    marginTop: 50,
    backgroundColor: "white",
    paddingRight: 15,
    paddingLeft: 15,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    height: 70,
  },
  borderBottom: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  useItemBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  useProceeds: {},
  proceeds: {
    color: "#555",
  },
  pointSubscribe: {
    borderColor: "#555",
    borderWidth: 1,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 5,
  },
  rightBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  usePoints: {
    fontWeight: "bold",
    marginRight: 5,
  },
  paymentNumber: {
    marginRight: 5,
  },
  paymentMoney: {
    fontSize: 24,
    fontWeight: "bold",
  },
  delivery: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    marginTop: 50,
    marginBottom: 120,
  },
  deliveryRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deliveryTexts: {
    marginRight: 5,
  },
  deliveryText: {
    fontSize: 12,
  },
});
