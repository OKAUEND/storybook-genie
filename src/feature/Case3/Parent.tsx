import { CaseThree } from "./CaseThree";

type City = {
  name: string;
  description: string;
  weather: {
    status: string;
    maxTemperature: number;
    minTemperature: number;
    humidity: number;
    wind: string;
  };
};

export const CaseThreeParent = () => {
  const dummyCities: City[] = [
    {
      name: "東京",
      description:
        "東京は日本の首都であり、世界で最も人口の多い都市圏の 1 つです。この都市は、日本の政治、経済、文化の中心地です。東京には、皇居、東京タワー、渋谷交差点など、数多くの有名な観光スポットがあります。 ",
      weather: {
        status: "晴れ",
        maxTemperature: 12,
        minTemperature: 2,
        humidity: 40,
        wind: "北西 5m/s",
      },
    },
    {
      name: "名古屋",
      description:
        "名古屋は日本の愛知県に位置する都市です。日本の主要な製造業の中心地であり、トヨタ自動車や本田技研工業などの自動車メーカーの本拠地です。名古屋城や熱田神宮など、名古屋には多くの歴史的建造物があります。",
      weather: {
        status: "晴れ",
        maxTemperature: 13,
        minTemperature: 3,
        humidity: 40,
        wind: "北西 5m/s",
      },
    },
    {
      name: "大阪",
      description:
        "大阪は日本の大阪府に位置する都市です。日本の商業と文化の中心地であり、「天下の台所」と呼ばれることもあります。大阪には、大阪城、道頓堀、ユニバーサル・スタジオ・ジャパンなど、多くの観光スポットがあります。 ",
      weather: {
        status: "晴れ",
        maxTemperature: 14,
        minTemperature: 4,
        humidity: 40,
        wind: "北西 5m/s",
      },
    },
    {
      name: "福岡",
      description:
        "福岡は日本の福岡県に位置する都市です。九州地方の中心地であり、「博多」の名で知られています。福岡には、博多ラーメン、太宰府天満宮、糸島などの観光スポットがあります。       ",
      weather: {
        status: "晴れ",
        maxTemperature: 15,
        minTemperature: 5,
        humidity: 40,
        wind: "南南東の風",
      },
    },
  ];

  return <CaseThree Cities={dummyCities} />;
};
