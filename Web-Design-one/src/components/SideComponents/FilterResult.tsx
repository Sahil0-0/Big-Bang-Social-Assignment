import { Box, Button, Card, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { BiLogoInstagram } from "react-icons/bi";
import { IoCheckboxOutline } from "react-icons/io5";
//import { PiCurrencyInr } from "react-icons/pi";

const FilterResult = () => {
  return (
    <>
      <Card className="FilterResult" variant={"unstyled"} m={"28px"}>
        <Stack mr="24px">
          <Box borderWidth={"1px"} borderRadius={"15px"}>
            <HStack gap={"0px"}>
              <Flex w={"20%"}>
                <Box flex="1" borderRight={"1px"} borderColor={"gray.200"}>
                  <Box justifyContent={"space-between"} m={"20px"}>
                    <IoCheckboxOutline />
                  </Box>
                  <Stack align={"center"} mx={"66px"} mb="26px" mt={"16px"}>
                    <Card
                      p={2}
                      borderRadius={"full"}
                      borderWidth={"1px"}
                      borderColor={"gray"}
                      boxShadow={"null"}
                    >
                      <BiLogoInstagram size={"50px"} color="red" />
                    </Card>
                    <Box>
                      <Stack align={"center"} gap={"12px"}>
                        <Text as="b">Instagram</Text>
                        <Text textColor={"gray.500"}>@instagram</Text>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Flex>

              <Flex width={"80%"}>
                <Box flex="2" mx={"20px"}>
                  <Stack>
                    <HStack gap={"46px"} pb={"45px"}>
                      <Stack>
                        <Text textColor={"gray.500"}>Total Followers</Text>
                        <Text as={"b"} size={"18px"}>
                          645.M
                        </Text>
                      </Stack>
                      <Stack>
                        <Text textColor={"gray.500"}>Total Post</Text>
                        <Text as={"b"} size={"18px"}>
                          12,000
                        </Text>
                      </Stack>
                    </HStack>

                    <HStack gap={"null"}>
                      <Card
                        borderRight={"1px"}
                        borderRightColor={"gray.500"}
                        borderRadius={"null"}
                        boxShadow={"null"}
                      >
                        <HStack fontSize={"14px"} gap={"20px"} pr={"25px"}>
                          <Stack>
                            <Text textColor={"gray.500"}>Followers</Text>
                            <Text as={"b"} size={"18px"}>
                              645.M
                            </Text>
                          </Stack>
                          <Stack>
                            <Text textColor={"gray.500"}>Avg. Likes</Text>
                            <Text as={"b"} size={"18px"}>
                              320
                            </Text>
                          </Stack>
                          <Stack>
                            <Text textColor={"gray.500"}>ER</Text>
                            <Text as={"b"} size={"18px"}>
                              0.42%
                            </Text>
                          </Stack>
                        </HStack>
                      </Card>

                      <Card
                        borderRadius={"null"}
                        boxShadow={"null"}
                        justifyContent={"space-between"}
                      >
                        <HStack
                          fontSize={"14px"}
                          pl={"25px"}
                          gap={"20px"}
                          justifyContent={"space-between"}
                        >
                          <Stack justifyContent={"space-between"}>
                            <Text textColor={"gray.500"}>Followers</Text>
                            <Text as={"b"} size={"18px"}>
                              645.M
                            </Text>
                          </Stack>
                          <Stack>
                            <Text textColor={"gray.500"}>Avg. Likes</Text>
                            <Text as={"b"} size={"18px"}>
                              320
                            </Text>
                          </Stack>
                          <Stack>
                            <Text textColor={"gray.500"}>ER</Text>
                            <Text as={"b"} size={"18px"}>
                              0.42%
                            </Text>
                          </Stack>
                        </HStack>
                      </Card>

                      <Box>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                      </Box>
                    </HStack>
                  </Stack>
                </Box>
              </Flex>
            </HStack>
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default FilterResult;
