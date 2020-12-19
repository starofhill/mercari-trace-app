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
  loading: boolean;
  onRefresh: () => void;
  refreshing: boolean;
}

const SearchTabNavigation: React.FC<SearchTabNavigation> = ({
  recommendedProducts,
  priceAscendingOrderProducts,
  priceDescendingOrderProducts,
  newArrivalOrderProducts,
  loading,
  onRefresh,
  refreshing,
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
        {() => (
          <SearchScreen
            list={recommendedProducts}
            loading={loading}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="価格の安い順">
        {() => (
          <SearchScreen
            list={priceAscendingOrderProducts}
            loading={loading}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="価格の高い順">
        {() => (
          <SearchScreen
            list={priceDescendingOrderProducts}
            loading={loading}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="いいね！順">
        {() => (
          <SearchScreen
            list={recommendedProducts}
            loading={loading}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="新しい順">
        {() => (
          <SearchScreen
            list={newArrivalOrderProducts}
            loading={loading}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchTabNavigation;
