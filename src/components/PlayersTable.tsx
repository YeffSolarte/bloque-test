import { useState } from "react";
import { Player as PlayerType } from "../common/Types/appService";
import { Player } from "./Player";

interface PlayersTableProps {
  players: PlayerType[];
}

export const PlayersTable: React.FC<PlayersTableProps> = ({ players }) => {
  const [openPlayer, setOpenPlayer] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenPlayer((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="hidden md:block overflow-x-auto w-full flex-1 min-h-0 min-w-0">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100/5">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                Rank
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                Player
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                Level
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                XP
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                Gold
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">
                Fish
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {players.map((player) => (
              <Player key={player.rank} player={player} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-2 w-full">
        {players.map((player) => (
          <div
            key={player.rank}
            className="border rounded-lg shadow-sm overflow-hidden w-full"
          >
            <button
              onClick={() => toggleAccordion(player.username)}
              className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-100 font-medium"
            >
              <span>{player.username}</span>
              <span className="text-sm text-gray-300">Rank #{player.rank}</span>
            </button>

            {openPlayer === player.username && (
              <div className="px-4 py-2 text-sm space-y-1 ">
                <div>
                  <strong>Level:</strong> {player.level}
                </div>
                <div>
                  <strong>XP:</strong> {player.xp.toLocaleString()}
                </div>
                <div>
                  <strong>Gold:</strong> {player.gold.toLocaleString()}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      player.isInfected ? "text-red-500" : "text-green-500"
                    }
                  >
                    {player.isInfected ? "Infected" : "Healthy"}
                  </span>
                </div>
                <div>
                  <strong>Fish:</strong> {player.fishEmojis}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
