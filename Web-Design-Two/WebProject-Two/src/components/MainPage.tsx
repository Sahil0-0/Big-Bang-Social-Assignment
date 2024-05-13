import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import DropDownArrowBlack from "../assets/icon-component/DropDownArrowBlack";
import LockIcon from "../assets/icon-component/LockIcon";
import DeadLineIcon from "../assets/icon-component/DeadLineIcon";
import SubmissionIcon from "../assets/icon-component/SubmissionIcon";
import GoliveIcon from "../assets/icon-component/GoliveIcon";
import ProfileIcon from "../assets/icon-component/ProfileIcon";
import LikeIcon from "../assets/icon-component/LikeIcon";
import LikeIconGray from "../assets/icon-component/LikeIconGray";
import DollarIcon from "../assets/icon-component/DollarIcon";
import NicheIcon from "../assets/icon-component/NiceIcon";
import BudgetIcon from "../assets/icon-component/BudgetIcon";
import SearchIcon from "../assets/icon-component/SearchIcon";
import FilterIcon from "../assets/icon-component/FilterIcon";
import CloseCircleIcon from "../assets/icon-component/CloseCircleIcon";
import Cards from "./SubComponents/Cards";


const MainPage = () => {
  return (
    <Box>
      <Stack direction={"row"} gap={"12px"}>
        <Flex
          className={"MainSectionOne"}
          w={"30%"}
          border={"2px"}
          borderRadius={"16px"}
          overflow={"hidden"}
        >
          <Box flex="1">
            <Box
              width={"100%"}
              h={"210px"}
              px={"8px"}
              pt={"8px"}
              overflow={"hidden"}
            >
              <Button
                leftIcon={<DropDownArrowBlack />}
                fontWeight={"bold"}
                borderRadius={"full"}
                variant={"outline"}
                borderColor={"black"}
              >
                Back
              </Button>
            </Box>

            <Box px={"24px"} py={"16px"}>
              <Stack gap={"20px"}>
                <Card align={"left"} boxShadow={"null"}>
                  <Stack justifyContent={"Left"}>
                    <HStack>
                      <Text size="2xl" fontWeight={"bold"}>
                        Summer Campaign
                      </Text>
                      <Button
                        bgColor={"#FFF4CC"}
                        borderRadius={"full"}
                        size={"xs"}
                        px={"8px"}
                        py={"5px"}
                      >
                        Live
                      </Button>
                    </HStack>

                    <HStack>
                      <LockIcon />
                      <Text fontSize={"12px"} as={"b"}>
                        Closed campaign
                      </Text>
                    </HStack>

                    <Text fontSize={"13px"} pt={"16px"}>
                      Black mirror is a television series released by Netflix
                      and it’s 6th season is here, the main objective of this
                      campaign is to target millennial audiences who are into
                      watching movies and TV series...
                    </Text>
                  </Stack>
                </Card>

                <Card variant={"outline"} borderRadius={"12px"}>
                  <Stack p={"20px"} gap={"20px"}>
                    <HStack>
                      <DeadLineIcon />
                      <Box>
                        <Stack gap={"null"}>
                          <Text as={"b"} fontSize={"14px"}>
                            Application Deadline
                          </Text>
                          <Text fontSize={"12px"} color={"gray"}>
                            Feb 27, 2024 11:59 PM
                          </Text>
                        </Stack>
                      </Box>
                    </HStack>

                    <HStack>
                      <SubmissionIcon />
                      <Box>
                        <Stack gap={"null"}>
                          <Text as={"b"} fontSize={"14px"}>
                            Content submission deadline
                          </Text>
                          <Text fontSize={"12px"} color={"gray"}>
                            Feb 27, 2024 11:59 PM
                          </Text>
                        </Stack>
                      </Box>
                    </HStack>

                    <HStack>
                      <GoliveIcon />
                      <Box>
                        <Stack gap={"null"}>
                          <Text as={"b"} fontSize={"14px"}>
                            Content go-live date
                          </Text>
                          <Text fontSize={"12px"} color={"gray"}>
                            Feb 27, 2024 11:59 PM
                          </Text>
                        </Stack>
                      </Box>
                    </HStack>
                  </Stack>
                </Card>

                <Box>
                  <Text fontSize={"13px"}>
                    Accepting applications till <br />
                    Feb 27, 2024 11:59 PM
                  </Text>
                </Box>

                <Box>
                  <Button bgColor={"#1F1F1F"} textColor={"white"}>
                    View Report
                  </Button>
                </Box>

                <Card
                  bgColor={"yellow.100"}
                  justifyContent={"space-between"}
                  boxShadow={"null"}
                  borderRadius={"12px"}
                >
                  <Stack p={"20px"} gap={"20px"}>
                    <HStack>
                      <ProfileIcon />
                      <Stack gap={"null"}>
                        <Text as={"b"} color={"#6C5606"} fontSize={"11px"}>
                          Total applcations
                        </Text>
                        <Text as={"b"} color={"#1F1F1F"} fontSize={"16px"}>
                          1 creator
                        </Text>
                      </Stack>
                    </HStack>

                    <HStack>
                      <LikeIcon />
                      <Stack gap={"null"}>
                        <Text as={"b"} color={"#6C5606"} fontSize={"11px"}>
                          Shortlisted
                        </Text>
                        <Text as={"b"} color={"#1F1F1F"} fontSize={"16px"}>
                          0 creator
                        </Text>
                      </Stack>
                    </HStack>

                    <HStack>
                      <BudgetIcon />
                      <Stack gap={"null"}>
                        <Text as={"b"} color={"#6C5606"} fontSize={"11px"}>
                          Budget Exhausted
                        </Text>
                        <Text as={"b"} color={"#1F1F1F"} fontSize={"16px"}>
                          ₹0
                        </Text>
                      </Stack>
                    </HStack>
                  </Stack>
                </Card>

                <Divider orientation="horizontal" />

                <Box>
                  <Card borderRadius={"12px"} borderColor={"gray"}>
                    <Stack>
                      <HStack justifyContent={"space-between"}>
                        <Box px={"20px"} py={"10px"}>
                          <HStack>
                            <LikeIconGray />
                            <Stack gap={"null"}>
                              <Text
                                as={"b"}
                                fontSize={"11px"}
                                textColor={"#808080"}
                              >
                                Shortlisted
                              </Text>
                              <Text
                                as={"b"}
                                fontSize={"16px"}
                                textColor={"black"}
                              >
                                40 creators
                              </Text>
                            </Stack>
                          </HStack>
                        </Box>

                        <Box px={"20px"} py={"10px"}>
                          <HStack>
                            <DollarIcon />
                            <Stack gap={"null"}>
                              <Text
                                as={"b"}
                                fontSize={"11px"}
                                textColor={"#808080"}
                              >
                                Overall Budget
                              </Text>
                              <Text
                                as={"b"}
                                fontSize={"16px"}
                                textColor={"black"}
                              >
                                ₹40K
                              </Text>
                            </Stack>
                          </HStack>
                        </Box>
                      </HStack>

                      <HStack>
                        <Box px={"20px"} py={"10px"}>
                          <HStack>
                            <DollarIcon />
                            <Stack gap={"null"}>
                              <Text
                                as={"b"}
                                fontSize={"11px"}
                                textColor={"#808080"}
                              >
                                Overall projections
                              </Text>
                              <Text
                                as={"b"}
                                fontSize={"16px"}
                                textColor={"black"}
                              >
                                40K
                              </Text>
                            </Stack>
                          </HStack>
                        </Box>
                      </HStack>
                    </Stack>
                  </Card>
                </Box>

                <Box>
                  <Stack gap={"32px"}>
                    <HStack>
                      <Box>
                        <NicheIcon />
                      </Box>
                      <Box pb={"8px"}>
                        <Text as="b">Niche</Text>

                        <HStack gap={"10px"} pb={"8px"}>
                          <Card
                            px={"12px"}
                            py={"4px"}
                            borderWidth={"1px"}
                            borderColor={"#808080"}
                            borderRadius={"full"}
                            boxShadow={"null"}
                          >
                            <Text>Fashion/ beauty</Text>
                          </Card>
                          <Card
                            px={"12px"}
                            py={"4px"}
                            borderWidth={"1px"}
                            borderColor={"#808080"}
                            borderRadius={"full"}
                            boxShadow={"null"}
                          >
                            Software Production
                          </Card>
                        </HStack>

                        <Card
                          px={"12px"}
                          py={"4px"}
                          borderWidth={"1px"}
                          borderColor={"#808080"}
                          borderRadius={"full"}
                          boxShadow={"null"}
                          w={"fit-content"}
                        >
                          Education
                        </Card>
                      </Box>
                    </HStack>

                    <HStack>
                      <Box>
                        <NicheIcon />
                      </Box>
                      <Box pb={"8px"}>
                        <Text as="b">Niche</Text>

                        <HStack gap={"10px"} pb={"8px"}>
                          <Card
                            px={"12px"}
                            py={"4px"}
                            borderWidth={"1px"}
                            borderColor={"#808080"}
                            borderRadius={"full"}
                            boxShadow={"null"}
                          >
                            <Text>Fashion/ beauty</Text>
                          </Card>
                          <Card
                            px={"12px"}
                            py={"4px"}
                            borderWidth={"1px"}
                            borderColor={"#808080"}
                            borderRadius={"full"}
                            boxShadow={"null"}
                          >
                            Software Production
                          </Card>
                        </HStack>

                        <Card
                          px={"12px"}
                          py={"4px"}
                          borderWidth={"1px"}
                          borderColor={"#808080"}
                          borderRadius={"full"}
                          boxShadow={"null"}
                          w={"fit-content"}
                        >
                          Education
                        </Card>
                      </Box>
                    </HStack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Flex>

        <Flex
          //this is for th second section of the main page
          className={"MainSectionTwo"}
          w={"70%"}
          h={"fit-content"}
          border={"2px"}
          borderRadius={"16px"}
          overflow={"hidden"}
        >
          <Box flex="2">
            <Stack>
              <Box m={"24px"}>
                <Card
                  bgColor={"#FFF4CC"}
                  borderRadius="full"
                  w={"fit-content"}
                  p={"4px"}
                  borderWidth={"1.5px"}
                  borderColor={"#D1A300"}
                  boxShadow={"null"}
                >
                  <HStack>
                    <Button
                      bgColor={"#FFC700"}
                      borderRadius={"full"}
                      px={"16px"}
                      py={"8px"}
                    >
                      Creators
                    </Button>

                    <Button
                      variant={"unstyled"}
                      borderRadius={"full"}
                      px={"16px"}
                      py={"8px"}
                    >
                      Medium and Content
                    </Button>
                  </HStack>
                </Card>
              </Box>

              <Box mb={"24px"} mx={"24px"}>
                <HStack justifyContent={"space-between"}>
                  <Box w={"340px"}>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <SearchIcon />
                      </InputLeftElement>
                      <Input
                        type="text"
                        placeholder="Search creators"
                        borderColor={"#989898"}
                      />
                    </InputGroup>
                  </Box>
                  <HStack gap={"12px"}>
                    <Button
                      variant={"outline"}
                      leftIcon={<FilterIcon />}
                      borderColor={"#989898"}
                    >
                      Filters
                    </Button>

                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<DropDownArrowBlack />}
                        leftIcon={<FilterIcon />}
                        variant={"outline"}
                        borderColor={"#989898"}
                      >
                        Sort
                      </MenuButton>
                    </Menu>
                  </HStack>
                </HStack>

                <Box mt={"24px"}>
                  <HStack justifyContent={"space-between"}>
                    <HStack gap={"14px"}>
                      <Card
                        as={"b"}
                        borderRadius={"null"}
                        boxShadow={"null"}
                        borderBottomWidth={"2px"}
                        borderBottomColor={"#FFC700"}
                      >
                        <Text>All (64)</Text>
                      </Card>
                      <Card borderRadius={"null"} boxShadow={"null"}>
                        <Text textColor={"#666666"}>Invited (40) </Text>
                      </Card>

                      <Card borderRadius={"null"} boxShadow={"null"}>
                        <Text textColor={"#666666"}>
                          Pending cost approval (12){" "}
                        </Text>
                      </Card>

                      <Card borderRadius={"null"} boxShadow={"null"}>
                        <Text textColor={"#666666"}>Approved (12)</Text>
                      </Card>
                    </HStack>

                    <Box>
                      <Button
                        leftIcon={<CloseCircleIcon />}
                        px={"16px"}
                        py={"10px"}
                        fontWeight={"bold"}
                        variant={"outline"}
                        borderColor={"black"}
                      >
                        Close Applications (14)
                      </Button>
                    </Box>
                  </HStack>
                </Box>
              </Box>

              <Box  mb={"24px"} mx={"24px"}>
                <Cards />
                
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default MainPage;
