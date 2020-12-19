import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { PurchasePaymentMethodBox } from ".";

interface PurchasePaymentMethod {
  route: {
    params: {
      setPaymentMethod: (s: string) => void;
    };
  };
}

const PurchasePaymentMethod: React.FC<PurchasePaymentMethod> = ({ route }) => {
  const { setPaymentMethod } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <PurchasePaymentMethodBox
            name="クレジットカード"
            setName={setPaymentMethod}
          />
          <PurchasePaymentMethodBox
            name="メルペイ"
            setName={setPaymentMethod}
          />
          <PurchasePaymentMethodBox
            name="コンビニ/ATM払い"
            setName={setPaymentMethod}
          />
          <PurchasePaymentMethodBox
            name="d払い(ドコモ)"
            setName={setPaymentMethod}
          />
          <PurchasePaymentMethodBox
            name="auかんたん決済"
            setName={setPaymentMethod}
          />
          <PurchasePaymentMethodBox
            name="ソフトバンクまとめて支払い"
            setName={setPaymentMethod}
          />
          <PurchasePaymentMethodBox
            name="FamilyPay"
            setName={setPaymentMethod}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PurchasePaymentMethod;
