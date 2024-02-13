import { useState } from "react";

export const useTextItems = () => {
  const [textItems, setTextItems] = useState<string[]>([]);

  const addTextItem = (text: string) => {
    if (text.length === 0) return;
    setTextItems([...textItems, text]);
  };

  return [textItems, addTextItem] as const;
};
