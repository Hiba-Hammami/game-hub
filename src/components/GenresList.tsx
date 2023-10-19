import useGenres, { Genre } from "../hooks/useGenres";
import {
  List,
  ListItem,
  Spinner,
  HStack,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imge_url";

interface Props {
  onSelectedGenre: (g: Genre) => void;
  genre: Genre | null;
}

export const GenresList = ({ onSelectedGenre, genre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(g.image_background)}
                objectFit={"cover"}
              ></Image>
              <Button
                fontSize="lg"
                variant={"link"}
                whiteSpace="normal"
                textAlign="left"
                fontWeight={g.id === genre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
