import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  // background_image: string;
}

interface FetchGenerRes {
  count: number;

  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    const abort = new AbortController();
    setloading(true);
    apiClient
      .get<FetchGenerRes>("/genres", { signal: abort.signal })
      .then((res) => {
        setGenres(res.data.results);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setloading(false);
      });

    return () => abort.abort();
  }, []);

  return { genres: genres, error, isLoading };
};

export default useGenres;
