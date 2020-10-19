const conditionConversion = (Condition: string): string | undefined => {
  let condition;

  switch (Condition) {
    case "a":
      condition = "新品、未使用";
      break;
    case "b":
      condition = "未使用に近い";
      break;
    case "c":
      condition = "目立った傷や汚れなし";
      break;
    case "d":
      condition = "やや傷や汚れあり";
      break;
    case "e":
      condition = "傷や汚れあり";
      break;
    case "f":
      condition = "全体的に状態が悪い";
      break;
    default:
      break;
  }

  return condition;
};

export default conditionConversion;
