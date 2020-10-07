import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NewArrival, SearchScreen, ByPrice } from ".";

const Tab = createMaterialTopTabNavigator();

const SearchHome: React.FC<{ value: string; category: string }> = ({
  value,
  category,
}) => {
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="おすすめ">
        {(props) => (
          <SearchScreen {...props} value={value} category={category} />
        )}
      </Tab.Screen>
      <Tab.Screen name="価格の安い順">
        {(props) => (
          <ByPrice
            {...props}
            value={value}
            order="ascending"
            category={category}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="価格の高い順">
        {(props) => (
          <ByPrice
            {...props}
            value={value}
            order="descending"
            category={category}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="いいね！順">
        {(props) => (
          <SearchScreen {...props} value={value} category={category} />
        )}
      </Tab.Screen>
      <Tab.Screen name="新しい順">
        {(props) => <NewArrival {...props} value={value} category={category} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchHome;
