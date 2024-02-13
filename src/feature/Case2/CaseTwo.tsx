import { Box, Typography, Stack, List, ListItem } from "@mui/material";

export const CaseTwo = () => {
  return (
    <>
      <Typography variant="h1" component="h2">
        日本の有名都市の紹介！
      </Typography>
      <List>
        <ListItem>
          <Stack spacing={2}>
            <Typography variant="h2" component="h3">
              東京
            </Typography>
            <Box>
              東京は日本の首都であり、世界で最も人口の多い都市圏の1つです。この都市は、日本の政治、経済、文化の中心地です。東京には、皇居、東京タワー、渋谷交差点など、数多くの有名な観光スポットがあります。
            </Box>
            <List>
              <ListItem>晴れ</ListItem>
              <ListItem>最高気温: 12℃</ListItem>
              <ListItem>最低気温: 2℃</ListItem>
              <ListItem>湿度: 40%</ListItem>
              <ListItem>風: 北西 5m/s</ListItem>
            </List>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack spacing={2}>
            <Typography variant="h2" component="h3">
              名古屋
            </Typography>
            <Box>
              名古屋は日本の愛知県に位置する都市です。日本の主要な製造業の中心地であり、トヨタ自動車や本田技研工業などの自動車メーカーの本拠地です。名古屋城や熱田神宮など、名古屋には多くの歴史的建造物があります。
            </Box>
            <List>
              <ListItem>晴れ</ListItem>
              <ListItem>最高気温: 13℃</ListItem>
              <ListItem>最低気温: 3℃</ListItem>
              <ListItem>湿度: 40%</ListItem>
              <ListItem>風: 北西 5m/s</ListItem>
            </List>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack spacing={2}>
            <Typography variant="h2" component="h3">
              大阪
            </Typography>
            <Box>
              大阪は日本の大阪府に位置する都市です。日本の商業と文化の中心地であり、「天下の台所」と呼ばれることもあります。大阪には、大阪城、道頓堀、ユニバーサル・スタジオ・ジャパンなど、多くの観光スポットがあります。
            </Box>
            <List>
              <ListItem>晴れ</ListItem>
              <ListItem>最高気温: 14℃</ListItem>
              <ListItem>最低気温: 4℃</ListItem>
              <ListItem>湿度: 40%</ListItem>
              <ListItem>風: 北西 5m/s</ListItem>
            </List>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack spacing={2}>
            <Typography variant="h2" component="h3">
              福岡
            </Typography>
            <Box>
              福岡は日本の福岡県に位置する都市です。九州地方の中心地であり、「博多」の名で知られています。福岡には、博多ラーメン、太宰府天満宮、糸島などの観光スポットがあります。
            </Box>
            <List>
              <ListItem>晴れ</ListItem>
              <ListItem>最高気温: 15℃</ListItem>
              <ListItem>最低気温: 5℃</ListItem>
              <ListItem>湿度: 40%</ListItem>
              <ListItem>風: 北西 5m/s</ListItem>
            </List>
          </Stack>
        </ListItem>
      </List>
    </>
  );
};
