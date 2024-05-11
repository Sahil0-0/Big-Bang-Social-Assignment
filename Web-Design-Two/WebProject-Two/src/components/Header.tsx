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
import CoinIcon from "../assets/icon-component/CoinIcon";
import ProfilePic from "../assets/icon-component/ProfilePic";
import DropDownArrowBlack from "../assets/icon-component/DropDownArrowBlack";

const Header = () => {
  return (
    <HStack className="headerLine" my="32px" justifyContent="space-between">
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none" boxSize={"50px"}>
            <SearchIcon></SearchIcon>
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search key word.."
            borderRadius="full"
            size={"lg"}
          />
        </InputGroup>
      </Box>

      <HStack gap={2}>
        <Button
          leftIcon={<CoinIcon />}
          borderRadius="full"
          variant="outline"
          colorScheme="black"
          p={"revert-layer"}
        >
          25,635 Coins
        </Button>
        <Button
          leftIcon={<NotificationIcon />}
          iconSpacing={"auto"}
          borderRadius={"full"}
          p={"revert-layer"}
          variant={"unstyled"}
        />

        <Button
          leftIcon={<Announcement />}
          iconSpacing={"auto"}
          borderRadius={"full"}
          p={"revert-layer"}
          variant={"unstyled"}
        />
        <Button
          leftIcon={<ProfilePic />}
          rightIcon={<DropDownArrowBlack />}
          borderRadius="full"
          variant="outline"
          borderColor={"black"}
          p={"revert-layer"}
          size={"lg"}
        >
          Sahil Singh
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
