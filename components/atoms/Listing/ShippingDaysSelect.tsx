import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { SelectProductBoxButton } from ".";

const ShippingDaysSelect: React.FC<{
  route: { params: { setShippingDays: () => void } };
}> = (props) => {
  const { setShippingDays } = props.route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SelectProductBoxButton
            name="1~2日で配送"
            setName={setShippingDays}
          />
          <SelectProductBoxButton
            name="2~3日で配送"
            setName={setShippingDays}
          />
          <SelectProductBoxButton
            name="4~7日で配送"
            setName={setShippingDays}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingDaysSelect;
