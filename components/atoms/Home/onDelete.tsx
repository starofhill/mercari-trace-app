import { Alert } from "react-native";
import axios from "axios";
import { fetchProducts } from "../../../reducks/products/operations";

const onDelete = (
  id: number,
  navigate: (Component: string) => void,
  dispatch: (dispatch: any) => Promise<void>
) => {
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
              `https://mercari-trace-server.herokuapp.com/api/v1/products/${id}`
            )
            .then(() => {
              dispatch(fetchProducts());
              navigate("BottomTabNavigation");
            });
        },
      },
    ],
    { cancelable: false }
  );
};

export default onDelete;
