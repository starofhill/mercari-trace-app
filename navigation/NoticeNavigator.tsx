import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { NewsDetail, NoticeDetail } from "../components/atoms/Notices";
import { Notices } from "../components/pages";

const Stack = createStackNavigator();

const NoticesNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Notice"
          component={Notices}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NoticeDetail" component={NoticeDetail} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default NoticesNavigator;
