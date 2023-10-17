import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid
        padding="10px"
        spacing={6}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {games.map((g) => (
          <GameCard key={g.id} games={g}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
