import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const EnterProductInformationDelivery: React.FC = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>配送について</Text>
      <View style={styles.boxContents}>
        <TouchableOpacity style={[styles.content, styles.borderBottom]}>
          <Text style={styles.boxTitleText}>配送料の負担</Text>
          <View style={styles.boxContent}>
            <Text style={styles.boxText}>(必須)</Text>
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.content, styles.borderBottom]}>
          <Text style={styles.boxTitleText}>配送の方法</Text>
          <View style={styles.boxContent}>
            <Text style={styles.boxText}>(必須)</Text>
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.content, styles.borderBottom]}>
          <Text style={styles.boxTitleText}>配送元の地域</Text>
          <View style={styles.boxContent}>
            <Text style={styles.boxText}>(必須)</Text>
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.content, styles.borderBottom]}>
          <Text style={styles.boxTitleText}>配送までの日数</Text>
          <View style={styles.boxContent}>
            <Text style={styles.boxText}>(必須)</Text>
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterProductInformationDelivery;

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
  },
  boxTitle: {
    marginLeft: 20,
    marginRight: 20,
    color: "#333",
  },
  boxContents: {
    backgroundColor: "white",
    marginTop: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
  },
  borderBottom: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  boxTitleText: {
    fontWeight: "bold",
  },
  boxContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "#888",
    marginRight: 10,
  },
});
