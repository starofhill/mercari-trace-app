import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import { Navigation, Store } from "../../../Interface";
import { ProductFooterButton, ProductHeaderButton } from ".";
import {
  deleteProduct,
  getComments,
} from "../../../reducks/products/operations";

const sellerData = {
  starNumber: 3,
};

const Product: React.FC<Navigation> = ({ navigation, route }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector((state: Store) => state.users);

  // 商品情報を取得
  const [productData, setProductData] = useState(route.params);

  const { id } = route.params;

  const starIcon = [];
  for (let i = 0; i < sellerData.starNumber; i += 1) {
    starIcon.push(<Icon name="star" size={18} color="#FFCC00" key={i} />);
  }

  // 商品の個別の情報を取得
  useEffect(() => {
    dispatch(getComments(id, setProductData));
  }, [dispatch, id]);

  return (
    <View style={styles.productContainer}>
      <ProductHeaderButton name={productData.name} navigation={navigation} />
      <ProductFooterButton productData={productData} />
      <ScrollView style={styles.productScrollView}>
        <Swiper style={styles.wrapper} showsButtons>
          <>
            {productData.status === "sale" && (
              <>
                <View style={styles.soldBox} />
                <Text style={styles.soldText}>SOLD</Text>
              </>
            )}
            <Image
              source={{
                uri: encodeURI(productData.image_url?.replace(/&/g, "%26")),
              }}
              style={styles.slide}
              resizeMode="contain"
            />
          </>
        </Swiper>
        <View style={styles.main}>
          <Text style={styles.title}>{productData.name}</Text>
          <Text style={styles.brand}>{productData.brand}</Text>
          <View style={styles.prices}>
            <Text style={styles.price}>
              ¥{productData.price.toLocaleString()}
            </Text>
            <Text style={styles.shippingCharges}>
              {productData.shippingCharges}
            </Text>
          </View>
          <View style={styles.buttonBoxes}>
            <View style={styles.buttonBox}>
              <View style={styles.buttonItem}>
                <TouchableOpacity style={styles.button}>
                  <Text>いいね!</Text>
                </TouchableOpacity>
                <Text style={styles.buttonText}>{productData.likes}</Text>
              </View>
              <View style={styles.buttonItem}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigate("CommentContainer", {
                      productData,
                      setProductData,
                    })
                  }
                >
                  <Text>コメント</Text>
                </TouchableOpacity>
              </View>
              {productData.comments && productData.comments.length > 0 && (
                <Text>{productData.comments.length}</Text>
              )}
            </View>
            <View style={styles.buttonBox}>
              <TouchableOpacity style={styles.button}>
                <Text>…</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>商品の説明</Text>
          <View style={styles.boxContent}>
            <Text style={styles.descriptionText}>
              {productData.description}
            </Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>商品の情報</Text>
          <View style={styles.boxContent}>
            <View style={styles.informationBox}>
              <Text style={styles.informationTitle}>カテゴリー</Text>
              <Text style={styles.informationContent}>
                {productData.category}
              </Text>
            </View>
            <View style={styles.informationBox}>
              <Text style={styles.informationTitle}>商品の状態</Text>
              <Text style={styles.informationContent}>
                {productData.condition}
              </Text>
            </View>
            <View style={styles.informationBox}>
              <Text style={styles.informationTitle}>配送料の負担</Text>
              <Text style={styles.informationContent}>
                {productData.shippingCharges}
              </Text>
            </View>
            <View style={styles.informationBox}>
              <Text style={styles.informationTitle}>配送の方法</Text>
              <Text style={styles.informationContent}>
                {productData.method}
              </Text>
            </View>
            <View style={styles.informationBox}>
              <Text style={styles.informationTitle}>発送元の地域</Text>
              <Text style={styles.informationContent}>
                {productData.deliveryArea}
              </Text>
            </View>
            <View style={styles.informationBox}>
              <Text style={styles.informationTitle}>発送までの日数</Text>
              <Text style={styles.informationContent}>
                {productData.deliveryDate}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>出品者</Text>
          <TouchableOpacity style={[styles.boxContent, styles.sellerBox]}>
            <View style={styles.sellerContent}>
              <Image
                source={require("../../../assets/user_icon.png")}
                style={styles.icon}
              />
              <View style={styles.sellerInformation}>
                <Text style={styles.sellerName}>
                  {productData.user && productData.user.name}
                </Text>
                <View style={styles.sellerStarContent}>
                  {starIcon}
                  <Text style={styles.sellerStarNumber}>
                    {sellerData.starNumber}
                  </Text>
                </View>
              </View>
            </View>
            <Icon name="angle-right" size={24} color="red" />
          </TouchableOpacity>
        </View>

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
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: { backgroundColor: "white", height: "100%" },
  productScrollView: {
    backgroundColor: "#eee",
  },
  main: {
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 5,
  },
  brand: {
    fontSize: 12,
    color: "#555",
    marginBottom: 15,
  },
  prices: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 32,
    color: "#FE0412",
    marginRight: 10,
  },
  shippingCharges: {
    fontSize: 12,
  },
  buttonBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#eee",
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 20,
    marginRight: 5,
  },
  buttonText: {
    marginRight: 30,
  },
  box: {
    marginTop: 30,
  },
  boxTitle: {
    marginBottom: 8,
    marginLeft: 15,
    color: "#555",
    fontSize: 14,
  },
  boxContent: {
    backgroundColor: "white",
    padding: 20,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 15,
  },
  informationBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  informationTitle: {
    width: 120,
    color: "#555",
    fontSize: 12,
    fontWeight: "bold",
  },
  informationContent: {
    fontSize: 13,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#eee",
    borderWidth: 3,
    marginLeft: 10,
  },
  sellerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sellerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  sellerInformation: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
  sellerName: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  sellerStarContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  sellerStarNumber: {
    fontSize: 12,
    color: "blue",
    marginLeft: 5,
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
  wrapper: {
    height: 380,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  soldBox: {
    position: "absolute",
    borderBottomColor: "transparent",
    borderBottomWidth: 120,
    borderLeftColor: "#FE0412",
    borderLeftWidth: 120,
    zIndex: 10,
  },
  soldText: {
    position: "absolute",
    margin: 5,
    top: 20,
    left: 0,
    transform: [{ rotate: "-45deg" }],
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    zIndex: 10,
  },
});
