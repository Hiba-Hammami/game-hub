import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imge_url";
import Emoji from "./Emoji ";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(games.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={games.platforms.map((p) => p.platform)}
          />
          <CriticScore critic={games.metacritic} />
        </HStack>

        <Heading fontSize="2xl">
          {games.name}
          <Emoji rating={games.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
