import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Notices, Listing, MerPay, MyPage } from "../components/pages";

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
