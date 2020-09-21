import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EnterProductInformation() {
  const data = [
    { id: 1, name: "camera", text: "(必須)" },
    { id: 2, name: "" },
    { id: 3, name: "" },
    { id: 4, name: "" },
    { id: 5, name: "" },
    { id: 6, name: "" },
    { id: 7, name: "" },
    { id: 8, name: "" },
    { id: 9, name: "" },
    { id: 10, name: "" },
  ];

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.image}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageBox} key={item.id}>
            <Text style={styles.imageNumber}>{item.id}</Text>
            <Icon name={item.name} size="20" />
            <Text style={styles.imageText}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.box}>
        <Text style={styles.boxTitle}>商品の詳細</Text>
        <View style={styles.boxContents}>
          <TouchableOpacity style={[styles.content, styles.borderBottom]}>
            <Text style={styles.boxTitleText}>カテゴリー</Text>
            <View style={styles.boxContent}>
              <Text style={styles.boxText}>(必須)</Text>
              <Icon name="angle-right" size="22" color="#888" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <Text style={styles.boxTitleText}>商品の状態</Text>
            <View style={styles.boxContent}>
              <Text style={styles.boxText}>(必須)</Text>
              <Icon name="angle-right" size="22" color="#888" />
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
            multiline={true}
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
              <Icon name="angle-right" size="22" color="#888" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.content, styles.borderBottom]}>
            <Text style={styles.boxTitleText}>配送の方法</Text>
            <View style={styles.boxContent}>
              <Text style={styles.boxText}>(必須)</Text>
              <Icon name="angle-right" size="22" color="#888" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.content, styles.borderBottom]}>
            <Text style={styles.boxTitleText}>配送元の地域</Text>
            <View style={styles.boxContent}>
              <Text style={styles.boxText}>(必須)</Text>
              <Icon name="angle-right" size="22" color="#888" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.content, styles.borderBottom]}>
            <Text style={styles.boxTitleText}>配送までの日数</Text>
            <View style={styles.boxContent}>
              <Text style={styles.boxText}>(必須)</Text>
              <Icon name="angle-right" size="22" color="#888" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>販売価格(300~9,999,999)</Text>
        <View style={styles.boxContents}>
          <TouchableOpacity style={[styles.content, styles.borderBottom]}>
            <Text style={styles.boxTitleText}>販売価格</Text>
            <View style={styles.boxContent}>
              <Text style={styles.boxText}>¥0</Text>
            </View>
          </TouchableOpacity>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>出品する</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>下書きに保存</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  imageBox: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  imageNumber: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 0,
    backgroundColor: "#ddd",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 12,
    color: "#555",
  },
  imageText: {
    fontSize: 12,
    color: "#555",
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
});
