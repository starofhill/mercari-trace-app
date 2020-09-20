import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Notices,
  Listing,
  MerPay,
  MyPage,
  SignUp,
} from "./components/pages";
import Icon from "react-native-vector-icons/FontAwesome";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";

export const store = createStore();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="ホーム"
            component={Home}
            options={{
              tabBarIcon: () => <Icon name="home" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="お知らせ"
            component={Notices}
            options={{
              tabBarIcon: () => <Icon name="bell" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="出品"
            component={Listing}
            options={{
              tabBarIcon: () => <Icon name="camera" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="メルペイ"
            component={MerPay}
            options={{
              tabBarIcon: () => <Icon name="yen" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="マイページ"
            component={MyPage}
            options={{
              tabBarIcon: () => <Icon name="user" size={24} color="black" />,
            }}
          />
          {/* <Tab.Screen name="SignUp" component={SignUp} options={{}} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
