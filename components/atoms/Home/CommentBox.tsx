import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const icon = require("../../../assets/user_icon.png");

const CommentBox: React.FC = () => {
  return (
    <View style={styles.commentBox}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.commentContent}>
        <Text>name</Text>
        <View style={styles.commentTextBox}>
          <Text>commentcommentcommentcommentcommentcommentcomment</Text>
          <Text>comment</Text>
          <Text>comment</Text>
          <Text>comment</Text>
          <Text>comment</Text>
          <Text>comment</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentBox;

const styles = StyleSheet.create({
  commentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 2,
    marginLeft: 10,
  },
  commentContent: {
    width: "80%",
  },
  commentTextBox: {
    backgroundColor: "#fff",
    padding: 10,
  },
});
