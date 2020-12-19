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
        <SelectProductBoxButton name="新品、未使用" setName={setCondition} />
        <SelectProductBoxButton name="未使用に近い" setName={setCondition} />
        <SelectProductBoxButton
          name="目立った傷や汚れなし"
          setName={setCondition}
        />
        <SelectProductBoxButton
          name="やや傷や汚れあり"
          setName={setCondition}
        />
        <SelectProductBoxButton name="傷や汚れあり" setName={setCondition} />
        <SelectProductBoxButton
          name="全体的に状態が悪い"
          setName={setCondition}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductConditionSelect;
