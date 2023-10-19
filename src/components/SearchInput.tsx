import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input placeholder="Search game" variant="filled"></Input>
    </InputGroup>
  );
};

export default SearchInput;
