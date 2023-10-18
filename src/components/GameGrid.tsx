import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();
  const sk = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid
        padding="10px"
        spacing={6}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading &&
          sk.map((s) => (
            <GameCardContainer>
              <GameCardSkeleton key={s} />{" "}
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer>
            {" "}
            <GameCard key={g.id} games={g}></GameCard>{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
