import { Avatar, Box, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

import Item from "../components/Item";

export default function Profile() {
  return (
    <Box>
      <Box sx={{ bgcolor: "banner", height: 150, borderRadius: 4 }}></Box>
      <Box
        sx={{
          mb: 4,
          marginTop: "-60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar sx={{ width: 100, height: 100, bgcolor: pink[500] }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography>Akali</Typography>
          <Typography sx={{ fontSize: "0.8em", color: "text.fade" }}>
            Akali's bio content
          </Typography>
        </Box>
      </Box>
      <Item
        key={1}
        remove={() => {}}
        item={{
          id: 1,
          content: "A post content from Akali",
          name: "Akali",
        }}
      />
    </Box>
  );
}
