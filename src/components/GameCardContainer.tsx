import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow={"hidden"} borderEndRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
