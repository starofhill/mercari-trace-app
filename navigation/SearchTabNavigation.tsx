import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchScreen } from "../components/atoms/Home";
import { Item } from "../Interface";

const Tab = createMaterialTopTabNavigator();

interface SearchTabNavigation {
  recommendedProducts: Item[];
  priceAscendingOrderProducts: Item[];
  priceDescendingOrderProducts: Item[];
  newArrivalOrderProducts: Item[];
}

const SearchTabNavigation: React.FC<SearchTabNavigation> = ({
  recommendedProducts,
  priceAscendingOrderProducts,
  priceDescendingOrderProducts,
  newArrivalOrderProducts,
}) => {
  return (
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

export default SearchTabNavigation;
