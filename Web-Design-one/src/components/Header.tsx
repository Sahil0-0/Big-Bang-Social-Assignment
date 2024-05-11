import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "../assets/icon-component/SearchIcon";
import NotificationIcon from "../assets/icon-component/NotificationIcon";
import Announcement from "../assets/icon-component/Announcement";


const Header = () => {
  return (
    <HStack className="headerLine" my="32px"justifyContent="space-between">
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            type="text"
            h="50px"
            placeholder="Search key word.."
            borderRadius="full"
          />
        </InputGroup>
      </Box>

      <HStack gap={4}>
        <Button borderRadius="full" variant="outline" colorScheme="black">
          25,635 Coins
        </Button>
        <NotificationIcon />
        <Announcement />
        <Button borderRadius="full" variant="outline" colorScheme="black">
          Mason Xavier
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
