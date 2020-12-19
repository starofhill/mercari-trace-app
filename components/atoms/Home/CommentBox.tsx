/* eslint-disable camelcase */
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import icon from "../../../assets/user_icon.png";

interface CommentBox {
  item: { content: string; user_name: string };
}

const CommentBox: React.FC<CommentBox> = ({ item }) => {
  return (
    <View style={styles.commentBox}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.commentContent}>
        {item.user_name ? <Text>{item.user_name}</Text> : <Text>no Name</Text>}
        <View style={styles.commentTextBox}>
          <Text>{item.content}</Text>
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
