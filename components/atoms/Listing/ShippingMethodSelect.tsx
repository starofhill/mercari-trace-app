import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { SelectProductBoxButton } from ".";

const ShippingMethodSelect: React.FC<{
  route: { params: { setShippingMethod: () => void } };
}> = (props) => {
  const { setShippingMethod } = props.route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SelectProductBoxButton name="未定" setName={setShippingMethod} />
          <SelectProductBoxButton
            name="らくらくメルカリ便"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="ゆうゆうメルカリ便"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="梱包・配送たのメル便"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="ゆうメール"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="レターパック"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="普通郵便(定形、定形外)"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="クロネコヤマト"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="ゆうパック"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="クリックポスト"
            setName={setShippingMethod}
          />
          <SelectProductBoxButton
            name="ゆうパケット"
            setName={setShippingMethod}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingMethodSelect;
