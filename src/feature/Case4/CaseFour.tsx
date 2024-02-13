import { TextField, Typography, List, ListItem, Button } from "@mui/material";
import { useInput, useTextItems } from "./hooks";

export const CaseFour = () => {
  const [input, setInput] = useInput();
  const [textItems, addTextItem] = useTextItems();

  return (
    <div>
      <Typography variant="h1" component="h2">
        入力フォーム
      </Typography>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label="テキストを入力"
      />
      <Button onClick={() => addTextItem(input)}>追加</Button>
      <List>
        {textItems.map((text, index) => (
          <ListItem key={index}>{text}</ListItem>
        ))}
      </List>
    </div>
  );
};
