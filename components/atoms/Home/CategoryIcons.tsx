import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CategoryIcon from "./CategoryIcon";

export default function CategoryIcons() {
  const [showFlag, setShowFlag] = React.useState(false);

  return (
    <View>
      <View style={styles.category}>
        <CategoryIcon
          color="#FF1A6F"
          name="female"
          size="32"
          category="レディース"
        />
        <CategoryIcon color="#005FFF" name="male" size="32" category="メンズ" />
        <CategoryIcon
          color="#FFCC00"
          name="baby"
          size="32"
          category="ベビー・キッズ"
        />
        <CategoryIcon
          color="#CC66CC"
          name="mobile-alt"
          size="32"
          category="スマホ"
          category2="タブレット"
        />
      </View>
      <View style={styles.category}>
        <CategoryIcon
          color="#FF4F02"
          name="book-open"
          size="28"
          category="本・メディア"
        />
        <CategoryIcon
          color="#FF8C00"
          name="gamepad"
          size="28"
          category="ゲーム"
        />
        <CategoryIcon
          color="#32CD32"
          name="cubes"
          size="32"
          category="おもちゃ"
          category2="ホビー・グッズ"
        />
        <CategoryIcon
          color="#A9A9A9"
          name="box"
          size="28"
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
            <CategoryIcon
              color="#7FFF00"
              name="microphone-alt"
              size="28"
              category="タレントグッズ"
            />
            <CategoryIcon
              color="#DC143C"
              name="eye"
              size="28"
              category="コスメ"
              category2="香水・美容"
            />
            <CategoryIcon
              color="#00FFFF"
              name="basketball-ball"
              size="32"
              category="スポーツ"
              category2="レンジャー"
            />
            <CategoryIcon
              color="#9400D3"
              name="camera"
              size="28"
              category="家電・カメラ"
            />
          </View>
          <View style={styles.category}>
            <CategoryIcon
              color="#00CED1"
              name="home"
              size="28"
              category="インテリア"
              category2="住まい・小物"
            />
            <CategoryIcon
              color="#1E90FF"
              name="car-side"
              size="28"
              category="自動車"
              category2="オートバイ"
            />
            <CategoryIcon
              color="#555"
              name="ticket-alt"
              size="28"
              category="チケット"
            />
            <CategoryIcon
              color="#FF4F50"
              name="donate"
              size="28"
              category="メルカリ寄付"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginRight: 20,
    marginLeft: 20,
  },
  categoryBox: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
    width: 100,
  },
  iconBox: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 5,
  },
  iconBoxTexts: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  iconBoxText: {
    textAlign: "center",
    fontSize: 12,
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
