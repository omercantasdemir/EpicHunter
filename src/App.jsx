import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Api from "./components/Api";
import HomePage from "./components/HomePage";
import Root from "./components/Root";
import NotFound from "./components/NotFound";

const baseUrl = "http://localhost:3025"; // Adjust the port if needed
const endpoint = "/games?country=TR"; // The correct endpoint on your Express server

function App() {
  const [games, setGames] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}${endpoint}`);
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching free games:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/apirequestdenemesi" element={<Api />} />
      <Route path="/" element={<Root />}>
        <Route path="home" element={<HomePage games={games} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
