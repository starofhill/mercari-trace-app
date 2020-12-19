/* eslint-disable camelcase */
const shippingMethodConversion = (
  shipping_method: string
): string | undefined => {
  let shippingMethod;

  switch (shipping_method) {
    case "none":
      shippingMethod = "未定";
      break;
    case "rakuraku":
      shippingMethod = "らくらくメルカリ便";
      break;
    case "yuyu":
      shippingMethod = "ゆうゆうメルカリ便";
      break;
    case "tanomeru":
      shippingMethod = "梱包・配送たのメル便";
      break;
    case "yumail":
      shippingMethod = "ゆうメール";
      break;
    case "letterpack":
      shippingMethod = "レターパック";
      break;
    case "standard":
      shippingMethod = "普通郵便(定形、定形外)";
      break;
    case "yamato":
      shippingMethod = "クロネコヤマト";
      break;
    case "yupack":
      shippingMethod = "ゆうパック";
      break;
    case "clickpost":
      shippingMethod = "クリックポスト";
      break;
    case "yupacket":
      shippingMethod = "ゆうパケット";
      break;
    default:
      break;
  }

  return shippingMethod;
};

export default shippingMethodConversion;
