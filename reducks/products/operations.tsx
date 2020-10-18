/* eslint-disable camelcase */
import axios from "axios";
import { Alert } from "react-native";
import { Validation } from "../../components/atoms/Listing";
import { fetchProductsAction } from "./actions";
import { Item, Users } from "../../Interface";

export const fetchProducts = () => {
  return async (dispatch) => {
    await axios
      .get("https://mercari-trace-server.herokuapp.com/api/v1/products/")
      .then((res) => {
        const productList = [];
        productList.push(...res.data);
        dispatch(fetchProductsAction(productList));
      });
  };
};

export const addProduct = (
  image: string[],
  name: string,
  description: string,
  category: string,
  condition: string,
  price: number,
  sendImage: string[],
  status: string,
  users: Users,
  navigate: (nav: string) => void
) => {
  return async (dispatch) => {
    // バリデーション
    if (!Validation(image, name, description, category, condition, price)) {
      return;
    }

    const product = {
      product: {
        name,
        description,
        price,
        image: `data:image/jpg;base64,${sendImage[0]}`,
        status,
        category,
        condition,
      },
    };

    await axios
      .post(
        "https://mercari-trace-server.herokuapp.com/api/v1/products/",
        product,
        {
          headers: {
            "access-token": users.headers.accessToken,
            client: users.headers.client,
            uid: users.headers.uid,
          },
        }
      )
      .then(() => {
        Alert.alert("出品できました。", "", [
          {
            text: "OK",
            onPress: () => {
              dispatch(fetchProducts());
              navigate("BottomTabNavigation");
            },
          },
        ]);
      })
      .catch(() => {
        Alert.alert(
          "出品できませんでした。",
          "",
          [
            {
              text: "OK",
            },
          ],
          { cancelable: false }
        );
        return false;
      });
  };
};

export const deleteProduct = (
  id: number,
  navigate: (Component: string) => void,
  users: Users
) => {
  return async (dispatch) => {
    Alert.alert(
      "確認",
      `削除すると二度と復活できません。削除する代わりに停止することもできます。\n\n本当に削除しますか?`,
      [
        {
          text: "いいえ",
          style: "cancel",
        },
        {
          text: "はい",
          onPress: () => {
            axios
              .delete(
                `https://mercari-trace-server.herokuapp.com/api/v1/products/${id}`,
                {
                  headers: {
                    "access-token": users.headers.accessToken,
                    client: users.headers.client,
                    uid: users.headers.uid,
                  },
                }
              )
              .then(() => {
                Alert.alert("商品を削除できました。", "", [
                  {
                    text: "OK",
                    onPress: () => {
                      dispatch(fetchProducts());
                      navigate("BottomTabNavigation");
                    },
                  },
                ]);
              })
              .catch(() => {
                Alert.alert("商品を削除することが\nできませんでした。", "", [
                  {
                    text: "OK",
                  },
                ]);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
};

export const getComments = (
  id: number,
  setProductData: React.Dispatch<React.SetStateAction<Item>>
) => {
  return async () => {
    axios
      .get(`https://mercari-trace-server.herokuapp.com/api/v1/products/${id}/`)
      .then((res) => {
        setProductData({ ...res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const doComments = (
  id: number,
  comment: string,
  users: Users,
  setProductData: React.Dispatch<React.SetStateAction<Item>>,
  comments:
    | {
        id: number;
        content: string;
        user_id: number;
        product_id: number;
        created_at: string;
        update_at: string;
      }[]
    | undefined,
  setComments: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          content: string;
          user_id: number;
          product_id: number;
          created_at: string;
          update_at: string;
        }[]
      | undefined
    >
  >,
  navigate: (nav: string) => void
) => {
  return async (dispatch) => {
    axios
      .post(
        `https://mercari-trace-server.herokuapp.com/api/v1/products/${id}/comments/`,
        {
          comment: {
            content: comment,
          },
        },
        {
          headers: {
            "access-token": users.headers.accessToken,
            client: users.headers.client,
            uid: users.headers.uid,
          },
        }
      )
      .then((res) => {
        dispatch(getComments(id, setProductData));
        setComments([...comments, res.data]);
        console.log(res);
      })
      .catch((err) => {
        navigate("SignUp");
        console.log(err);
      });
  };
};

// 商品の購入
export const PurchaseProducts = (
  id: number,
  paymentMethod: string,
  users: Users,
  navigate: (Component: string) => void
) => {
  return async (dispatch) => {
    if (!users.isSignedIn) {
      Alert.alert(
        "エラー",
        "ログインをしてください",
        [
          {
            text: "OK",
          },
        ],
        { cancelable: false }
      );
      return false;
    }

    let method: string | undefined;

    switch (paymentMethod) {
      case "クレジットカード":
        method = "credit";
        break;
      case "メルペイ":
        method = "merpay";
        break;
      case "コンビニ/ATM払い":
        method = "convenience";
        break;
      case "d払い(ドコモ)":
        method = "docomo";
        break;
      case "auかんたん決済":
        method = "au";
        break;
      case "ソフトバンクまとめて支払い":
        method = "softbank";
        break;
      case "FamilyPay":
        method = "familymart";
        break;
      default:
        break;
    }

    // Validation
    if (!method) {
      Alert.alert(
        "エラー",
        "支払い方法を登録してください",
        [
          {
            text: "OK",
          },
        ],
        { cancelable: false }
      );
      return false;
    }

    Alert.alert(
      "確認",
      `購入してもよろしいですか?`,
      [
        {
          text: "いいえ",
          style: "cancel",
        },
        {
          text: "はい",
          onPress: () => {
            axios
              .post(
                "https://mercari-trace-server.herokuapp.com/api/v1/purchases/",
                {
                  purchase: {
                    product_id: id,
                    payment_method: method,
                  },
                },
                {
                  headers: {
                    "access-token": users.headers.accessToken,
                    client: users.headers.client,
                    uid: users.headers.uid,
                  },
                }
              )
              .then(() => {
                Alert.alert("商品を購入することが\nできました。", "", [
                  {
                    text: "OK",
                    onPress: () => {
                      dispatch(fetchProducts());
                      navigate("Home");
                    },
                  },
                ]);
              })
              .catch(() => {
                Alert.alert("商品を購入することが\nできませんでした。", "", [
                  {
                    text: "OK",
                  },
                ]);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
};
