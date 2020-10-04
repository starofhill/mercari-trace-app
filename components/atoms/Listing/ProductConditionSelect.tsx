import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SelectProductDetailsButton } from ".";

const ProductConditionSelect: React.FC<{
  route: { params: { setCondition: () => void } };
}> = (props) => {
  const setCondition = props.route.params.setCondition;

  return (
    <SafeAreaView>
      <View>
        <SelectProductDetailsButton
          conditionName="新品、未使用"
          condition={1}
          setCondition={setCondition}
        />
        <SelectProductDetailsButton
          conditionName="未使用に近い"
          condition={2}
          setCondition={setCondition}
        />
        <SelectProductDetailsButton
          conditionName="目立った傷や汚れなし"
          condition={3}
          setCondition={setCondition}
        />
        <SelectProductDetailsButton
          conditionName="やや傷や汚れあり"
          condition={4}
          setCondition={setCondition}
        />
        <SelectProductDetailsButton
          conditionName="傷や汚れあり"
          condition={5}
          setCondition={setCondition}
        />
        <SelectProductDetailsButton
          conditionName="全体的に状態が悪い"
          condition={6}
          setCondition={setCondition}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductConditionSelect;
