import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { SelectProductBoxButton } from ".";

const ShippingAreaSelect: React.FC<{
  route: { params: { setShippingArea: () => void } };
}> = (props) => {
  const { setShippingArea } = props.route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SelectProductBoxButton name="北海道" setName={setShippingArea} />
          <SelectProductBoxButton name="青森県" setName={setShippingArea} />
          <SelectProductBoxButton name="岩手県" setName={setShippingArea} />
          <SelectProductBoxButton name="宮城県" setName={setShippingArea} />
          <SelectProductBoxButton name="秋田県" setName={setShippingArea} />
          <SelectProductBoxButton name="山形県" setName={setShippingArea} />
          <SelectProductBoxButton name="福島県" setName={setShippingArea} />
          <SelectProductBoxButton name="茨城県" setName={setShippingArea} />
          <SelectProductBoxButton name="栃木県" setName={setShippingArea} />
          <SelectProductBoxButton name="群馬県" setName={setShippingArea} />
          <SelectProductBoxButton name="埼玉県" setName={setShippingArea} />
          <SelectProductBoxButton name="千葉県" setName={setShippingArea} />
          <SelectProductBoxButton name="東京都" setName={setShippingArea} />
          <SelectProductBoxButton name="神奈川県" setName={setShippingArea} />
          <SelectProductBoxButton name="新潟県" setName={setShippingArea} />
          <SelectProductBoxButton name="富山県" setName={setShippingArea} />
          <SelectProductBoxButton name="石川県" setName={setShippingArea} />
          <SelectProductBoxButton name="福井県" setName={setShippingArea} />
          <SelectProductBoxButton name="山梨県" setName={setShippingArea} />
          <SelectProductBoxButton name="長野県" setName={setShippingArea} />
          <SelectProductBoxButton name="岐阜県" setName={setShippingArea} />
          <SelectProductBoxButton name="静岡県" setName={setShippingArea} />
          <SelectProductBoxButton name="愛知県" setName={setShippingArea} />
          <SelectProductBoxButton name="三重県" setName={setShippingArea} />
          <SelectProductBoxButton name="滋賀県" setName={setShippingArea} />
          <SelectProductBoxButton name="京都府" setName={setShippingArea} />
          <SelectProductBoxButton name="大阪府" setName={setShippingArea} />
          <SelectProductBoxButton name="兵庫県" setName={setShippingArea} />
          <SelectProductBoxButton name="奈良県" setName={setShippingArea} />
          <SelectProductBoxButton name="和歌山県" setName={setShippingArea} />
          <SelectProductBoxButton name="鳥取県" setName={setShippingArea} />
          <SelectProductBoxButton name="島根県" setName={setShippingArea} />
          <SelectProductBoxButton name="岡山県" setName={setShippingArea} />
          <SelectProductBoxButton name="広島県" setName={setShippingArea} />
          <SelectProductBoxButton name="山口県" setName={setShippingArea} />
          <SelectProductBoxButton name="徳島県" setName={setShippingArea} />
          <SelectProductBoxButton name="香川県" setName={setShippingArea} />
          <SelectProductBoxButton name="愛媛県" setName={setShippingArea} />
          <SelectProductBoxButton name="高知県" setName={setShippingArea} />
          <SelectProductBoxButton name="福岡県" setName={setShippingArea} />
          <SelectProductBoxButton name="佐賀県" setName={setShippingArea} />
          <SelectProductBoxButton name="長崎県" setName={setShippingArea} />
          <SelectProductBoxButton name="熊本県" setName={setShippingArea} />
          <SelectProductBoxButton name="大分県" setName={setShippingArea} />
          <SelectProductBoxButton name="宮崎県" setName={setShippingArea} />
          <SelectProductBoxButton name="鹿児島県" setName={setShippingArea} />
          <SelectProductBoxButton name="沖縄県" setName={setShippingArea} />
          <SelectProductBoxButton name="未定" setName={setShippingArea} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingAreaSelect;
