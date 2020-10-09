import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import axios from "axios";
import { doComments } from "../../../reducks/products/operations";
import { CommentBox } from ".";

const CommentContainer: React.FC<{
  route: { params: { id: number } };
}> = ({ route }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const { id } = route.params;

  useEffect(() => {
    axios
      .get(
        `https://mercari-trace-server.herokuapp.com/api/v1/products/:3/comments/`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.commentContainer}>
      <ScrollView>
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
        <View style={styles.BottomContainer}>
          <View style={styles.commentTextInputContainer}>
            <TextInput
              value={comment}
              style={styles.commentTextInput}
              onChangeText={(newValue) => {
                setComment(newValue);
              }}
              placeholder="コメントする"
              maxLength={40}
            />
          </View>
          <View style={styles.commentButtonContainer}>
            <TouchableOpacity onPress={() => dispatch(doComments(id, comment))}>
              <Text style={styles.commentButtonText}>送信</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CommentContainer;

const styles = StyleSheet.create({
  commentContainer: { flex: 1 },
  BottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  commentTextInputContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    zIndex: 30,
    justifyContent: "center",
  },
  commentTextInput: {
    backgroundColor: "#ccc",
    padding: 10,
    height: 40,
  },
  commentButtonContainer: {
    width: "20%",
    padding: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  commentButtonText: {
    color: "white",
  },
});
