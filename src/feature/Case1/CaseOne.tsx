import { Box, Typography, Stack } from "@mui/material";

export const CaseOne = () => {
  return (
    <Box>
      <Typography variant="h1" component="h2">
        CaseOne Title
      </Typography>
      <Stack spacing={2}>
        タイトルとテキストだけのシンプルなコンポーネントです
      </Stack>
    </Box>
  );
};
