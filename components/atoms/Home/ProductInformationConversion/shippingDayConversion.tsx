/* eslint-disable camelcase */
const shippingDayConversion = (shipping_day: number): string | undefined => {
  let shippingDay;

  switch (shipping_day) {
    case 2:
      shippingDay = "1~2日で配送";
      break;
    case 3:
      shippingDay = "2~3日で配送";
      break;
    case 7:
      shippingDay = "4~7日で配送";
      break;
    default:
      break;
  }

  return shippingDay;
};

export default shippingDayConversion;
