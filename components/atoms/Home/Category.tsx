import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginRight: 20,
    marginLeft: 20,
  },
  categoryBox: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
    width: 100,
  },
  iconBox: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 5,
  },
  iconBoxTexts: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  iconBoxText: {
    textAlign: "center",
    fontSize: 12,
  },
  seeMore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 20,
  },
  boxes: {
    marginTop: 30,
  },
  box: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    borderTopColor: "#eee",
    borderTopWidth: 1,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  boxTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTitle: {
    fontWeight: "bold",
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  seeAllText: {
    color: "#6495ED",
    marginRight: 5,
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 10,
  },
  imageBox: {
    position: "relative",
  },
  image: {
    height: 80,
    width: 80,
    margin: 3,
    borderRadius: 5,
  },
  price: {
    position: "absolute",
    left: 5,
    bottom: 5,
    backgroundColor: "rgba(30,30,30,0.8)",
    color: "white",
    padding: 3,
  },
});

const data = [
  { id: 1, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 2, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 3, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 4, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 5, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 6, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 7, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 8, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 9, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 10, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 11, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 12, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 13, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 14, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 15, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 16, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 17, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 18, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 19, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 20, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 21, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 22, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 23, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 24, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 25, src: "../../../assets/seigiman369_TP_V.jpg", price: 1000 },
];

export default function Category() {
  const { navigate } = useNavigation();
  const [showFlag, setShowFlag] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View>
        <View style={styles.category}>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#FF1A6F" }]}
            >
              <AntDesign name="man" color="white" size="24" />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>レディース</Text>
            </View>
          </View>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#005FFF" }]}
            >
              <AntDesign name="woman" color="white" size="24" />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>メンズ</Text>
            </View>
          </View>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#FFCC00" }]}
            >
              <FontAwesome5 name="baby" color="white" size="32" />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>ベビー・キッズ</Text>
            </View>
          </View>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#CC66CC" }]}
            >
              <FontAwesome name="mobile-phone" color="white" size="40" />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>スマホ{"\n"}タブレット</Text>
            </View>
          </View>
        </View>
        <View style={styles.category}>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#FF4F02" }]}
            >
              <FontAwesome5 name="book-open" color="white" size="24" />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>本・メディア</Text>
            </View>
          </View>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#FF8C00" }]}
            >
              <FontAwesome5 name="gamepad" color="white" size="28" />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>ゲーム</Text>
            </View>
          </View>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#32CD32" }]}
            >
              <MaterialCommunityIcons
                name="cards-playing-outline"
                color="white"
                size="32"
              />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>
                おもちゃ{"\n"}ホビー・グッズ
              </Text>
            </View>
          </View>
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={[styles.iconBox, { backgroundColor: "#A9A9A9" }]}
            >
              <FontAwesome5 name="box" color="white" size="24" />
            </TouchableOpacity>
            <View style={styles.iconBoxTexts}>
              <Text style={styles.iconBoxText}>
                メルカリ公式{"\n"}梱包グッズ
              </Text>
            </View>
          </View>
        </View>

        {!showFlag && (
          <TouchableOpacity
            style={styles.seeMore}
            onPress={() => {
              setShowFlag(!showFlag);
            }}
          >
            <Text style={styles.seeAllText}>もっと見る</Text>
            <FontAwesome name="angle-down" size={18} color="#6495ED" />
          </TouchableOpacity>
        )}

        {showFlag && (
          <View>
            <View style={styles.category}>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#7FFF00" }]}
                >
                  <FontAwesome5 name="microphone-alt" color="white" size="28" />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>タレントグッズ</Text>
                </View>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#DC143C" }]}
                >
                  <FontAwesome5 name="eye" color="white" size="28" />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>コスメ{"\n"}香水・美容</Text>
                </View>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#00FFFF" }]}
                >
                  <FontAwesome5
                    name="basketball-ball"
                    color="white"
                    size="32"
                  />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>
                    スポーツ{"\n"}レンジャー
                  </Text>
                </View>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#9400D3" }]}
                >
                  <AntDesign name="videocamera" color="white" size="28" />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>家電・カメラ</Text>
                </View>
              </View>
            </View>
            <View style={styles.category}>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#00CED1" }]}
                >
                  <FontAwesome5 name="home" color="white" size="28" />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>
                    インテリア{"\n"}住まい・小物
                  </Text>
                </View>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#1E90FF" }]}
                >
                  <FontAwesome5 name="car-side" color="white" size="28" />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>自動車{"\n"}オートバイ</Text>
                </View>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#555" }]}
                >
                  <FontAwesome5 name="ticket-alt" color="white" size="28" />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>チケット</Text>
                </View>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity
                  style={[styles.iconBox, { backgroundColor: "#FF4F50" }]}
                >
                  <FontAwesome5 name="donate" color="white" size="28" />
                </TouchableOpacity>
                <View style={styles.iconBoxTexts}>
                  <Text style={styles.iconBoxText}>メルカリ寄付</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={styles.boxes}>
        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <Text style={styles.categoryTitle}>レディース</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>すべて見る</Text>
              <FontAwesome name="angle-right" size={18} color="#6495ED" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            contentContainerStyle={styles.list}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.imageBox} key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product");
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>¥{item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <Text style={styles.categoryTitle}>メンズ</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>すべて見る</Text>
              <FontAwesome name="angle-right" size={18} color="#6495ED" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            contentContainerStyle={styles.list}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.imageBox} key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product");
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>¥{item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <Text style={styles.categoryTitle}>ベビー・キッズ</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>すべて見る</Text>
              <FontAwesome name="angle-right" size={18} color="#6495ED" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            contentContainerStyle={styles.list}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.imageBox} key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product");
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>¥{item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <Text style={styles.categoryTitle}>インテリア・住まい・小物</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>すべて見る</Text>
              <FontAwesome name="angle-right" size={18} color="#6495ED" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            contentContainerStyle={styles.list}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.imageBox} key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product");
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>¥{item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <Text style={styles.categoryTitle}>本・音楽・ゲーム</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>すべて見る</Text>
              <FontAwesome name="angle-right" size={18} color="#6495ED" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            contentContainerStyle={styles.list}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.imageBox} key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product");
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>¥{item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
