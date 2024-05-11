import {
  Box,
  Card,
  Text,
} from "@chakra-ui/react";

import FilterSections from "./SideComponents/FilterSections";

const Main = () => {
  return (
    <>
      <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"20px"}>
        <Box mr={'28px'} my= '28px'>
          <Text ml={'28px'}>Filter Searchs</Text>
          <FilterSections />
          <Card variant={'unstyled'}>
            <Text ml={'28px'}>Showing Result</Text>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Main;
