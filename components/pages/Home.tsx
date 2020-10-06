import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Category,
  NewArrival,
  Products,
  Search,
  SearchHome,
} from "../atoms/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

interface SearchTab {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueArray: string[];
  setValueArray: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  navigation: {
    dispatch: (pushAction: any) => void;
  };
}

const SearchTab: React.FC<SearchTab> = ({
  modalVisible,
  setModalVisible,
  value,
  setValue,
  valueArray,
  setValueArray,
  index,
  setIndex,
  ...props
}) => {
  const navigation = props.navigation;
  const pushAction = StackActions.push("SearchHome");

  useEffect(() => {
    setValue(valueArray[index]);
  }, [modalVisible]);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
        <Tab.Screen name="おすすめ" component={Products} />
        <Tab.Screen name="新着" component={NewArrival} />
        <Tab.Screen name="カテゴリー" component={Category} />
        <Tab.Screen name="保存した検索条件" component={Products} />
      </Tab.Navigator>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
            }}
          >
            <SafeAreaView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Icon
                    name="close"
                    size={32}
                    color="#ccc"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  />
                </TouchableOpacity>
                {value ? (
                  <TextInput
                    style={styles.input}
                    onChangeText={(newValue) => {
                      setValue(newValue);
                    }}
                    onSubmitEditing={() => {
                      navigation.dispatch(pushAction);
                      setModalVisible(!modalVisible);
                      setValueArray([...valueArray, value]);
                      setIndex(index + 1);
                    }}
                    placeholder="検索"
                    autoCapitalize="none"
                    value={value}
                  />
                ) : (
                  <TextInput
                    style={styles.input}
                    onChangeText={(newValue) => {
                      setValue(newValue);
                    }}
                    placeholder="検索"
                    autoCapitalize="none"
                    value={value}
                  />
                )}
              </View>
              <Search />
            </SafeAreaView>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const Home: React.FC<any> = (props) => {
  const { navigate } = useNavigation();
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [valueArray, setValueArray] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);

  const navigation = props.navigation;
  const popAction = StackActions.pop(1);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <TouchableOpacity
              style={styles.input}
              onPress={() => setModalVisible(!modalVisible)}
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
          <SearchTab
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            value={value}
            setValue={setValue}
            valueArray={valueArray}
            setValueArray={setValueArray}
            index={index}
            setIndex={setIndex}
            {...props}
          />
        )}
      </Stack.Screen>

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
            <TouchableOpacity
              style={styles.input}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.searchText}>{valueArray[index]}</Text>
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                setValueArray([...valueArray].splice(0, valueArray.length - 1));
                setIndex(index - 1);
                navigation.dispatch(popAction);
              }}
            >
              <Icon
                name="angle-left"
                size={40}
                color="#ccc"
                style={{ justifyContent: "center", alignItems: "center" }}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 30,
          },
        }}
      >
        {(props) => <SearchHome {...props} value={valueArray[index]} />}
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
});
