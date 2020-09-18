import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  component: {
    backgroundColor: "white",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 48,
  },
  boxes: {
    alignItems: "center",
    // justifyContent: "center",
    borderColor: "black",
    borderTopWidth: 1,
    marginTop: 30,
    paddingTop: 15,
  },
  boxTitle: {
    backgroundColor: "white",
    position: "absolute",
    top: -16,
    padding: 10,
  },
  border: {},
  box: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    margin: 8,
  },
  blackBackgroundColor: {
    backgroundColor: "black",
  },
  blueBackgroundColor: {
    backgroundColor: "#3B5998",
  },
  whiteBackgroundColor: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  redBackgroundColor: {
    backgroundColor: "#FE0412",
  },
  whiteColor: {
    color: "white",
    fontWeight: "bold",
  },
  blackColor: {
    color: "black",
    fontWeight: "bold",
  },
});

export default function SignUp() {
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.title}>
        <Image
          source={require("../../assets/IMG_6606.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titleText}>mercari</Text>
      </View>
      <View style={styles.boxes}>
        <Text style={styles.boxTitle}>初めてご利用の方は</Text>
        {/* <View style={styles.border}>
            <Text></Text>
        </View> */}
        <View>
          <View style={[styles.box, styles.blackBackgroundColor]}>
            <Icon name="apple" size="24" color="white" />
            <Text style={styles.whiteColor}>Appleでサインアップ</Text>
            <Text></Text>
          </View>
          <View style={[styles.box, styles.blueBackgroundColor]}>
            <Icon name="facebook-official" size="24" color="white" />
            <Text style={styles.whiteColor}>Facebookで登録</Text>
            <Text></Text>
          </View>
          <View style={[styles.box, styles.whiteBackgroundColor]}>
            <Icon name="google" size="24" />
            <Text style={styles.blackColor}>Googleで登録</Text>
            <Text></Text>
          </View>
          <View style={[styles.box, styles.redBackgroundColor]}>
            <Icon name="envelope-o" size="24" color="white" />
            <Text style={styles.whiteColor}>メールアドレスで登録</Text>
            <Text></Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
