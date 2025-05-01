import axios from "axios";
import { Leaderboard, Marketplace } from "../common/Types/appService";

const AppService = {
  getLeaderboard: async (): Promise<Leaderboard> => {
    const endpoint = "https://api-game.bloque.app/game/leaderboard";

    const response = await axios.get(endpoint);

    return response?.data || "";
  },
  getMarketplace: async (): Promise<Marketplace> => {
    const endpoint = "https://api-game.bloque.app/game/market";

    const response = await axios.get(endpoint);

    return response?.data || "";
  },
};

export default AppService;
