const shippingFeeSelect = (shippingCharges: string): string | undefined => {
  let shippingFee;

  switch (shippingCharges) {
    case "送料込み(出品者負担)":
      shippingFee = "include";
      break;
    case "着払い(購入者負担)":
      shippingFee = "cod";
      break;
    default:
      break;
  }

  return shippingFee;
};

export default shippingFeeSelect;
