import useGenres from "../hooks/useGenres";
import { List, ListItem, Spinner, HStack, Text, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imge_url";
export const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(g.image_background)}
            ></Image>
            <Text fontSize="lg"> {g.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
