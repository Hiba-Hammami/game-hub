import { GameQuery } from "../App";
import useData from "./useData";

import { Platform } from "./usePlatforms";

/*export interface Platform {
  id: number;
  name: string;
  slug: string;
}*/
export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
