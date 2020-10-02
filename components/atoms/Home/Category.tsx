import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CategoryItems } from ".";
import { useSelector } from "react-redux";
import { Item, Store } from "../../../Interface";

export default function Category() {
  const { navigate } = useNavigation();
  const selector = useSelector((state: Store) => state);
  const products = selector.products;
  const list = products.list;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <CategoryItems />

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
            data={list}
            contentContainerStyle={styles.list}
            horizontal
            keyExtractor={(item: Item) => `women-${item.id}`}
            renderItem={({ item }) => (
              <View style={styles.imageBox}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product", { ...item });
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>
                    ¥{item.price.toLocaleString()}
                  </Text>
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
            data={list}
            contentContainerStyle={styles.list}
            horizontal
            keyExtractor={(item: Item) => `men-${item.id}`}
            renderItem={({ item }) => (
              <View style={styles.imageBox}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product", { ...item });
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>
                    ¥{item.price.toLocaleString()}
                  </Text>
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
            data={list}
            contentContainerStyle={styles.list}
            horizontal
            keyExtractor={(item: Item) => `baby-${item.id}`}
            renderItem={({ item }) => (
              <View style={styles.imageBox}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product", { ...item });
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>
                    ¥{item.price.toLocaleString()}
                  </Text>
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
            data={list}
            contentContainerStyle={styles.list}
            horizontal
            keyExtractor={(item: Item) => `interior-${item.id}`}
            renderItem={({ item }) => (
              <View style={styles.imageBox}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product", { ...item });
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>
                    ¥{item.price.toLocaleString()}
                  </Text>
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
            data={list}
            contentContainerStyle={styles.list}
            horizontal
            keyExtractor={(item: Item) => `book-${item.id}`}
            renderItem={({ item }) => (
              <View style={styles.imageBox}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Product", { ...item });
                  }}
                >
                  <Image
                    source={require("../../../assets/seigiman369_TP_V.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.price}>
                    ¥{item.price.toLocaleString()}
                  </Text>
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
