import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { SignUp } from "../components/pages";
import {
  CategorySelect,
  EnterProductInformation,
  ProductConditionSelect,
} from "../components/atoms/Listing";
import { CommentContainer, Product, Purchase } from "../components/atoms/Home";
import { BottomTabNavigation } from ".";
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
          component={SignUp}
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
          name="Purchase"
          component={Purchase}
          options={{ title: "購入手続き", headerBackTitle: "" }}
        />
        <Stack.Screen
          name="EnterProductInformation"
          component={EnterProductInformation}
          options={{
            title: "商品の状態を入力",
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
          name="CommentContainer"
          component={CommentContainer}
          options={{
            title: "コメント",
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
