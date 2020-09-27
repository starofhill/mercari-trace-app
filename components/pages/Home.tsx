import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Category, Products, Search, SearchHome } from "../atoms/Home";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function SearchTab() {
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
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
        component={SearchTab}
        options={{
          headerTitle: () => (
            <TouchableOpacity
              style={styles.input}
              onPress={() => navigate("Search")}
            >
              <Text style={styles.searchText}>なにをお探しですか?</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => <Icon name="qrcode" size={24} />,
          headerRight: () => <Icon name="check" size={24} />,
          headerLeftContainerStyle: styles.headerLeft,
          headerRightContainerStyle: styles.headerRight,
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          // TextInputが入力されていなければページ遷移なし
          headerTitle: () =>
            value ? (
              <TextInput
                style={styles.input}
                onChangeText={(newValue) => {
                  setValue(newValue);
                }}
                placeholder="検索"
                autoCapitalize="none"
                onSubmitEditing={() => navigate("SearchHome")}
              />
            ) : (
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
      />

      <Stack.Screen
        name="SearchHome"
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
        {() => <SearchHome value={value} />}
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
  searchText: {
    color: "#555",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
});
