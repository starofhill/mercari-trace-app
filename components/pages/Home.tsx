import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { SearchCategory, SearchHome } from "../atoms/Home";
import { HomeTabNavigation } from "../../navigation";
import { Navigation, Store } from "../../Interface";
import {
  resetCategoryAction,
  resetSearchWordAction,
  deleteSearchWordAction,
} from "../../reducks/search/actions";

const Stack = createStackNavigator();

const Home: React.FC<Navigation> = ({ navigation }) => {
  const dispatch = useDispatch();

  const search = useSelector((state: Store) => state.search);
  const { category } = search;
  const { searchWordArray } = search;

  const [modalVisible, setModalVisible] = useState(false);

  const popAction = StackActions.pop(1);

  navigation.addListener("tabPress", () => {
    navigation.navigate("Home");
    dispatch(resetSearchWordAction());
    dispatch(resetCategoryAction());
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
        {(props) => (
          <HomeTabNavigation
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            navigation={props.navigation}
          />
        )}
      </Stack.Screen>

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
                  searchWordArray[searchWordArray.length - 1]
                }, ${category}`}</Text>
              ) : (
                <Text style={styles.searchText}>
                  {searchWordArray[searchWordArray.length - 1]}
                </Text>
              )}
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                dispatch(deleteSearchWordAction());
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
        {() => <SearchHome />}
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
                dispatch(resetCategoryAction);
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
