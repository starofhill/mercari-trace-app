import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Store } from "../../../Interface";
import {
  ProductDescription,
  ProductFooterButton,
  ProductHeaderButton,
  ProductInformation,
  ProductSeller,
  ProductTop,
} from ".";
import {
  deleteProduct,
  getComments,
} from "../../../reducks/products/operations";

const Product: React.FC<Navigation> = ({ navigation, route }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector((state: Store) => state.users);

  // 商品情報を取得
  const [productData, setProductData] = useState(route.params);

  const { id } = route.params;

  // 商品の個別の情報を取得
  useEffect(() => {
    dispatch(getComments(id, setProductData));
  }, [dispatch, id]);

  return (
    <View style={styles.productContainer}>
      <ProductHeaderButton name={productData.name} navigation={navigation} />

      <ScrollView style={styles.productScrollView}>
        <ProductTop productData={productData} setProductData={setProductData} />
        <ProductDescription productData={productData} />
        <ProductInformation productData={productData} />
        <ProductSeller productData={productData} />

        <View>
          <TouchableOpacity
            style={styles.doDelete}
            onPress={() =>
              dispatch(deleteProduct(productData.id, navigate, users))
            }
          >
            <Text>この商品を削除する</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.doComment}
            onPress={() =>
              navigate("CommentContainer", {
                productData,
                setProductData,
              })
            }
          >
            <Icon name="comment-o" size={24} />
            <Text>コメントする</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ProductFooterButton productData={productData} />
      <SafeAreaView />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: { backgroundColor: "white", height: "100%" },
  productScrollView: {
    backgroundColor: "#eee",
  },
  doDelete: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
  },
  doComment: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    marginTop: 20,
    marginRight: "auto",
    marginBottom: 100,
    marginLeft: "auto",
  },
});
