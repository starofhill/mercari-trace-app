import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";
import { Item } from "../../../Interface";
import { MediumSoldTag } from "./SoldTag";

interface SearchScreen {
  list: Item[];
  loading: boolean;
  onRefresh: () => void;
  refreshing: boolean;
}

const SearchScreen: React.FC<SearchScreen> = ({
  list,
  loading,
  onRefresh,
  refreshing,
}) => {
  const { navigate } = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="販売中のみ表示"
          checked={toggleCheckBox}
          onPress={() => setToggleCheckBox(!toggleCheckBox)}
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
        />
      </View>
      {!loading ? (
        <FlatList
          data={list}
          contentContainerStyle={styles.scrollView}
          keyExtractor={(item) => `products-${item.id}`}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <View style={styles.imageBox}>
              <TouchableOpacity
                onPress={() => {
                  navigate("Product", { ...item });
                }}
              >
                <Image
                  source={{
                    uri: encodeURI(item.image_url.replace(/&/g, "%26")),
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
                {item.status === "sold" && <MediumSoldTag />}
                <Text style={styles.price}>¥{item.price.toLocaleString()}</Text>
              </TouchableOpacity>
            </View>
          )}
          numColumns={3}
        />
      ) : (
        <ActivityIndicator size="large" style={styles.container} />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  checkboxContainer: {
    backgroundColor: "white",
  },
  checkbox: {
    width: 150,
    borderWidth: 0,
  },
  checkboxText: {
    fontWeight: "normal",
  },
  scrollView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
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
