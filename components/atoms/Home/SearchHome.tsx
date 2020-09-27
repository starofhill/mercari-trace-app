import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  NewArrival,
  PriceInAscending,
  PriceInDescending,
  SearchScreen,
} from ".";

const Tab = createMaterialTopTabNavigator();

// export default function SearchHome({ value }) {
  // export default function SearchHome(props) {
  export default function SearchHome({value, ...props}) {
  // console.log(props.route.params);
  // const value = props.route.params.value;
  // console.log(value);
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="おすすめ">
        {(props) => <SearchScreen {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="価格の安い順">
        {(props) => <PriceInAscending {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="価格の高い順">
        {(props) => <PriceInDescending {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="いいね！順">
        {(props) => <SearchScreen {...props} value={value} />}
      </Tab.Screen>
      <Tab.Screen name="新しい順">
        {(props) => <NewArrival {...props} value={value} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
