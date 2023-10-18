import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  // background_image: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
