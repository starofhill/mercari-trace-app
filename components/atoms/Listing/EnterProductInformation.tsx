import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  EnterProductInformationButton,
  EnterProductInformationDelivery,
  EnterProductInformationDetails,
  EnterProductInformationNameAndDescription,
  EnterProductInformationPrice,
  ExpoImagePicker,
  ModalItems,
  pickImage,
  takePhoto,
} from ".";

const EnterProductInformation: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string[]>([]);
  const [sendImage, setSendImage] = useState<string[]>([]);
  const [price, setPrice] = useState<number>();
  const [status] = useState("sale");
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
      <ScrollView style={styles.container}>
        <ModalItems
          takePhoto={() =>
            takePhoto({
              image,
              setImage,
              sendImage,
              setSendImage,
              setModalVisible,
            })
          }
          pickImage={() =>
            pickImage({
              image,
              setImage,
              sendImage,
              setSendImage,
              setModalVisible,
            })
          }
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <ExpoImagePicker image={image} setModalVisible={setModalVisible} />
        <EnterProductInformationDetails
          category={category}
          setCategory={setCategory}
          condition={condition}
          setCondition={setCondition}
        />
        <EnterProductInformationNameAndDescription
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
        />
        <EnterProductInformationDelivery />
        <EnterProductInformationPrice price={price} setPrice={setPrice} />
        <EnterProductInformationButton
          image={image}
          name={name}
          description={description}
          category={category}
          condition={condition}
          price={price}
          sendImage={sendImage}
          status={status}
        />
        <SafeAreaView />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EnterProductInformation;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
