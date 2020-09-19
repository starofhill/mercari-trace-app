import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Category from "./Home/Category";

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageBox: {
    position: "relative",
  },
  image: {
    height: 110,
    width: 110,
    margin: 5,
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

const Tab = createMaterialTopTabNavigator();

const data = [
  { id: 1, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 2, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 3, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 4, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 5, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 6, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 7, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 8, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 9, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 10, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 11, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 12, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 13, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 14, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 15, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 16, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 17, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 18, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 19, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 20, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 21, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 22, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 23, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 24, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
  { id: 25, src: "../../assets/seigiman369_TP_V.jpg", price: 1000 },
];

function Products() {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.scrollView}
      renderItem={({ item }) => (
        <View style={styles.imageBox} key={item.id}>
          <TouchableOpacity
            onPress={() => {
              navigate("Product");
            }}
          >
            <Image
              source={require("../../assets/seigiman369_TP_V.jpg")}
              style={styles.image}
            />
            <Text style={styles.price}>¥{item.price}</Text>
          </TouchableOpacity>
        </View>
      )}
      numColumns={3}
    />
  );
}

export default function () {
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="おすすめ" component={Products} />
      <Tab.Screen name="新着" component={Products} />
      <Tab.Screen name="カテゴリー" component={Category} />
      <Tab.Screen name="保存した検索条件" component={Products} />
    </Tab.Navigator>
  );
}
