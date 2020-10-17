import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SelectProductBoxButton } from ".";

const ProductConditionSelect: React.FC<{
  route: { params: { setCondition: () => void } };
}> = (props) => {
  const { setCondition } = props.route.params;

  return (
    <SafeAreaView>
      <View>
        <SelectProductBoxButton
          conditionName="新品、未使用"
          condition={1}
          setCondition={setCondition}
        />
        <SelectProductBoxButton
          conditionName="未使用に近い"
          condition={2}
          setCondition={setCondition}
        />
        <SelectProductBoxButton
          conditionName="目立った傷や汚れなし"
          condition={3}
          setCondition={setCondition}
        />
        <SelectProductBoxButton
          conditionName="やや傷や汚れあり"
          condition={4}
          setCondition={setCondition}
        />
        <SelectProductBoxButton
          conditionName="傷や汚れあり"
          condition={5}
          setCondition={setCondition}
        />
        <SelectProductBoxButton
          conditionName="全体的に状態が悪い"
          condition={6}
          setCondition={setCondition}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductConditionSelect;
