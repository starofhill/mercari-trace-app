import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Product, Products, Purchase } from "../atoms/Home";

const Stack = createStackNavigator();

export default function Home() {
  const [value, setValue] = React.useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Products}
        options={{
          headerTitle: () => (
            <TextInput
              style={styles.input}
              onChangeText={(newValue) => {
                setValue(newValue);
              }}
              placeholder="検索"
            />
          ),
          headerLeft: () => <Icon name="qrcode" size={24} />,
          headerRight: () => <Icon name="check" size={24} />,
          headerLeftContainerStyle: styles.headerLeft,
          headerRightContainerStyle: styles.headerRight,
        }}
      />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen
        name="Purchase"
        component={Purchase}
        options={{ title: "購入手続き", headerBackTitle: "" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },
  headerRight: {
    marginRight: 20,
  },
  input: {
    width: 256,
    height: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});
