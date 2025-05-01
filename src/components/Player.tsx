import { Player as PlayerType } from "../common/Types/appService";

export const Player = ({ player }: { player: PlayerType }) => {
  return (
    <tr key={player.rank} className="hover:bg-gray-50/5">
      <td className="px-4 py-2 text-sm">{player.rank}</td>
      <td className="px-4 py-2 text-sm flex items-center gap-2">
        <span className="font-medium">{player.username}</span>
      </td>
      <td className="px-4 py-2 text-sm">{player.level}</td>
      <td className="px-4 py-2 text-sm">{player.xp.toLocaleString()}</td>
      <td className="px-4 py-2 text-sm">{player.gold.toLocaleString()}</td>
      <td className="px-4 py-2 text-sm">
        {player.isInfected ? (
          <span className="text-red-500 font-semibold">Infected</span>
        ) : (
          <span className="text-green-500 font-semibold">Healthy</span>
        )}
      </td>
      <td className="px-4 py-2 text-sm">{player.fishEmojis}</td>
    </tr>
  );
};
