import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { SelectProductBoxButton } from ".";

const ShippingChargesSelect: React.FC<{
  route: { params: { setShippingCharges: () => void } };
}> = (props) => {
  const { setShippingCharges } = props.route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SelectProductBoxButton
            name="送料込み(出品者負担)"
            setName={setShippingCharges}
          />
          <SelectProductBoxButton
            name="着払い(購入者負担)"
            setName={setShippingCharges}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingChargesSelect;
