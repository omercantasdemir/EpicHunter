import { Box, Typography } from "@mui/material";
import React from "react";
import { EpicFreeGames } from "epic-free-games";
import GameDetail from "./Games/GameDetail";
const HomePage = ({ games }) => {
  return (
    <Box className="container">
      <Typography variant="h4" className="center-text">
        Welcome to my home page!
      </Typography>
      <Box className="container detail">
        <Typography sx={{ width: "100%", color: "orange" }} variant="h4">
          This weeks game(s):
        </Typography>
        {games &&
          games.data.Catalog.searchStore.elements.map(
            (game) =>
              game.price.totalPrice.fmtPrice.discountPrice == 0 && (
                <GameDetail key={game.id} game={game} />
              )
          )}
      </Box>
    </Box>
  );
};

export default HomePage;
