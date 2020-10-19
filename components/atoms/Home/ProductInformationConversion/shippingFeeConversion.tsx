/* eslint-disable camelcase */
const shippingFeeConversion = (shipping_fee: string): string | undefined => {
  let shippingFee;

  switch (shipping_fee) {
    case "include":
      shippingFee = "送料込み(出品者負担)";
      break;
    case "cod":
      shippingFee = "着払い(購入者負担)";
      break;
    default:
      break;
  }

  return shippingFee;
};

export default shippingFeeConversion;
