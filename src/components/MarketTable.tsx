import { Item } from "../common/Types/appService";
import { Tooltip } from "./Tooltip";

interface MarketTableProps {
  items: Item[];
}

export const MarketTable: React.FC<MarketTableProps> = ({ items }) => {
  return (
    <div className="w-full h-full flex justify-center gap-4 flex-wrap">
      {items?.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-fit border rounded-lg p-4 flex flex-col justify-between shadow hover:shadow-md transition"
        >
          <Tooltip
            content={
              <div>
                <div className="text-sm font-semibold mb-2">
                  {item.description}
                </div>
                <div className="text-sm font-semibold mb-2">
                  Type: {item.type}
                </div>
              </div>
            }
            position="top"
          >
            <div className="flex flex-row sm:flex-col gap-2 justify-between items-center">
              <div className="text-lg font-bold">{item.name}</div>
              <div className="text-sm font-semibold text-yellow-600">
                Cost: {item.cost} 🪙
              </div>
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};
