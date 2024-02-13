import { useCityQuery } from "./hooks";
import { Box, Typography, Stack, List, ListItem } from "@mui/material";

export const CaseFive = () => {
  const { data, isLoading } = useCityQuery();
  if (isLoading || data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Typography variant="h1" component="h2">
        日本の都道府県一覧！
      </Typography>
      <List>
        {data.map((city) => (
          <ListItem key={city.prefName}>
            <Stack spacing={2}>
              <Typography variant="h2" component="h3">
                {city.prefName}
              </Typography>
            </Stack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
