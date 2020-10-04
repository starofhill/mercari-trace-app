import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { SelectProductDetailsButton } from ".";

const CategorySelect: React.FC<{
  route: { params: { setCategory: () => void } };
}> = (props) => {
  const setCategory = props.route.params.setCategory;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SelectProductDetailsButton
            categoryName="レディース"
            category="women"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="メンズ"
            category="mens"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="ベビー・キッズ"
            category="baby"
            setCategory={setCategory}
          />

          <SelectProductDetailsButton
            categoryName="インテリア・住まい・小物"
            category="interior"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="本・音楽・ゲーム"
            category="book"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="おもちゃ・ホビー・グッズ"
            category="toys"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="コスメ・香水・美容"
            category="cosmetics"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="家電・スマホ・カメラ"
            category="appliances"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="スポーツ・レジャー"
            category="sports"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="ハンドメイド"
            category="handmade"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="チケット"
            category="ticket"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
            categoryName="自動車・オートバイ"
            category="car"
            setCategory={setCategory}
          />
          <SelectProductDetailsButton
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
