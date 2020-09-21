import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CategoryIcons from "./CategoryIcons";

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

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <CategoryIcons />

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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
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
