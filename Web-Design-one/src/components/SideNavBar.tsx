import {
  Box,
  VStack,
} from "@chakra-ui/react";
import Logo from "../assets/icon-component/Logo";
import HomeIcon from "../assets/icon-component/HomeIcon";
import AnnouncementSideIcon from "../assets/icon-component/SideAnnouncement";
import UserAnalyticsIcon from "../assets/icon-component/UserAnalyticsIcon";
import StatsIcon from "../assets/icon-component/StatsIcon";
import ActivityIcon from "../assets/icon-component/ActivityIcon";
import RandomIcon from "../assets/icon-component/RadomIcon";

const SideNavBar = () => {
  return (
    <VStack mt="32px">
      <Box pb='64px'>
        <Logo/>
      </Box>

      <VStack gap={4}>
        <HomeIcon />
        <AnnouncementSideIcon/>
        <UserAnalyticsIcon />
        <StatsIcon/>
        <ActivityIcon/>
        <RandomIcon/>

      </VStack>
    </VStack>
  );
};

export default SideNavBar;
