import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const HeadingGame = ({ gameQuery }: Props) => {
  const q = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }  Game`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {q}
    </Heading>
  );
};

export default HeadingGame;
