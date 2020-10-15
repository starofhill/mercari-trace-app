import * as ImagePicker from "expo-image-picker";

interface pickImage {
  image: string[];
  setImage: React.Dispatch<React.SetStateAction<string[]>>;
  sendImage: string[];
  setSendImage: React.Dispatch<React.SetStateAction<string[]>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const pickImage = async ({
  image,
  setImage,
  sendImage,
  setSendImage,
  setModalVisible,
}: pickImage) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [16, 9],
    base64: true,
  });

  const img = image.slice();
  const sendImg = sendImage.slice();

  if (!result.cancelled) {
    img.push(result.uri);
    sendImg.push(result.base64!);

    setImage(img);
    setSendImage(sendImg);
    setModalVisible(false);
  }
};

export default pickImage;
