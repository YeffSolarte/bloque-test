import { useQuery } from "@tanstack/react-query";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { AppService, Queries } from "./api";
import { Leaderboard, Marketplace } from "./common/Types/appService";
import { Pagination } from "./components/Pagination";
import { PlayersTable } from "./components/PlayersTable";
import { MarketTable } from "./components/MarketTable";
import { Spinner } from "./components/Spiner";

const PAGE_SIZE = 15;

function App(): ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data: dataLeaderboard, isLoading: isLoadingLeaderboard } = useQuery<
    Leaderboard,
    Error
  >({
    queryKey: [Queries.GET_LEADERBOARD],
    queryFn: async () => AppService.getLeaderboard(),
  });

  const { data: dataMarketplace, isLoading: isLoadingMarketplace } = useQuery<
    Marketplace,
    Error
  >({
    queryKey: [Queries.GET_MARKETPLACE],
    queryFn: async () => AppService.getMarketplace(),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Only reset page when search changes, not when page changes
    if (search && currentPage !== 1) {
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const players = useMemo(() => {
    return (
      dataLeaderboard?.players
        ?.filter((player) =>
          player.username.toLowerCase().includes(search.toLowerCase())
        )
        .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE) || []
    );
  }, [dataLeaderboard, currentPage, search]);

  const totalPages = useMemo(() => {
    return Math.ceil(
      (dataLeaderboard?.players?.filter((player) =>
        player.username.toLowerCase().includes(search.toLowerCase())
      ).length || 0) / PAGE_SIZE
    );
  }, [dataLeaderboard, search]);

  return (
    <div className="p-4 w-screen min-h-screen flex flex-col items-center justify-start gap-8">
      <div className="w-full max-w-[1280px] flex flex-col items-center justify-start gap-4">
        <h3 className="text-2xl font-bold">Marketplace</h3>
        {isLoadingMarketplace ? (
          <Spinner />
        ) : (
          <MarketTable items={dataMarketplace?.items || []} />
        )}
      </div>
      <div className="w-full max-w-[1280px] flex-1 min-h-0 min-w-0 flex flex-col items-center justify-start gap-4 md:px-4">
        <h3 className="text-2xl font-bold">Leaderboard</h3>
        {isLoadingLeaderboard ? (
          <Spinner />
        ) : (
          <div className="w-full flex-1 min-h-0 min-w-0 overflow-y-auto flex flex-col items-center justify-start gap-4">
            <input
              type="text"
              placeholder="Search"
              value={search}
              className="w-full p-2 rounded-md border border-gray-300"
              onChange={(e) => setSearch(e.target.value)}
            />
            <PlayersTable players={players} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
