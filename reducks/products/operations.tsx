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

export const getComments = (id: number, setProductData) => {
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
  comments,
  setComments,
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
