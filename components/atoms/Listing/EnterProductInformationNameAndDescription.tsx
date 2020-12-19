import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface EnterProductInformationNameAndDescription {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const EnterProductInformationNameAndDescription: React.FC<EnterProductInformationNameAndDescription> = ({
  name,
  setName,
  description,
  setDescription,
}) => {
  return (
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
  );
};

export default EnterProductInformationNameAndDescription;

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
  borderBottom: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
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
});
