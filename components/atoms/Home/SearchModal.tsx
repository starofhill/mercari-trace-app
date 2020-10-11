import React, { useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchModalContent } from ".";

interface SearchModal {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueArray: string[];
  setValueArray: React.Dispatch<React.SetStateAction<string[]>>;
  navigation: {
    dispatch: (pushAction: unknown) => void;
  };
}

const SearchModal: React.FC<SearchModal> = ({
  modalVisible,
  setModalVisible,
  value,
  setValue,
  valueArray,
  setValueArray,
  navigation,
}) => {
  const pushAction = StackActions.push("SearchHome");

  useEffect(() => {
    setValue(valueArray[valueArray.length - 1]);
  }, [modalVisible, navigation, setValue, valueArray]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.modalContainer}>
        <SafeAreaView>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon name="close" size={32} color="#ccc" style={styles.icon} />
            </TouchableOpacity>
            {value ? (
              <TextInput
                style={styles.input}
                onChangeText={(newValue) => {
                  setValue(newValue);
                }}
                onSubmitEditing={() => {
                  navigation.dispatch(pushAction);
                  setModalVisible(false);
                  setValueArray([...valueArray, value]);
                }}
                placeholder="検索"
                autoCapitalize="none"
                value={value}
              />
            ) : (
              <TextInput
                style={styles.input}
                onChangeText={(newValue) => {
                  setValue(newValue);
                }}
                placeholder="検索"
                autoCapitalize="none"
                value={value}
              />
            )}
          </View>

          <SearchModalContent />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  modalContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 256,
    height: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});
