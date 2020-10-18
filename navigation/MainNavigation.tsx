import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import {
  CategorySelect,
  EnterProductInformation,
  ProductConditionSelect,
  ShippingAreaSelect,
  ShippingChargesSelect,
  ShippingDaysSelect,
  ShippingMethodSelect,
} from "../components/atoms/Listing";
import {
  CommentContainer,
  Product,
  PurchasePaymentMethod,
  PurchaseScreen,
} from "../components/atoms/Home";
import { BottomTabNavigation, SignUpNavigation } from ".";
import { getUser } from "../reducks/users/asyncStorage";
import { signInWithEmailAction } from "../reducks/users/actions";

const Stack = createStackNavigator();

const MainNavigation: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser().then((response) => {
      dispatch(signInWithEmailAction(response));
    });
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" headerMode="screen">
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerBackTitleVisible: false,
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PurchaseScreen"
          component={PurchaseScreen}
          options={{ title: "購入手続き", headerBackTitle: "" }}
        />
        <Stack.Screen
          name="EnterProductInformation"
          component={EnterProductInformation}
          options={{
            title: "商品の情報を入力",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="CategorySelect"
          component={CategorySelect}
          options={{
            title: "カテゴリー",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ProductConditionSelect"
          component={ProductConditionSelect}
          options={{
            title: "商品の状態",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ShippingChargesSelect"
          component={ShippingChargesSelect}
          options={{
            title: "配送料の負担",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ShippingMethodSelect"
          component={ShippingMethodSelect}
          options={{
            title: "配送の方法",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ShippingAreaSelect"
          component={ShippingAreaSelect}
          options={{
            title: "発送元の地域",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ShippingDaysSelect"
          component={ShippingDaysSelect}
          options={{
            title: "発送までの日数",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="CommentContainer"
          component={CommentContainer}
          options={{
            title: "コメント",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="PurchasePaymentMethod"
          component={PurchasePaymentMethod}
          options={{
            title: "支払い方法",
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
