import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./criticScore";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card borderEndRadius={"10"} overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={games.platforms.map((p) => p.platform)}
          />
          <CriticScore critic={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
