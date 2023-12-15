import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const GameDetail = ({ game }) => {
  const [timeLeft, setTimeLeft] = useState();
  const getTimeLeft = () => {
    setTimeLeft(
      `${Math.floor(
        moment.duration(moment(game.expiryDate).diff(moment())).asDays()
      )} days : ${moment
        .duration(moment(game.expiryDate).diff(moment()))
        .hours()} hours: ${moment
        .duration(moment(game.expiryDate).diff(moment()))
        .minutes()} minutes : ${moment
        .duration(moment(game.expiryDate).diff(moment()))
        .seconds()} seconds `
    );
  };
  setTimeout(() => {
    getTimeLeft();
  }, 1000);
  console.log(game);
  return (
    <Box className="detailView">
      <Link
        style={{ color: "black" }}
        to={`https://store.epicgames.com/en-US/p/${game.productSlug}`}
      >
        <Typography variant="h4" className="center-text">
          {game.title}
        </Typography>
      </Link>
      <Box className="imgBox">
        <img width="75%" height="75%" src={game.keyImages[0].url} />
      </Box>
      <Box sx={{}}>
        <Typography variant="h6">{game.description}</Typography>
        {game.price.totalPrice.fmtPrice.originalPrice !==
          game.price.totalPrice.fmtPrice.discountPrice && (
          <Typography
            className="center-text"
            sx={{ textDecoration: "line-through" }}
          >
            {game.price.totalPrice.fmtPrice.originalPrice}₺
          </Typography>
        )}
        <Link
          sx={{ textDecoration: "none" }}
          to={`https://store.epicgames.com/en-US/p/${game.productSlug}`}
        >
          {game.price.totalPrice.fmtPrice.discountPrice == 0 ? (
            <Typography
              sx={{ color: "red" }}
              variant="h4"
              className="center-text"
            >
              Free!
            </Typography>
          ) : (
            <Typography className="center-text">
              {game.price.totalPrice.fmtPrice.discountPrice}₺
            </Typography>
          )}
        </Link>
        {game.expiryDate && (
          <Typography variant="h6" className="center-text">
            Valid For : {timeLeft}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default GameDetail;
