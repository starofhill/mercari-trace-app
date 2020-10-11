import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, StackActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SearchModalContent, SearchCategory, SearchHome } from "../atoms/Home";
import { HomeTabNavigation } from "../../navigation";

const Stack = createStackNavigator();

const Home: React.FC<unknown> = (props) => {
  const { navigate } = useNavigation();
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [valueArray, setValueArray] = useState<string[]>([]);

  const [category, setCategory] = useState("");

  const { navigation } = props;
  const popAction = StackActions.pop(1);

  navigation.addListener("tabPress", () => {
    setValue("");
    setValueArray([]);
    setCategory("");

    navigation.addListener("focus", () => {
      setValue(value);
      setValueArray(valueArray);
      setCategory(category);
    });
  });

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <TouchableOpacity
              style={styles.input}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.searchText}>なにをお探しですか?</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => <Icon name="qrcode" size={24} />,
          headerRight: () => <Icon name="check" size={24} />,
          headerLeftContainerStyle: styles.headerLeft,
          headerRightContainerStyle: styles.headerRight,
        }}
      >
        {() => (
          <HomeTabNavigation
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            value={value}
            setValue={setValue}
            valueArray={valueArray}
            setValueArray={setValueArray}
            setCategory={setCategory}
            navigation={navigation}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="SearchModalContent"
        component={SearchModalContent}
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
            <TouchableOpacity
              style={styles.input}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {category ? (
                <Text style={styles.searchText}>{`${
                  valueArray[valueArray.length - 1]
                }, ${category}`}</Text>
              ) : (
                <Text style={styles.searchText}>
                  {valueArray[valueArray.length - 1]}
                </Text>
              )}
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                setValueArray([...valueArray].splice(0, valueArray.length - 1));
                navigation.dispatch(popAction);
              }}
            >
              <Icon
                name="angle-left"
                size={40}
                color="#ccc"
                style={styles.icon}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: styles.headerLeft,
        }}
      >
        {() => (
          <SearchHome
            value={valueArray[valueArray.length - 1]}
            category={category}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="SearchCategory"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTitle: () => (
            <TouchableOpacity
              style={styles.input}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.searchText}>
                <Text style={styles.boldText}>{category}</Text>からさがす
              </Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(popAction);
                setCategory("");
              }}
            >
              <Icon
                name="angle-left"
                size={40}
                color="#ccc"
                style={styles.icon}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: styles.headerLeft,
          headerRightContainerStyle: styles.headerRight,
        }}
      >
        {() => <SearchCategory category={category} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Home;

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
  boldText: {
    fontWeight: "bold",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
