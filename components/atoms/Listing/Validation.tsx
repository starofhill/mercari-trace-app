import { Alert } from "react-native";

const Validation = (
  image: string[],
  name: string,
  description: string,
  category: string,
  condition: string,
  price: number,
  shippingCharges: string,
  shippingMethod: string,
  shippingArea: string,
  shippingDays: string
): boolean => {
  if (!image.length) {
    Alert.alert(
      "エラー",
      "写真を登録してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!name) {
    Alert.alert(
      "エラー",
      "商品名を入力してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!description) {
    Alert.alert(
      "エラー",
      "商品の説明を入力してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!category) {
    Alert.alert(
      "エラー",
      "カテゴリーを選択してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!condition) {
    Alert.alert(
      "エラー",
      "商品の状態を選択してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (price < 300 || price > 9999999 || !price) {
    Alert.alert(
      "エラー",
      "販売価格は300~9,999,999円の範囲で入力してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!shippingCharges) {
    Alert.alert(
      "エラー",
      "配送料の負担を選択してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!shippingMethod) {
    Alert.alert(
      "エラー",
      "配送の方法を選択してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!shippingArea) {
    Alert.alert(
      "エラー",
      "配送元の地域を選択してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  if (!shippingDays) {
    Alert.alert(
      "エラー",
      "配送までの日数を選択してください",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  return true;
};

export default Validation;
