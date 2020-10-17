import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { Item, Store } from "../../../Interface";
import { addCategoryAction } from "../../../reducks/search/actions";

const CategoryBox: React.FC<{
  title: string;
}> = ({ title }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const selector = useSelector((state: Store) => state);
  const { products } = selector;
  const { list } = products;

  const productData = list.filter((item) => item.category === title);

  return (
    <View style={styles.box}>
      <View style={styles.boxTitle}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.seeAll}
          onPress={() => {
            navigate("SearchCategory", [title]);
            dispatch(addCategoryAction(title));
          }}
        >
          <Text style={styles.seeAllText}>すべて見る</Text>
          <FontAwesome name="angle-right" size={18} color="#6495ED" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={productData}
        contentContainerStyle={styles.list}
        horizontal
        keyExtractor={(item: Item) => `${item.id}`}
        renderItem={({ item }) =>
          item.category === title ? (
            <View style={styles.imageBox}>
              <TouchableOpacity
                onPress={() => {
                  navigate("Product", { ...item });
                }}
              >
                <Image
                  source={{
                    uri: encodeURI(item.image_url?.replace(/&/g, "%26")),
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <Text style={styles.price}>¥{item.price.toLocaleString()}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )
        }
      />
    </View>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({
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
