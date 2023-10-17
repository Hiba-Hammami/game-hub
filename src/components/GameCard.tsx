import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, CardHeader } from "@chakra-ui/react";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card border={"25"} overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <CardHeader fontSize="2xl">{games.name}</CardHeader>
      </CardBody>
    </Card>
  );
};

export default GameCard;
