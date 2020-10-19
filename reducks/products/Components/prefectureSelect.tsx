const prefectureSelect = (shippingArea: string): string | undefined => {
  let prefecture;

  switch (shippingArea) {
    case "北海道":
      prefecture = "hokkaido";
      break;
    case "青森県":
      prefecture = "aomori";
      break;
    case "岩手県":
      prefecture = "iwate";
      break;
    case "宮城県":
      prefecture = "miyagi";
      break;
    case "秋田県":
      prefecture = "akita";
      break;
    case "山形県":
      prefecture = "yamagata";
      break;
    case "福島県":
      prefecture = "fukushima";
      break;
    case "茨城県":
      prefecture = "ibaraki";
      break;
    case "栃木県":
      prefecture = "tochigi";
      break;
    case "群馬県":
      prefecture = "gunma";
      break;
    case "埼玉県":
      prefecture = "saitama";
      break;
    case "千葉県":
      prefecture = "chiba";
      break;
    case "東京都":
      prefecture = "tokyo";
      break;
    case "神奈川県":
      prefecture = "kanagawa";
      break;
    case "新潟県":
      prefecture = "niigata";
      break;
    case "富山県":
      prefecture = "toyama";
      break;
    case "石川県":
      prefecture = "ishikawa";
      break;
    case "福井県":
      prefecture = "fukui";
      break;
    case "山梨県":
      prefecture = "yamanashi";
      break;
    case "長野県":
      prefecture = "nagano";
      break;
    case "岐阜県":
      prefecture = "gifu";
      break;
    case "静岡県":
      prefecture = "shizuoka";
      break;
    case "愛知県":
      prefecture = "aichi";
      break;
    case "三重県":
      prefecture = "mie";
      break;
    case "滋賀県":
      prefecture = "shiga";
      break;
    case "京都府":
      prefecture = "kyoto";
      break;
    case "大阪府":
      prefecture = "osaka";
      break;
    case "兵庫県":
      prefecture = "hyogo";
      break;
    case "奈良県":
      prefecture = "nara";
      break;
    case "和歌山県":
      prefecture = "wakayama";
      break;
    case "鳥取県":
      prefecture = "tottori";
      break;
    case "島根県":
      prefecture = "shimane";
      break;
    case "岡山県":
      prefecture = "okayama";
      break;
    case "広島県":
      prefecture = "hiroshima";
      break;
    case "山口県":
      prefecture = "yamaguchi";
      break;
    case "徳島県":
      prefecture = "tokushima";
      break;
    case "香川県":
      prefecture = "kagawa";
      break;
    case "愛媛県":
      prefecture = "ehime";
      break;
    case "高知県":
      prefecture = "kochi";
      break;
    case "福岡県":
      prefecture = "fukuoka";
      break;
    case "佐賀県":
      prefecture = "saga";
      break;
    case "長崎県":
      prefecture = "nagasaki";
      break;
    case "熊本県":
      prefecture = "kumamoto";
      break;
    case "大分県":
      prefecture = "oita";
      break;
    case "宮崎県":
      prefecture = "miyazaki";
      break;
    case "鹿児島県":
      prefecture = "kagoshima";
      break;
    case "沖縄県":
      prefecture = "okinawa";
      break;
    case "未定":
      prefecture = "none";
      break;
    default:
      break;
  }

  return prefecture;
};

export default prefectureSelect;
