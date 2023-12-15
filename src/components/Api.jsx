import React, { useEffect } from "react";
import axios from "axios";

const Api = () => {
  const baseUrl =
    "https://cors-anywhere.herokuapp.com/https://store-site-backend-static.ak.epicgames.com";
  const endpoint = "/freeGamesPromotions";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}${endpoint}`);
        console.log("Free games data:", response.data);
      } catch (error) {
        console.error("Error fetching free games:", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default Api;
