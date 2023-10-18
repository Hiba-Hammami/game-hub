import { Badge } from "@chakra-ui/react";
interface Props {
  critic: number;
}

const CriticScore = ({ critic }: Props) => {
  const color = critic > 75 ? "green" : critic > 60 ? "yellow" : "";
  return (
    <>
      <Badge
        colorScheme={color}
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
      >
        {critic}
      </Badge>
    </>
  );
};

export default CriticScore;
