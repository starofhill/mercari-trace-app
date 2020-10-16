import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchModalContent } from ".";
import { addSearchWordAction } from "../../../reducks/search/actions";
import { Store } from "../../../Interface";

interface SearchModal {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: {
    dispatch: (pushAction: unknown) => void;
  };
}

const SearchModal: React.FC<SearchModal> = ({
  modalVisible,
  setModalVisible,
  navigation,
}) => {
  const pushAction = StackActions.push("SearchHome");
  const search = useSelector((state: Store) => state.search);
  const { searchWord } = search;

  const dispatch = useDispatch();

  const [value, setValue] = useState(searchWord);

  useEffect(() => {
    setValue(searchWord);
  }, [modalVisible, navigation, searchWord]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={44}
        style={styles.modalContainer}
      >
        <SafeAreaView>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon
                name="angle-left"
                size={40}
                color="#ccc"
                style={styles.icon}
              />
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
                  dispatch(addSearchWordAction(value));
                  setValue("");
                }}
                placeholder="検索"
                autoCapitalize="none"
                value={value}
                clearButtonMode="always"
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
            <View />
          </View>
          <SearchModalContent />
        </SafeAreaView>
      </KeyboardAvoidingView>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginRight: 15,
    marginLeft: 15,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
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
