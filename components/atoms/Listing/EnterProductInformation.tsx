import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Store } from "../../../Interface";
import { ExpoImagePicker, ModalItems, Validation } from ".";

const EnterProductInformation: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string[]>([]);
  const [sendImage, setSendImage] = useState<string[]>([]);
  const [price, setPrice] = useState<number>();
  const [status] = useState("sale");
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("");

  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector((state: Store) => state.users);

  // カメラを起動
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      base64: true,
    });

    const img = image.slice();
    const sendImg = sendImage.slice();

    if (!result.cancelled) {
      img.push(result.uri);
      sendImg.push(result.base64!);

      setImage(img);
      setSendImage(sendImg);
    }
  };

  // カメラロールから選択
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      base64: true,
    });

    const img = image.slice();
    const sendImg = sendImage.slice();

    if (!result.cancelled) {
      img.push(result.uri);
      sendImg.push(result.base64!);

      setImage(img);
      setSendImage(sendImg);
    }
  };

  const addProduct = async () => {
    // バリデーション
    if (
      !Validation(
        image,
        name,
        description,
        category,
        condition,
        price as number
      )
    ) {
      return;
    }

    const product = {
      product: {
        name,
        description,
        price,
        image: `data:image/jpg;base64,${sendImage[0]}`,
        status,
        category,
        condition,
      },
    };

    await axios
      .post(
        "https://mercari-trace-server.herokuapp.com/api/v1/products/",
        product,
        {
          headers: {
            "access-token": users.headers.accessToken,
            client: users.headers.client,
            uid: users.headers.uid,
          },
        }
      )
      .then(() => {
        dispatch(fetchProducts());
        navigate("App");
      })
      .catch(() => {
        Alert.alert(
          "出品できませんでした。",
          "",
          [
            {
              text: "OK",
            },
          ],
          { cancelable: false }
        );
        return false;
      });
  };

  return (
    <ScrollView style={styles.container}>
      <ModalItems takePhoto={takePhoto} pickImage={pickImage} />

      <ExpoImagePicker takePhoto={takePhoto} image={image} />

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
      <View style={styles.box}>
        <View style={[styles.boxTitle, styles.descriptionTitle]}>
          <Text>商品名と説明</Text>
          <TouchableOpacity style={styles.template}>
            <Text style={styles.templateText}>テンプレートを使う</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxContents}>
          <TextInput
            value={name}
            style={[styles.inputName, styles.borderBottom]}
            onChangeText={(newValue) => {
              setName(newValue);
            }}
            placeholder="商品名(必須 40文字まで)"
            maxLength={40}
          />
          <TextInput
            value={description}
            style={styles.inputDescription}
            onChangeText={(newValue) => {
              setDescription(newValue);
            }}
            multiline
            placeholder="商品の説明(任意 1000文字以内)"
            maxLength={1000}
          />
        </View>
      </View>
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
      <View style={styles.box}>
        <Text style={styles.boxTitle}>販売価格(300~9,999,999)</Text>
        <View style={styles.boxContents}>
          <View style={[styles.content, styles.borderBottom]}>
            <Text style={styles.boxTitleText}>販売価格</Text>
            <View style={styles.boxContent}>
              <TextInput
                style={[styles.boxText, styles.inputPrice]}
                keyboardType="numeric"
                value={price?.toString()}
                maxLength={8}
                placeholder="¥0"
                onChangeText={(newPrice) => {
                  setPrice(+newPrice);
                }}
              />
            </View>
          </View>
          <View style={styles.priceContents}>
            <View style={styles.priceContent}>
              <Text style={styles.priceTitleText}>販売手数料</Text>
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>-</Text>
              </View>
            </View>
            <View style={styles.priceContent}>
              <Text style={styles.priceTitleText}>販売利益</Text>
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.box, styles.buttonBox]}>
        <TouchableOpacity style={styles.button} onPress={addProduct}>
          <Text style={styles.buttonText}>出品する</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>下書きに保存</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterProductInformation;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
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
  template: {
    backgroundColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
  templateText: {
    fontSize: 12,
    color: "#555",
  },
  inputName: {
    backgroundColor: "white",
    padding: 10,
    fontSize: 16,
    marginRight: 20,
    marginLeft: 20,
  },
  inputDescription: {
    backgroundColor: "white",
    marginTop: 5,
    padding: 10,
    fontSize: 16,
    height: 180,
    marginRight: 20,
    marginLeft: 20,
  },
  descriptionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
