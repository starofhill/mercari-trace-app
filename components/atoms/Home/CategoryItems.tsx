import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CategoryItem } from ".";

const CategoryItems: React.FC = () => {
  const [showFlag, setShowFlag] = useState(false);

  return (
    <View>
      <View style={styles.category}>
        <CategoryItem
          color="#FF1A6F"
          name="female"
          size={32}
          category="レディース"
        />
        <CategoryItem color="#005FFF" name="male" size={32} category="メンズ" />
        <CategoryItem
          color="#FFCC00"
          name="baby"
          size={32}
          category="ベビー・キッズ"
        />
        <CategoryItem
          color="#CC66CC"
          name="mobile-alt"
          size={32}
          category="スマホ"
          category2="タブレット"
        />
      </View>
      <View style={styles.category}>
        <CategoryItem
          color="#FF4F02"
          name="book-open"
          size={28}
          category="本・メディア"
        />
        <CategoryItem
          color="#FF8C00"
          name="gamepad"
          size={28}
          category="ゲーム"
        />
        <CategoryItem
          color="#32CD32"
          name="cubes"
          size={32}
          category="おもちゃ"
          category2="ホビー・グッズ"
        />
        <CategoryItem
          color="#A9A9A9"
          name="box"
          size={28}
          category="メルカリ公式"
          category2="梱包グッズ"
        />
      </View>

      {!showFlag && (
        <TouchableOpacity
          style={styles.seeMore}
          onPress={() => {
            setShowFlag(!showFlag);
          }}
        >
          <Text style={styles.seeMoreText}>もっと見る</Text>
          <FontAwesome name="angle-down" size={18} color="#6495ED" />
        </TouchableOpacity>
      )}

      {showFlag && (
        <View>
          <View style={styles.category}>
            <CategoryItem
              color="#7FFF00"
              name="microphone-alt"
              size={28}
              category="タレントグッズ"
            />
            <CategoryItem
              color="#DC143C"
              name="eye"
              size={28}
              category="コスメ"
              category2="香水・美容"
            />
            <CategoryItem
              color="#00FFFF"
              name="basketball-ball"
              size={32}
              category="スポーツ"
              category2="レンジャー"
            />
            <CategoryItem
              color="#9400D3"
              name="camera"
              size={28}
              category="家電・カメラ"
            />
          </View>
          <View style={styles.category}>
            <CategoryItem
              color="#00CED1"
              name="home"
              size={28}
              category="インテリア"
              category2="住まい・小物"
            />
            <CategoryItem
              color="#1E90FF"
              name="car-side"
              size={28}
              category="自動車"
              category2="オートバイ"
            />
            <CategoryItem
              color="#555"
              name="ticket-alt"
              size={28}
              category="チケット"
            />
            <CategoryItem
              color="#FF4F50"
              name="donate"
              size={28}
              category="メルカリ寄付"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginRight: 20,
    marginLeft: 20,
  },
  seeMore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 20,
  },
  seeMoreText: {
    color: "#6495ED",
    marginRight: 5,
  },
});
