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
          <SelectProductBoxButton
            categoryName="レディース"
            category="women"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="メンズ"
            category="mens"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="ベビー・キッズ"
            category="baby"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="スマホ・タブレット"
            category="smartphone"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="本・メディア"
            category="book"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="ゲーム"
            category="game"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="おもちゃ・ホビー・グッズ"
            category="toys"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="メルカリ公式・梱包グッズ"
            category="mercariOfficialPacking Goods"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="タレントグッズ"
            category="talentGoods"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="コスメ・香水・美容"
            category="cosmetics"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="スポーツ・レジャー"
            category="sports"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="家電・カメラ"
            category="appliances"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="インテリア・住まい・小物"
            category="interior"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="自動車・オートバイ"
            category="car"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="チケット"
            category="ticket"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="メルカリ寄付"
            category="mercariDonation"
            setCategory={setCategory}
          />
          <SelectProductBoxButton
            categoryName="その他"
            category="other"
            setCategory={setCategory}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategorySelect;
