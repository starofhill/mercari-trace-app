import * as ImagePicker from "expo-image-picker";

interface takePhoto {
  image: string[];
  setImage: React.Dispatch<React.SetStateAction<string[]>>;
  sendImage: string[];
  setSendImage: React.Dispatch<React.SetStateAction<string[]>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const takePhoto = async ({
  image,
  setImage,
  sendImage,
  setSendImage,
  setModalVisible,
}: takePhoto) => {
  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
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

export default takePhoto;
