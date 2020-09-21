import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { History, Method, Setting } from "../atoms/MerPay";

export default function MerPay() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <History />
          <Method />
          <Setting />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
