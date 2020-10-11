import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Item, Store } from "../../../Interface";
import { SearchTabNavigation } from "../../../navigation";

interface SearchHome {
  value?: string;
  category?: string;
}

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
        result =
          item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          item.description.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }
      return result;
    });

    // sort
    /// Recommended order
    setRecommendedProducts(updateList);
    /// Price ascending order
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
    <SearchTabNavigation
      recommendedProducts={recommendedProducts}
      priceAscendingOrderProducts={priceAscendingOrderProducts}
      priceDescendingOrderProducts={priceDescendingOrderProducts}
      newArrivalOrderProducts={newArrivalOrderProducts}
    />
  );
};

export default SearchHome;
