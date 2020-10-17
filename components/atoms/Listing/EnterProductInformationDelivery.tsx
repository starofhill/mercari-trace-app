import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

interface EnterProductInformationDelivery {
  shippingArea: string;
  setShippingArea: React.Dispatch<React.SetStateAction<string>>;
  shippingCharges: string;
  setShippingCharges: React.Dispatch<React.SetStateAction<string>>;
  shippingDays: string;
  setShippingDays: React.Dispatch<React.SetStateAction<string>>;
  shippingMethod: string;
  setShippingMethod: React.Dispatch<React.SetStateAction<string>>;
}

const EnterProductInformationDelivery: React.FC<EnterProductInformationDelivery> = ({
  shippingArea,
  setShippingArea,
  shippingCharges,
  setShippingCharges,
  shippingDays,
  setShippingDays,
  shippingMethod,
  setShippingMethod,
}) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>配送について</Text>
      <View style={styles.boxContents}>
        <TouchableOpacity
          style={[styles.content, styles.borderBottom]}
          onPress={() =>
            navigate("ShippingChargesSelect", { setShippingCharges })
          }
        >
          <Text style={styles.boxTitleText}>配送料の負担</Text>
          <View style={styles.boxContent}>
            {shippingCharges ? (
              <Text style={styles.boxText}>{shippingCharges}</Text>
            ) : (
              <Text style={styles.boxText}>(必須)</Text>
            )}
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.content, styles.borderBottom]}
          onPress={() =>
            navigate("ShippingMethodSelect", { setShippingMethod })
          }
        >
          <Text style={styles.boxTitleText}>配送の方法</Text>
          <View style={styles.boxContent}>
            {shippingMethod ? (
              <Text style={styles.boxText}>{shippingMethod}</Text>
            ) : (
              <Text style={styles.boxText}>(必須)</Text>
            )}
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.content, styles.borderBottom]}
          onPress={() => navigate("ShippingAreaSelect", { setShippingArea })}
        >
          <Text style={styles.boxTitleText}>配送元の地域</Text>
          <View style={styles.boxContent}>
            {shippingArea ? (
              <Text style={styles.boxText}>{shippingArea}</Text>
            ) : (
              <Text style={styles.boxText}>(必須)</Text>
            )}
            <Icon name="angle-right" size={22} color="#888" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.content, styles.borderBottom]}
          onPress={() => navigate("ShippingDaysSelect", { setShippingDays })}
        >
          <Text style={styles.boxTitleText}>配送までの日数</Text>
          <View style={styles.boxContent}>
            {shippingDays ? (
              <Text style={styles.boxText}>{shippingDays}</Text>
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
