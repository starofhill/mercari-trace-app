/* eslint-disable camelcase */
const shippingMethodSelect = (shippingMethod: string): string | undefined => {
  let shipping_method;

  switch (shippingMethod) {
    case "未定":
      shipping_method = "none";
      break;
    case "らくらくメルカリ便":
      shipping_method = "rakuraku";
      break;
    case "ゆうゆうメルカリ便":
      shipping_method = "yuyu";
      break;
    case "梱包・配送たのメル便":
      shipping_method = "tanomeru";
      break;
    case "ゆうメール":
      shipping_method = "yumail";
      break;
    case "レターパック":
      shipping_method = "letterpack";
      break;
    case "普通郵便(定形、定形外)":
      shipping_method = "standard";
      break;
    case "クロネコヤマト":
      shipping_method = "yamato";
      break;
    case "ゆうパック":
      shipping_method = "yupack";
      break;
    case "クリックポスト":
      shipping_method = "clickpost";
      break;
    case "ゆうパケット":
      shipping_method = "yupacket";
      break;
    default:
      break;
  }

  return shipping_method;
};

export default shippingMethodSelect;
