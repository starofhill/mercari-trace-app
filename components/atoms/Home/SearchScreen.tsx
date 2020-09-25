import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Screen(props) {
  const { navigate } = useNavigation();
  console.log("aaa",props.value)

  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const products = selector.products;
  const list = products.list;

  const value = props.value;

  //   console.log(value);
  //   console.log(value.toLowerCase());

  const [items, setItems] = useState();

  useEffect(() => {
    dispatch(fetchProducts());
    // setItems(value)
  }, []);

//   useEffect(() => {
//     setItems(list);
//   }, [list]);

  useEffect(() => {
    const updateList = list.filter((item) => {
      if (value) {
        console.log(value);
        return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      } else {
        return item;
      }
    });

    setItems(updateList);
  }, [value]);

  console.log(items);

  return (
    <FlatList
      data={items}
      //   data={items}
      contentContainerStyle={styles.scrollView}
      keyExtractor={(item) => `products-${item.id}`}
      renderItem={({ item }) => (
        <View style={styles.imageBox}>
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
    // <View>
    //   <Text>aaaaaaa</Text>
    // </View>
  );
}

export default function SearchScreen({ value }) {
    console.log(value);

  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="おすすめ">
        {(props) => <Screen {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="価格の安い順">
        {(props) => <Screen {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="価格の高い順">
        {(props) => <Screen {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="いいね！順">
        {(props) => <Screen {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="新しい順">
        {(props) => <Screen {...props} value={value} />}
      </Tab.Screen>
      {/* <Tab.Screen name="おすすめ順" component={Screen} />
      <Tab.Screen name="価格の安い順" component={Screen} />
      <Tab.Screen name="価格の高い順" component={Screen} />
      <Tab.Screen name="いいね！順" component={Screen} />
      <Tab.Screen name="新しい順" component={Screen} /> */}
    </Tab.Navigator>
    // <View>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    //     <Text>aaaaaaaaaaaaaaaaaaaaa</Text>
    // </View>
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
