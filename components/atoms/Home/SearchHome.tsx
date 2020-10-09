import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Item, Store } from "../../../Interface";
import { SearchScreen } from ".";

interface SearchHome {
  value?: string;
  category?: string;
}

const Tab = createMaterialTopTabNavigator();

const SearchHome: React.FC<SearchHome> = ({ value, category }) => {
  const selector = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const { products } = selector;
  const { list } = products;

  // 「おすすめ」の商品リスト
  const [recommendedProducts, setRecommendedProducts] = useState<Item[]>([]);

  // 「価格の安い順」の商品リスト
  const [
    priceAscendingOrderProducts,
    setPriceAscendingOrderProducts,
  ] = useState<Item[]>([]);

  // 「価格の高い順」の商品リスト
  const [
    priceDescendingOrderProducts,
    setPriceDescendingOrderProducts,
  ] = useState<Item[]>([]);

  // 「新着順」の商品リスト
  const [newArrivalOrderProducts, setNewArrivalOrderProducts] = useState<
    Item[]
  >([]);

  // 商品情報をStoreから取得
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    // filter
    const updateList = list.filter((item) => {
      // category
      let result = true;
      if (category) {
        result = category === item.category;
        if (!result) return false;
      }
      // value
      if (value) {
        result = item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }
      return result;
    });

    // sort
    /// Price ascending order
    setRecommendedProducts(updateList);
    setPriceAscendingOrderProducts(
      updateList.slice().sort((a, b) => a.price - b.price)
    );
    /// Price descending order
    setPriceDescendingOrderProducts(
      updateList.slice().sort((a, b) => b.price - a.price)
    );
    // New arrival order
    setNewArrivalOrderProducts(
      updateList.sort((a, b) => b.created_at.localeCompare(a.created_at))
    );
  }, [list, category, value]);

  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="おすすめ">
        {() => <SearchScreen list={recommendedProducts} />}
      </Tab.Screen>
      <Tab.Screen name="価格の安い順">
        {() => <SearchScreen list={priceAscendingOrderProducts} />}
      </Tab.Screen>
      <Tab.Screen name="価格の高い順">
        {() => <SearchScreen list={priceDescendingOrderProducts} />}
      </Tab.Screen>
      <Tab.Screen name="いいね！順">
        {() => <SearchScreen list={recommendedProducts} />}
      </Tab.Screen>
      <Tab.Screen name="新しい順">
        {() => <SearchScreen list={newArrivalOrderProducts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchHome;
