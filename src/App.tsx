import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenresList } from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector ";
import HeadingGame from "./components/HeadingGame";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(s) => setGameQuery({ ...gameQuery, search: s })} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              onSelectedGenre={(g) => setGameQuery({ ...gameQuery, genre: g })}
              genre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          {" "}
          <Box paddingLeft={2}>
            <HeadingGame gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  platform={gameQuery.platform}
                  onSelectedPlatform={(p) =>
                    setGameQuery({ ...gameQuery, platform: p })
                  }
                />
              </Box>
              <SortSelector
                setOrderBy={(o) => setGameQuery({ ...gameQuery, ordering: o })}
                sortValue={gameQuery.ordering}
              />
            </Flex>
          </Box>
          <GameGrid myGameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
