import AsyncStorage from "@react-native-community/async-storage";

export const storeUser = async (
  user: {
    isSignedIn: boolean;
    uid: number;
    name: string;
    headers: { accessToken: string; client: string; uid: string };
  } | null
) => {
  try {
    const jsonUser = JSON.stringify(user);
    await AsyncStorage.setItem("user", jsonUser);
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  try {
    const jsonUser = await AsyncStorage.getItem("user");
    return jsonUser != null ? JSON.parse(jsonUser) : null;
  } catch (err) {
    console.log(err);
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem("user");
    return true;
  } catch (exception) {
    return false;
  }
};
