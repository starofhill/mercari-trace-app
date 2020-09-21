import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignIn() {
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
        <View>
          <TouchableOpacity style={[styles.box, styles.blackBackgroundColor]}>
            <Icon name="apple" size="24" color="white" />
            <Text style={styles.whiteColor}>Appleでログイン</Text>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, styles.blueBackgroundColor]}>
            <Icon name="facebook-official" size="24" color="white" />
            <Text style={styles.whiteColor}>Facebookでログイン</Text>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, styles.whiteBackgroundColor]}>
            <Icon name="google" size="24" />
            <Text style={styles.blackColor}>Googleでログイン</Text>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, styles.redBackgroundColor]}>
            <Icon name="envelope-o" size="24" color="white" />
            <Text style={styles.whiteColor}>メールアドレスでログイン</Text>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "white",
    flex: 1,
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
    marginTop: 20,
    paddingTop: 15,
  },
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
    backgroundColor: "#FF4F02",
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
