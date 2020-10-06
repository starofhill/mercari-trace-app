import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HistoryItem: React.FC<{
  name: string;
  text: string;
  text2?: string;
  size: number;
}> = (props) => {
  return (
    <View style={styles.history}>
      <Icon name={props.name} size={props.size} />
      <Text style={styles.text}>
        {props.text}
        {props.text2 && (
          <Text>
            {"\n"}
            {props.text2}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  history: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 80,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
  },
});
