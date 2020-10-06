import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MethodItem: React.FC<{
  title: string;
  name: string;
  content: string;
  content2: string;
  color: string;
}> = (props) => {
  return (
    <View style={styles.method}>
      <View style={styles.methodContent}>
        <Text style={styles.methodContentText}>
          {props.content}
          {props.content2 && (
            <Text>
              {"\n"}
              {props.content2}
            </Text>
          )}
        </Text>
      </View>
      <View style={[styles.methodTitle, { backgroundColor: props.color }]}>
        <Text style={styles.methodTitleText}>{props.title}</Text>
        <Icon
          name={props.name}
          size={16}
          style={[styles.methodTitleIcon, { color: props.color }]}
        />
      </View>
    </View>
  );
};

export default MethodItem;

const styles = StyleSheet.create({
  boxTitle: {
    color: "#777",
    paddingLeft: 10,
    paddingBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  boxes: {
    marginTop: 10,
    marginBottom: 20,
  },
  methods: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  method: {
    width: "45%",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
  },
  methodContent: {
    padding: 15,
  },
  methodContentText: {
    lineHeight: 16,
    fontSize: 12,
  },
  methodTitle: {
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  },
  methodTitleText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  methodTitleIcon: {
    backgroundColor: "white",
    padding: 3,
  },
  lightBlueColor: {
    color: "#00BFFF",
  },
  lightBlueBackgroundColor: {
    backgroundColor: "#00BFFF",
  },
  blueColor: {
    color: "#3366FF",
  },
  blueBackgroundColor: {
    backgroundColor: "#3366FF",
  },
  greenColor: {
    color: "#00CC99",
  },
  greenBackgroundColor: {
    backgroundColor: "#00CC99",
  },
  blackColor: {
    color: "#555",
  },
  blackBackgroundColor: {
    backgroundColor: "#555",
  },
  yellowColor: {
    color: "#CCCC00",
  },
  yellowBackgroundColor: {
    backgroundColor: "#CCCC00",
  },
  pinkColor: {
    color: "#FF6699",
  },
  pinkBackgroundColor: {
    backgroundColor: "#FF6699",
  },
  lightOrangeColor: {
    color: "#FF8856",
  },
  lightOrangeBackgroundColor: {
    backgroundColor: "#FF8856",
  },
  darkOrangeColor: {
    color: "#FF4F02",
  },
  darkOrangeBackgroundColor: {
    backgroundColor: "#FF4F02",
  },
});
