import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../reducks/products/operations";
import { Item, Store } from "../../../Interface";
import { SearchTabNavigation } from "../../../navigation";

const SearchHome: React.FC = () => {
  const products = useSelector((state: Store) => state.products);
  const { list } = products;

  const search = useSelector((state: Store) => state.search);
  const { category } = search;
  const { searchWord } = search;

  const dispatch = useDispatch();

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
      // searchWord
      if (searchWord) {
        result =
          item.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 ||
          item.description.toLowerCase().indexOf(searchWord.toLowerCase()) !==
            -1;
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
  }, [list, category, searchWord]);

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
