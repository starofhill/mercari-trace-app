import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../reducks/products/operations";
import { Store } from "../../../Interface";

interface EnterProductInformationButton {
  image: string[];
  name: string;
  description: string;
  category: string;
  condition: string;
  price: number | undefined;
  sendImage: string[];
  status: string;
}

const EnterProductInformationButton: React.FC<EnterProductInformationButton> = ({
  image,
  name,
  description,
  category,
  condition,
  price,
  sendImage,
  status,
}) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const users = useSelector((state: Store) => state.users);

  return (
    <View style={[styles.box, styles.buttonBox]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          dispatch(
            addProduct(
              image,
              name,
              description,
              category,
              condition,
              price as number,
              sendImage,
              status,
              users,
              navigate
            )
          )
        }
      >
        <Text style={styles.buttonText}>出品する</Text>
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>下書きに保存</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnterProductInformationButton;

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
  },
  buttonBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#EA352E",
    width: 250,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
