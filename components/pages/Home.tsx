import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Category, Products, Search, SearchScreen } from "../atoms/Home";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function SearchTab({ value }) {
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      {/* <Tab.Screen name="おすすめ">
        {(props) => <Products {...props} value={value} />}
      </Tab.Screen> */}
      <Tab.Screen name="おすすめ" component={Products} />
      <Tab.Screen name="新着" component={Products} />
      <Tab.Screen name="カテゴリー" component={Category} />
      <Tab.Screen name="保存した検索条件" component={Products} />
    </Tab.Navigator>
  );
}

export default function Home() {
  const { navigate } = useNavigation();
  const [value, setValue] = React.useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: () => (
            // <TextInput
            //   style={styles.input}
            //   onChangeText={(newValue) => {
            //     setValue(newValue);
            //   }}
            //   placeholder="検索"
            //   autoCapitalize="none"
            // />
            <TouchableOpacity
              style={styles.input}
              // onChangeText={(newValue) => {
              //   setValue(newValue);
              // }}
              // placeholder="検索"
              // autoCapitalize="none"
              onPress={() => navigate("Search")}
            >
              <Text
                style={{
                  color: "#555",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                なにをお探しですか?
              </Text>
            </TouchableOpacity>
          ),
          headerLeft: () => <Icon name="qrcode" size={24} />,
          headerRight: () => <Icon name="check" size={24} />,
          headerLeftContainerStyle: styles.headerLeft,
          headerRightContainerStyle: styles.headerRight,
        }}
      >
        {(props) => <SearchTab value={value} />}
      </Stack.Screen>
      {/* <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: () => (
            <TextInput
              style={styles.input}
              onChangeText={(newValue) => {
                setValue(newValue);
              }}
              placeholder="検索"
              autoCapitalize="none"
              onSubmitEditing={()=>navigate('SearchScreen')}
            />
          ),
          headerBackTitleVisible: false,
        }}
      /> */}
      <Stack.Screen
        name="Search"
        // component={Search}
        options={{
          headerTitle: () => (
            <TextInput
              style={styles.input}
              onChangeText={(newValue) => {
                setValue(newValue);
              }}
              placeholder="検索"
              autoCapitalize="none"
              onSubmitEditing={()=>navigate('SearchScreen')}
            />
          ),
          headerBackTitleVisible: false,
        }}
      >
        {(props) => <Search value={value} />}
      </Stack.Screen>
      {/* <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: () => (
            <TextInput
              style={styles.input}
              onChangeText={(newValue) => {
                setValue(newValue);
              }}
              placeholder="検索"
              autoCapitalize="none"
            />
          ),
          headerBackTitleVisible: false,
        }}
      /> */}
      <Stack.Screen
        name="SearchScreen"
        // component={SearchScreen}
        options={{
          headerTitle: () => (
            <TextInput
              style={styles.input}
              onChangeText={(newValue) => {
                setValue(newValue);
              }}
              placeholder="検索"
              autoCapitalize="none"
              value={value}
            />
          ),
          headerBackTitleVisible: false,
        }}
      >
        {(props) => <SearchScreen value={value} />}
      </Stack.Screen>
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
