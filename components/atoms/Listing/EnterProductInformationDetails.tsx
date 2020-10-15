import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

interface EnterProductInformationDetails {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
}

const EnterProductInformationDetails: React.FC<EnterProductInformationDetails> = ({
  category,
  setCategory,
  condition,
  setCondition,
}) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>商品の詳細</Text>
      <View style={styles.boxContents}>
        <TouchableOpacity
          style={[styles.content, styles.borderBottom]}
          onPress={() => navigate("CategorySelect", { setCategory })}
        >
          <Text style={styles.boxTitleText}>カテゴリー</Text>
          <View style={styles.boxContent}>
            {category ? (
              <Text style={styles.boxText}>{category}</Text>
            ) : (
              <Text style={styles.boxText}>(必須)</Text>
            )}
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigate("ProductConditionSelect", { setCondition })}
        >
          <Text style={styles.boxTitleText}>商品の状態</Text>
          <View style={styles.boxContent}>
            {condition ? (
              <Text style={styles.boxText}>{condition}</Text>
            ) : (
              <Text style={styles.boxText}>(必須)</Text>
            )}
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterProductInformationDetails;

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
  boxTitleText: {
    fontWeight: "bold",
  },
  borderBottom: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
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
