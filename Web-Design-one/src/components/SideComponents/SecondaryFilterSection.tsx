import {Box,
  Button,
  HStack,
  Switch,
  Text,
  SimpleGrid,
  Menu,
  MenuButton
} from "@chakra-ui/react";

import SortIcon from "../../assets/icon-component/SortIcon";
import VerifiedIcon from "../../assets/icon-component/VerifiedIcon";
import AddCreatorIcon from "../../assets/icon-component/AddCreatorIcon";
import DropDownIconWhite from "../../assets/icon-component/DropDownIconWhite";





const SecondoryFilterSection = () => {
  return (
    <Box borderBottomColor={"black.100"} borderBottomWidth={"2px"} mr={"28px"}>
      <HStack
        className="filterSection"
        justify={"space-between"}
        mr="28px"
        my="20px"
      >
        <SimpleGrid>
          <HStack ml={"28px"}>
            <Button rightIcon={<SortIcon />} variant={"outline"} size={"md"}>
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
          <Menu>
            <MenuButton as={Button}
              leftIcon={<AddCreatorIcon/>}
              rightIcon={<DropDownIconWhite/>}
              size={"lg"}
              bgColor="black"
              variant={"solid"}
              textColor={"white"}
            >
              Add Creators
            </MenuButton>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default SecondoryFilterSection;
