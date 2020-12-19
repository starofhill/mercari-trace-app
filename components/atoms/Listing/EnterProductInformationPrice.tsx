import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface EnterProductInformationPrice {
  price: number | undefined;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const EnterProductInformationPrice: React.FC<EnterProductInformationPrice> = ({
  price,
  setPrice,
}) => {
  const [priceString, setPriceString] = useState("");

  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>販売価格(300~9,999,999)</Text>
      <View style={styles.boxContents}>
        <View style={[styles.content, styles.borderBottom]}>
          <Text style={styles.boxTitleText}>販売価格</Text>
          <View style={styles.boxContent}>
            <TextInput
              style={[styles.boxText, styles.inputPrice]}
              keyboardType="numeric"
              maxLength={7}
              placeholder="¥0"
              value={priceString}
              onChangeText={(newPrice) => {
                if (
                  newPrice !== "0" &&
                  newPrice !== "00" &&
                  newPrice !== "000" &&
                  newPrice !== "0000" &&
                  newPrice !== "00000" &&
                  newPrice !== "000000" &&
                  newPrice !== "0000000" &&
                  newPrice !== ""
                ) {
                  setPrice(+newPrice);
                  setPriceString(Number(newPrice).toString());
                } else {
                  setPriceString("");
                  setPrice(0);
                }
              }}
              onFocus={(e) => {
                setPriceString(e.nativeEvent.text.replace(/[^0-9-.]/g, ""));
              }}
              onEndEditing={(e) => {
                if (e.nativeEvent.text === "") {
                  setPriceString("");
                } else {
                  setPriceString(`¥${(+e.nativeEvent.text).toLocaleString()}`);
                }
              }}
            />
          </View>
        </View>
        <View style={styles.priceContents}>
          <View style={styles.priceContent}>
            <Text style={styles.priceTitleText}>販売手数料</Text>
            <View style={styles.boxContent}>
              {price && price >= 300 && price < 10000000 ? (
                <Text style={styles.boxText}>
                  ¥{Math.floor(price / 10).toLocaleString()}
                </Text>
              ) : (
                <Text style={styles.boxText}>-</Text>
              )}
            </View>
          </View>
          <View style={styles.priceContent}>
            <Text style={styles.priceTitleText}>販売利益</Text>
            <View style={styles.boxContent}>
              {price && price >= 300 && price < 10000000 ? (
                <Text style={styles.boxText}>
                  ¥{(price - Math.floor(price / 10)).toLocaleString()}
                </Text>
              ) : (
                <Text style={styles.boxText}>-</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EnterProductInformationPrice;

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
  priceTitleText: {
    color: "#aaa",
    fontWeight: "bold",
  },
  priceContents: {
    marginTop: 10,
    marginBottom: 10,
  },
  priceContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    height: 30,
  },
  inputPrice: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "right",
  },
});
