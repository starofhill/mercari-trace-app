import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

export default function ExpoImagePicker() {
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

  const [image, setImage] = useState([]);

  // カメラを起動
  const _takePhoto = async (id) => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });

    const img = image.slice();
    if (!result.cancelled) {
      img.push(result.uri);
      setImage(img);
    }
  };

  // カメラロールから選択
  const _pickImage = async (id) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });

    const img = image.slice();
    if (!result.cancelled) {
      img.push(result.uri);
      setImage(img);
    }
  };
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.image}
      horizontal
      keyExtractor={(item) => `enterProductInformation-${item.id}`}
      renderItem={({ item }) => (
        <View>
          {!image[item.id] && (
            // 画像なし
            <>
              {item.id === 0 ? (
                // 1個目
                <TouchableOpacity
                  style={styles.imageBox}
                  onPress={() => _takePhoto(item.id)}
                >
                  <Text style={styles.imageNumber}>{item.id + 1}</Text>
                  <Icon name={item.name} size={20} />
                  <Text style={styles.imageText}>{item.text}</Text>
                </TouchableOpacity>
              ) : image[item.id - 1] ? (
                // 1個目以外 & 1つ前に画像あり
                <TouchableOpacity
                  style={styles.imageBox}
                  onPress={() => _takePhoto(item.id)}
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
          {image[item.id] && (
            // 画像あり
            <TouchableOpacity style={styles.imageBox}>
              <Text style={styles.imageNumber}>{item.id + 1}</Text>
              <Image
                source={{ uri: image[item.id] }}
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );
}

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
