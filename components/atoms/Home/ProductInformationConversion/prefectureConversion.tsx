const prefectureConversion = (Prefecture: string): string | undefined => {
  let prefecture;

  switch (Prefecture) {
    case "hokkaido":
      prefecture = "北海道";
      break;
    case "aomori":
      prefecture = "青森県";
      break;
    case "iwate":
      prefecture = "岩手県";
      break;
    case "miyagi":
      prefecture = "宮城県";
      break;
    case "akita":
      prefecture = "秋田県";
      break;
    case "yamagata":
      prefecture = "山形県";
      break;
    case "fukushima":
      prefecture = "福島県";
      break;
    case "ibaraki":
      prefecture = "茨城県";
      break;
    case "tochigi":
      prefecture = "栃木県";
      break;
    case "gunma":
      prefecture = "群馬県";
      break;
    case "saitama":
      prefecture = "埼玉県";
      break;
    case "chiba":
      prefecture = "千葉県";
      break;
    case "tokyo":
      prefecture = "東京都";
      break;
    case "kanagawa":
      prefecture = "神奈川県";
      break;
    case "niigata":
      prefecture = "新潟県";
      break;
    case "toyama":
      prefecture = "富山県";
      break;
    case "ishikawa":
      prefecture = "石川県";
      break;
    case "fukui":
      prefecture = "福井県";
      break;
    case "yamanashi":
      prefecture = "山梨県";
      break;
    case "nagano":
      prefecture = "長野県";
      break;
    case "gifu":
      prefecture = "岐阜県";
      break;
    case "shizuoka":
      prefecture = "静岡県";
      break;
    case "aichi":
      prefecture = "愛知県";
      break;
    case "mie":
      prefecture = "三重県";
      break;
    case "shiga":
      prefecture = "滋賀県";
      break;
    case "kyoto":
      prefecture = "京都府";
      break;
    case "osaka":
      prefecture = "大阪府";
      break;
    case "hyogo":
      prefecture = "兵庫県";
      break;
    case "nara":
      prefecture = "奈良県";
      break;
    case "wakayama":
      prefecture = "和歌山県";
      break;
    case "tottori":
      prefecture = "鳥取県";
      break;
    case "shimane":
      prefecture = "島根県";
      break;
    case "okayama":
      prefecture = "岡山県";
      break;
    case "hiroshima":
      prefecture = "広島県";
      break;
    case "yamaguchi":
      prefecture = "山口県";
      break;
    case "tokushima":
      prefecture = "徳島県";
      break;
    case "kagawa":
      prefecture = "香川県";
      break;
    case "ehime":
      prefecture = "愛媛県";
      break;
    case "kochi":
      prefecture = "高知県";
      break;
    case "fukuoka":
      prefecture = "福岡県";
      break;
    case "saga":
      prefecture = "佐賀県";
      break;
    case "nagasaki":
      prefecture = "長崎県";
      break;
    case "kumamoto":
      prefecture = "熊本県";
      break;
    case "oita":
      prefecture = "大分県";
      break;
    case "miyazaki":
      prefecture = "宮崎県";
      break;
    case "kagoshima":
      prefecture = "鹿児島県";
      break;
    case "okinawa":
      prefecture = "沖縄県";
      break;
    case "none":
      prefecture = "未定";
      break;
    default:
      break;
  }

  return prefecture;
};

export default prefectureConversion;
