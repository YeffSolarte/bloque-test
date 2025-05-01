import { Leaderboard, Marketplace } from "../common/Types/appService";

const AppService = {
  getLeaderboard: async (): Promise<Leaderboard> => {
    const endpoint = "https://api-game.bloque.app/game/leaderboard";

    const response = await fetch(endpoint);
    const data = await response.json();

    return data || "";
  },
  getMarketplace: async (): Promise<Marketplace> => {
    const endpoint = "https://api-game.bloque.app/game/market";

    const response = await fetch(endpoint);
    const data = await response.json();

    return data || "";
  },
};

export default AppService;
