import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, CardHeader } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card borderEndRadius={"10"} overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <CardHeader fontSize="2xl">{games.name}</CardHeader>
        <PlatformIconList platforms={games.platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
