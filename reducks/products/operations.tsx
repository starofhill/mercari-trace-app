import axios from "axios";
import { Alert } from "react-native";
import { Validation } from "../../components/atoms/Listing";
import { fetchProductsAction } from "./actions";
import { Users } from "../../Interface";

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

export const doComments = (id: number, comment: string) => {
  return async () => {
    axios
      .post(
        `https://mercari-trace-server.herokuapp.com/api/v1/products/:${id}/comments/`,
        {
          comments: {
            content: comment,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
