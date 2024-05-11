import { Box, Button, VStack } from "@chakra-ui/react";
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
      <Box position="fixed">
        <Box mb={"64px"}>
          <Button
            leftIcon={<Logo />}
            borderRadius={"full"}
            p={"revert-layer"}
            variant={"unstyled"}
          />
        </Box>

        <VStack gap={10}>
          <Button
            leftIcon={<HomeIcon />}
            iconSpacing={"auto"}
            p={"unset"}
            variant={"unstyled"}
          />
          <Button
            leftIcon={<AnnouncementSideIcon />}
            iconSpacing={"auto"}
            p={"revert-layer"}
            variant={"unstyled"}
          />
          <Button
            leftIcon={<UserAnalyticsIcon />}
            
           size={'md'}
            variant={"unstyled"}
          />
          <Button
            leftIcon={<StatsIcon />}
            iconSpacing={"auto"}
            borderRadius={"full"}
            p={"revert-layer"}
            variant={"unstyled"}
          />
          <Button
            leftIcon={<ActivityIcon />}
            iconSpacing={"auto"}
            borderRadius={"full"}
            p={"revert-layer"}
            variant={"unstyled"}
          />
          <Button
            leftIcon={<RandomIcon />}
            iconSpacing={"auto"}
            borderRadius={"full"}
            p={"revert-layer"}
            variant={"unstyled"}
          />
        </VStack>
      </Box>
    </VStack>
  );
};

export default SideNavBar;
