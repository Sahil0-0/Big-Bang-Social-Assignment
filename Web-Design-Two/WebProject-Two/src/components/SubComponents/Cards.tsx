import { Box, Button, Card, HStack, Stack, Text } from "@chakra-ui/react";
import ProfilePicSmallBox from "../../assets/icon-component/ProfilePicSmaller";
import InstaLogoFilled from "../../assets/icon-component/InstagramIconFilled";
import MenuButtonIcon from "../../assets/icon-component/MenuButtonIcon";
const Cards = () => {
  return (
    <Card
      p={"14px"}
      borderRadius={"12px"}
      boxShadow={"null"}
      borderWidth={"1px"}
      borderColor={"E2E2E2"}
      variant={"outline"}
    >
      <Stack height={"100%"} direction={"row"} justifyContent={"space-between"}>
        <Card
          borderRadius={"8px"}
          px={"10px"}
          p={"14px"}
          boxShadow={"null"}
          borderWidth={"1px"}
          borderColor={"E2E2E2"}
          variant={"outline"}
        >
          <Stack>
            <Box>
              <HStack>
                <ProfilePicSmallBox />
                <Stack gap={"null"}>
                  <Text
                    fontWeight={"semibold"}
                    fontStyle={"Montserrat"}
                    fontSize={"14px"}
                    textColor={"black"}
                  >
                    Vincent Nate
                  </Text>
                  <Text
                    fontWeight={"regular"}
                    fontStyle={"Montserrat"}
                    fontSize={"12px"}
                    textColor={"#666666"}
                  >
                    @annan
                  </Text>
                </Stack>
              </HStack>
            </Box>

            <Box justifyContent={"fit-content"} p={"null"}>
              <HStack gap={"10px"}>
                <InstaLogoFilled />
                <InstaLogoFilled />
              </HStack>
            </Box>
          </Stack>
        </Card>

        <Box width={"100%"}>
          <Stack justifyContent={"space-between"} height={"fit"}>
            <Box>
              <HStack
                gap={"auto"}
                display={"flex"}
                alignItems={"start"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack gap={"8px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Deliverables
                    </Text>
                    <Box>
                      <Text
                        fontWeight={"regular"}
                        fontStyle={"Montserrat"}
                        fontSize={"14px"}
                        textColor={"black"}
                        width={"fit-content"}
                      >
                        Instagram reel X1
                      </Text>
                      <Text
                        fontWeight={"regular"}
                        fontStyle={"Montserrat"}
                        fontSize={"14px"}
                        textColor={"black"}
                        width={"fit-content"}
                      >
                        Youtube Short
                      </Text>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Followers
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      410K
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Reach
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      3M
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Views
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      3.4k
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Engagement
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      3.4K
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Last Bid
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      ₹22.4K
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <MenuButtonIcon />
                </Box>
              </HStack>
            </Box>

            <HStack justifyContent={"space-between"}>
              <Box
                alignItems={"end"}
                borderBottomWidth={"1px"}
                borderBottomColor={"black"}
              >
                <Text
                  fontWeight={"bold"}
                  fontStyle={"Montserrat"}
                  fontSize={"13px"}
                  textColor={"black"}
                  width={"fit-content"}
                >
                  Veiwing bidding history
                </Text>
              </Box>
              <Box>
                <Stack direction={"row"} gap={"14px"} align={"bottom"}>
                  <HStack gap="4px">
                    <Text
                      fontWeight={"semibold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#808080"}
                      width={"fit-content"}
                     
                    >
                      Mode of Payment{" "}
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"13px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      Expedited
                    </Text>
                  </HStack>
                  <Button
                    size="xs"
                    borderRadius={"full"}
                    borderColor={"#EBDFBA"}
                    bgColor={"#F9EECE"}
                    borderWidth={"1px"}
                  >
                    Pending Post approval
                  </Button>
                </Stack>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default Cards;
