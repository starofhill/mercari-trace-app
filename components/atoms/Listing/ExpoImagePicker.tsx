import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const ExpoImagePicker: React.FC<{ image: string[]; _takePhoto: () => void }> = (
  props
) => {
  const data = [
    { id: 0, name: "camera", text: "(必須)" },
    { id: 1, name: "camera" },
    { id: 2, name: "camera" },
    { id: 3, name: "camera" },
    { id: 4, name: "camera" },
    { id: 5, name: "camera" },
    { id: 6, name: "camera" },
    { id: 7, name: "camera" },
    { id: 8, name: "camera" },
    { id: 9, name: "camera" },
  ];

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.image}
      horizontal
      keyExtractor={(item) => `enterProductInformation-${item.id}`}
      renderItem={({ item }) => (
        <View>
          {!props.image[item.id] && (
            // 画像なし
            <>
              {item.id === 0 ? (
                // 1個目
                <TouchableOpacity
                  style={styles.imageBox}
                  onPress={() => props._takePhoto()}
                >
                  <Text style={styles.imageNumber}>{item.id + 1}</Text>
                  <Icon name={item.name} size={20} />
                  <Text style={styles.imageText}>{item.text}</Text>
                </TouchableOpacity>
              ) : props.image[item.id - 1] ? (
                // 1個目以外 & 1つ前に画像あり
                <TouchableOpacity
                  style={styles.imageBox}
                  onPress={() => props._takePhoto()}
                >
                  <Text style={styles.imageNumber}>{item.id + 1}</Text>
                  <Icon name={item.name} size={20} color="#ccc" />
                </TouchableOpacity>
              ) : (
                // 1個目以外 & 1つ前になし
                <TouchableOpacity style={styles.imageBox}>
                  <Text style={styles.imageNumber}>{item.id + 1}</Text>
                </TouchableOpacity>
              )}
            </>
          )}
          {props.image[item.id] && (
            // 画像あり
            <TouchableOpacity style={styles.imageBox}>
              <Text style={styles.imageNumber}>{item.id + 1}</Text>
              <Image
                source={{ uri: props.image[item.id] }}
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );
};

export default ExpoImagePicker;

const styles = StyleSheet.create({
  image: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  imageBox: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  imageNumber: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 0,
    backgroundColor: "#ddd",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    zIndex: 10,
  },
  imageText: {
    fontSize: 12,
    color: "#555",
  },
});
