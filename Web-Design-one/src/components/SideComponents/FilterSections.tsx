import {Box,
  Button,
  HStack,
  Switch,
  Text,
  SimpleGrid
} from "@chakra-ui/react";

import SortIcon from "../../assets/icon-component/SortIcon";
import VerifiedIcon from "../../assets/icon-component/VerifiedIcon";


const FilterSections = () => {
  return (
    <Box  borderBottomColor={'black.100'} borderBottomWidth={'2px'}>
      <HStack 
        className="filterSection"
        justify={"space-between"}
        mr="28px"
        my="20px"
      >
        <SimpleGrid>
          <HStack ml={'28px'}>
            <Button rightIcon={<SortIcon />} variant={"outline"}>
              Best Relevance
            </Button>
            <HStack>
              <Box pl="32px">
                <VerifiedIcon />
              </Box>
              <Text fontSize={"16px"}>App Creators</Text>
            </HStack>
            <Switch size="sm" pl={4} />
          </HStack>
        </SimpleGrid>

        <HStack gap={4}>
          <Button
            size={"lg"}
            bgColor="black"
            variant={"solid"}
            textColor={"white"}
          >
            Add Creators
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default FilterSections;
