import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { Examples } from "../atoms";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import EnterProductInformation from "../atoms/Listing/EnterProductInformation";

export function Listing() {
  const { navigate } = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listing}>
        <TouchableOpacity
          style={styles.listingButton}
          onPress={() => navigate("EnterProductInformation")}
        >
          <Icon name="camera" size={18} color="white" />
          <Text style={styles.listingText}>出品</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <View style={styles.topImage}>
            <Image
              source={require("../../assets/IMG_6604.jpeg")}
              style={{
                width: 300,
                height: 150,
                marginTop: 20,
                marginBottom: 20,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.shortcuts}>
            <Text style={styles.shortcutTitle}>出品へのショートカット</Text>
            <View style={styles.shortcut}>
              <TouchableOpacity style={styles.shortcutBox}>
                <Icon name="camera" size="24" />
                <Text style={styles.shortcutText}>写真を撮る</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shortcutBox}>
                <Icon name="photo" size="24" />
                <Text style={styles.shortcutText}>アルバム</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shortcutBox}>
                <Icon name="barcode" size="24" />
                <Text style={styles.shortcutText}>
                  バーコード{"\n"}(本・コスメ)
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shortcutBox}>
                <Icon name="edit" size="24" />
                <Text style={styles.shortcutText}>下書き一覧</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.check}>
            <View style={styles.checkTexts}>
              <Icon name="photo" size={32} />
              <View style={styles.checkText}>
                <Text style={styles.checkTextBold}>売れるかチェックする</Text>
                <Text style={styles.checkTextLight}>
                  写真を撮って商品価格の相場をチェック
                </Text>
              </View>
            </View>
            <Icon name="angle-right" size={24} color="#ccc" />
          </View>
          <Examples />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Listing"
        component={Listing}
        options={{
          title: "出品",
        }}
      />
      <Stack.Screen
        name="EnterProductInformation"
        component={EnterProductInformation}
        options={{
          title: "商品の状態を入力",
          headerBackTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listing: {
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  listingButton: {
    backgroundColor: "#f33",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  listingText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  scrollView: {
    marginRight: 18,
    marginLeft: 18,
  },
  topImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  shortcuts: {},
  shortcut: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shortcutTitle: {
    fontWeight: "bold",
  },
  shortcutBox: {
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 15,
    height: 90,
  },
  shortcutText: {
    fontSize: 12,
    marginTop: 5,
  },
  check: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  checkTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkText: {
    marginLeft: 10,
  },
  checkTextBold: {
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  checkTextLight: {
    color: "#555",
    marginTop: 5,
    marginBottom: 5,
  },
});
