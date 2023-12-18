// proxy/index.js
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/games", async (req, res) => {
  try {
    const response = await axios.get(
      "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=TR"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching free games:", error);
    res.status(500).json({ error: "Error fetching free games" });
  }
});

const PORT = 3025;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
