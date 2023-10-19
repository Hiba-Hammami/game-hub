import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchRes<T> {
  count: number;

  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setloading] = useState(false);

  useEffect(
    () => {
      const abort = new AbortController();
      setloading(true);
      apiClient
        .get<FetchRes<T>>(endPoint, {
          signal: abort.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setloading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setloading(false);
        });

      return () => abort.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
