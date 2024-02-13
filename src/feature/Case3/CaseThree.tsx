import { Box, Typography, Stack, List, ListItem } from "@mui/material";

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
interface Props {
  Cities: City[];
}

export const CaseThree = ({ Cities }: Props) => {
  return (
    <>
      <Typography variant="h1" component="h2">
        日本の有名都市の紹介！
      </Typography>
      <List>
        {Cities.map((city) => (
          <ListItem key={city.name}>
            <Stack spacing={2}>
              <Typography variant="h2" component="h3">
                {city.name}
              </Typography>
              <Box>{city.description}</Box>
              <List>
                <ListItem>{city.weather.status}</ListItem>
                <ListItem>最高気温: {city.weather.maxTemperature}℃</ListItem>
                <ListItem>最低気温: {city.weather.minTemperature}℃</ListItem>
                <ListItem>湿度: {city.weather.humidity}%</ListItem>
                <ListItem>風: {city.weather.wind}</ListItem>
              </List>
            </Stack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
