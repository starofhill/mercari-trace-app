const conditionSelect = (condition: string): string | undefined => {
  let Condition;

  switch (condition) {
    case "新品、未使用":
      Condition = "a";
      break;
    case "未使用に近い":
      Condition = "b";
      break;
    case "目立った傷や汚れなし":
      Condition = "c";
      break;
    case "やや傷や汚れあり":
      Condition = "d";
      break;
    case "傷や汚れあり":
      Condition = "e";
      break;
    case "全体的に状態が悪い":
      Condition = "f";
      break;
    default:
      break;
  }

  return Condition;
};

export default conditionSelect;
