import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesRes {
  count: number;

  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const abort = new AbortController();
    apiClient
      .get<FetchGamesRes>("/games", { signal: abort.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => abort.abort();
  }, []);

  return { games, error };
};

export default useGames;
