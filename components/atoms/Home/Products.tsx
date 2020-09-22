import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Category } from ".";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

function Products() {
  const { navigate } = useNavigation();
  const selector = useSelector((state) => state);
  const products = selector.products;
  const list = products.list;

  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.scrollView}
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
