import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { doComments } from "../../../reducks/products/operations";
import { CommentBox } from ".";
import { Item, Store } from "../../../Interface";

interface CommentContainer {
  route: {
    params: {
      setProductData: React.Dispatch<React.SetStateAction<Item>>;
      productData: Item;
    };
  };
}

const CommentContainer: React.FC<CommentContainer> = ({ route }) => {
  const { productData } = route.params;
  const { setProductData } = route.params;

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  // コメント入力
  const [comment, setComment] = useState("");
  // コメント一覧
  const [comments, setComments] = useState(productData.comments);

  const { id } = productData;

  const users = useSelector((state: Store) => state.users);

  return (
    <View style={styles.commentContainer}>
      <ScrollView>
        {comments?.map((item: { id: number; content: string }) => (
          <CommentBox key={item.id} item={item} />
        ))}
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

          {comment.length > 0 ? (
            <View
              style={[
                styles.commentButtonContainer,
                styles.commentButtonRedContainer,
              ]}
            >
              <TouchableOpacity
                style={styles.commentButton}
                onPress={() => {
                  dispatch(
                    doComments(
                      id,
                      comment,
                      users,
                      setProductData,
                      comments,
                      setComments,
                      navigate
                    )
                  );
                  setComment("");
                }}
              >
                <Text style={styles.commentButtonText}>送信</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={[
                styles.commentButtonContainer,
                styles.commentButtonGrayContainer,
              ]}
            >
              <View>
                <Text style={styles.commentButtonText}>送信</Text>
              </View>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
      <SafeAreaView style={styles.safeAreaView} />
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
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  commentButtonRedContainer: {
    backgroundColor: "#EA352E",
  },
  commentButton: {
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  commentButtonGrayContainer: {
    backgroundColor: "#ccc",
  },
  commentButtonText: {
    color: "white",
  },
  safeAreaView: {
    backgroundColor: "white",
  },
});
