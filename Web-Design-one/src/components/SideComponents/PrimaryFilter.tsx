import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const PrimaryFilter = () => {
  return (
    <Card align={"center"} bgColor={"yellow"}>
      <Box mx={"120px"} my={"60px"} bgColor={"null"}>
        <VStack gap={"4"}>
          <Box bgColor={"white"} borderRadius={"12px"}>
            <HStack px="20px" py="20px">
              <Stack>
                <Card p={"10px"}>
                  <Input
                    placeholder="Audience Locaition"
                    variant={"unstyled"}
                  ></Input>
                  <Box>
                    <Text as="b" align={"center"}>
                      All
                    </Text>
                  </Box>
                </Card>
              </Stack>

              <Stack>
                <Card p={"10px"}>
                  <Input
                    placeholder="Influencer Size"
                    variant={"unstyled"}
                  ></Input>
                  <Box>
                    <Text as="b" align={"center"}>
                      Choose Size
                    </Text>
                  </Box>
                </Card>
              </Stack>
              <Stack>
                <Card p={"10px"}>
                  <Input
                    placeholder="Audience Age"
                    variant={"unstyled"}
                  ></Input>
                  <Box>
                    <Text as="b" align={"center"}>
                      All
                    </Text>
                  </Box>
                </Card>
              </Stack>
              <Stack>
                <Card p={"10px"}>
                  <Input
                    placeholder="Audience Gender"
                    variant={"unstyled"}
                  ></Input>
                  <Box>
                    <Text as="b" align={"center"}>
                      All
                    </Text>
                  </Box>
                </Card>
              </Stack>
              <Stack>
                <Button bg={"black"} textColor={"white"} p={"10px"} size={'lg'}>
                  Show 4M results
                </Button>
              </Stack>
            </HStack>
          </Box>
          <Box bgColor={"white"} borderRadius={"12px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam
            excepturi deserunt, magni dolore quam? Quaerat ratione neque id
            architecto at distinctio reprehenderit, voluptas ea magnam totam
            iure a. Odio.
          </Box>
        </VStack>
      </Box>
    </Card>
  );
};

export default PrimaryFilter;
