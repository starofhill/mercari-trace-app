/* eslint-disable camelcase */
const shippingDaySelect = (shippingDays: string): number | undefined => {
  let shipping_day;

  switch (shippingDays) {
    case "1~2日で配送":
      shipping_day = 2;
      break;
    case "2~3日で配送":
      shipping_day = 3;
      break;
    case "4~7日で配送":
      shipping_day = 7;
      break;
    default:
      break;
  }

  return shipping_day;
};

export default shippingDaySelect;
