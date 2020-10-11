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
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueArray: string[];
  setValueArray: React.Dispatch<React.SetStateAction<string[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  navigation: {
    dispatch: (pushAction: unknown) => void;
  };
}

const HomeTabNavigation: React.FC<HomeTabNavigation> = ({
  modalVisible,
  setModalVisible,
  value,
  setValue,
  valueArray,
  setValueArray,
  setCategory,
  navigation,
}) => {
  const selector = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { products } = selector;
  const { list } = products;

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
  }, [list, value]);

  useEffect(() => {
    setValue(valueArray[valueArray.length - 1]);
  }, [modalVisible, navigation, setValue, valueArray]);

  return (
    <View style={styles.homeTabNavigationContainer}>
      <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
        <Tab.Screen name="おすすめ">
          {() => <Products list={recommendedProducts} loading={loading} />}
        </Tab.Screen>
        <Tab.Screen name="新着">
          {() => <Products list={newArrivalOrderProducts} loading={loading} />}
        </Tab.Screen>
        <Tab.Screen name="カテゴリー">
          {() => <Category setCategory={setCategory} />}
        </Tab.Screen>
        <Tab.Screen name="保存した検索条件">
          {() => <Products list={recommendedProducts} loading={loading} />}
        </Tab.Screen>
      </Tab.Navigator>

      <SearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        value={value}
        setValue={setValue}
        valueArray={valueArray}
        setValueArray={setValueArray}
        navigation={navigation}
      />
    </View>
  );
};

export default HomeTabNavigation;

const styles = StyleSheet.create({
  homeTabNavigationContainer: { flex: 1 },
});
