import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { SelectProductBoxButton } from ".";

const CategorySelect: React.FC<{
  route: { params: { setCategory: () => void } };
}> = (props) => {
  const { setCategory } = props.route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SelectProductBoxButton name="レディース" setName={setCategory} />
          <SelectProductBoxButton name="メンズ" setName={setCategory} />
          <SelectProductBoxButton name="ベビー・キッズ" setName={setCategory} />
          <SelectProductBoxButton
            name="スマホ・タブレット"
            setName={setCategory}
          />
          <SelectProductBoxButton name="本・メディア" setName={setCategory} />
          <SelectProductBoxButton name="ゲーム" setName={setCategory} />
          <SelectProductBoxButton
            name="おもちゃ・ホビー・グッズ"
            setName={setCategory}
          />
          <SelectProductBoxButton
            name="メルカリ公式・梱包グッズ"
            setName={setCategory}
          />
          <SelectProductBoxButton name="タレントグッズ" setName={setCategory} />
          <SelectProductBoxButton
            name="コスメ・香水・美容"
            setName={setCategory}
          />
          <SelectProductBoxButton
            name="スポーツ・レジャー"
            setName={setCategory}
          />
          <SelectProductBoxButton name="家電・カメラ" setName={setCategory} />
          <SelectProductBoxButton
            name="インテリア・住まい・小物"
            setName={setCategory}
          />
          <SelectProductBoxButton
            name="自動車・オートバイ"
            setName={setCategory}
          />
          <SelectProductBoxButton name="チケット" setName={setCategory} />
          <SelectProductBoxButton name="メルカリ寄付" setName={setCategory} />
          <SelectProductBoxButton name="その他" setName={setCategory} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategorySelect;
