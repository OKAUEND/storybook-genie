import { useQuery } from "@tanstack/react-query";

export type Prefectures = {
  prefCode: number;
  prefName: string;
};

type Response = {
  message: string;
  result: Prefectures[];
};

const fetchCity = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_RESAS_API_KEY;

  if (API_KEY === undefined) {
    throw new Error("API_KEY is undefined");
  }

  const res = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  const data: Response = await res.json();

  const prefectures = data.result.map((pref) => {
    return {
      prefCode: pref.prefCode,
      prefName: pref.prefName,
    };
  });

  return prefectures;
};

export const useCityQuery = () => {
  return useQuery({
    queryKey: ["city"],
    queryFn: fetchCity,
  });
};
