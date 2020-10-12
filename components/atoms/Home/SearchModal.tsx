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
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  searchWordArray: string[];
  setSearchWordArray: React.Dispatch<React.SetStateAction<string[]>>;
  navigation: {
    dispatch: (pushAction: unknown) => void;
  };
}

const SearchModal: React.FC<SearchModal> = ({
  modalVisible,
  setModalVisible,
  searchWord,
  setSearchWord,
  searchWordArray,
  setSearchWordArray,
  navigation,
}) => {
  const pushAction = StackActions.push("SearchHome");

  useEffect(() => {
    setSearchWord(searchWordArray[searchWordArray.length - 1]);
  }, [modalVisible, navigation, setSearchWord, searchWordArray]);

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
            {searchWord ? (
              <TextInput
                style={styles.input}
                onChangeText={(newValue) => {
                  setSearchWord(newValue);
                }}
                onSubmitEditing={() => {
                  navigation.dispatch(pushAction);
                  setModalVisible(false);
                  setSearchWordArray([...searchWordArray, searchWord]);
                }}
                placeholder="検索"
                autoCapitalize="none"
                value={searchWord}
              />
            ) : (
              <TextInput
                style={styles.input}
                onChangeText={(newValue) => {
                  setSearchWord(newValue);
                }}
                placeholder="検索"
                autoCapitalize="none"
                value={searchWord}
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
