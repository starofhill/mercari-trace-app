import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

interface ModalItems {
  takePhoto: () => void;
  pickImage: () => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalItems: React.FC<ModalItems> = ({
  takePhoto,
  pickImage,
  modalVisible,
  setModalVisible,
}) => {
  useEffect(() => {
    setTimeout(() => setModalVisible(true), 500);
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>出品方法を選択してください</Text>

            <View style={styles.modalCard}>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => takePhoto()}
              >
                <View style={styles.modalBox}>
                  <Icon name="camera" size={24} />
                  <Text style={styles.textStyle}>写真を撮る</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => pickImage()}
              >
                <View style={styles.modalBox}>
                  <Icon name="photo" size={24} />
                  <Text style={styles.textStyle}>アルバムから選ぶ</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textCloseStyle}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalItems;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 25,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalCard: {
    flexDirection: "row",
  },
  modalBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    borderRadius: 3,
    padding: 20,
    margin: 5,
    elevation: 2,
    borderColor: "#ccc",
    borderWidth: 1,
    width: 130,
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#555",
  },
  textStyle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 11,
  },
  textCloseStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#888",
    padding: 20,
  },
});
