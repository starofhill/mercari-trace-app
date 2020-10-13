import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Category, Products, SearchModal } from "../components/atoms/Home";
import { Item, Store } from "../Interface";
import { fetchProducts } from "../reducks/products/operations";

const Tab = createMaterialTopTabNavigator();

interface HomeTabNavigation {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: {
    dispatch: (pushAction: unknown) => void;
  };
}

const HomeTabNavigation: React.FC<HomeTabNavigation> = ({
  modalVisible,
  setModalVisible,
  navigation,
}) => {
  const dispatch = useDispatch();

  const selector = useSelector((state: Store) => state);
  const { products } = selector;
  const { list } = products;

  const [loading, setLoading] = useState(false);

  // 「おすすめ」の商品リスト
  const [recommendedProducts, setRecommendedProducts] = useState<Item[]>([]);

  // 「新着順」の商品リスト
  const [newArrivalOrderProducts, setNewArrivalOrderProducts] = useState<
    Item[]
  >([]);

  // 商品情報をStoreから取得
  useEffect(() => {
    setLoading(true);
    dispatch(fetchProducts()).then(() => {
      setLoading(false);
    });
  }, [dispatch, setLoading]);

  useEffect(() => {
    const updateList = list.slice();

    // sort
    /// Recommended order
    setRecommendedProducts(updateList.slice().sort((a, b) => a.id - b.id));

    // New arrival order
    setNewArrivalOrderProducts(
      updateList.sort((a, b) => b.created_at.localeCompare(a.created_at))
    );
  }, [list]);

  return (
    <View style={styles.homeTabNavigationContainer}>
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {
            width: "auto",
            paddingLeft: 20,
            paddingRight: 20,
          },
        }}
      >
        <Tab.Screen name="おすすめ">
          {() => <Products list={recommendedProducts} loading={loading} />}
        </Tab.Screen>
        <Tab.Screen name="新着">
          {() => <Products list={newArrivalOrderProducts} loading={loading} />}
        </Tab.Screen>
        <Tab.Screen name="カテゴリー" component={Category} />
        <Tab.Screen name="保存した検索条件">
          {() => <Products list={recommendedProducts} loading={loading} />}
        </Tab.Screen>
      </Tab.Navigator>

      <SearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </View>
  );
};

export default HomeTabNavigation;

const styles = StyleSheet.create({
  homeTabNavigationContainer: { flex: 1 },
});
