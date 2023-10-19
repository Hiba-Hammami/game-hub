import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setOrderBy: (o: string) => void;
  sortValue: string;
}
const SortSelector = ({ setOrderBy, sortValue }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sort = sortOrders.find((f) => f.value === sortValue);
  return (
    <Menu>
      {" "}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((o) => (
          <MenuItem
            onClick={() => setOrderBy(o.value)}
            key={o.value}
            value={o.value}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
