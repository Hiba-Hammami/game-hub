import useGenres from "../hooks/useGenres";

export const GenresList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};
