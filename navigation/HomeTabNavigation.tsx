import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Category, Products, SearchModal } from "../components/atoms/Home";

const Tab = createMaterialTopTabNavigator();

interface HomeTabNavigation {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueArray: string[];
  setValueArray: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  navigation: {
    dispatch: (pushAction: unknown) => void;
  };
}

const HomeTabNavigation: React.FC<HomeTabNavigation> = ({
  modalVisible,
  setModalVisible,
  value,
  setValue,
  valueArray,
  setValueArray,
  index,
  setIndex,
  setCategory,
  navigation,
}) => {
  useEffect(() => {
    setValue(valueArray[index]);
  }, [index, modalVisible, navigation, setValue, valueArray]);

  return (
    <View style={styles.homeTabNavigationContainer}>
      <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
        <Tab.Screen name="おすすめ" component={Products} />
        <Tab.Screen name="新着">
          {() => <Products order="newArrival" />}
        </Tab.Screen>
        <Tab.Screen name="カテゴリー">
          {() => <Category setCategory={setCategory} />}
        </Tab.Screen>
        <Tab.Screen name="保存した検索条件" component={Products} />
      </Tab.Navigator>

      <SearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        value={value}
        setValue={setValue}
        valueArray={valueArray}
        setValueArray={setValueArray}
        index={index}
        setIndex={setIndex}
        navigation={navigation}
      />
    </View>
  );
};

export default HomeTabNavigation;

const styles = StyleSheet.create({
  homeTabNavigationContainer: { flex: 1 },
});
