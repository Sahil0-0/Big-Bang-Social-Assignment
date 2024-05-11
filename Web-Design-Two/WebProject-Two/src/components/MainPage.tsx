import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, GridItem, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react"




const MainPage = () => {
  return (
    <Box>
      <HStack>
        <Flex bgColor={"red"} w={"20%"} border={"2px"}>
          <Box flex="1" bg="tomato">
            <Text>Box 1</Text>
          </Box>
        </Flex>
        <Flex color={"red"} width={"80%"}>
          <Box flex="2" bg="tomato">
            <Text>Box 3</Text>
            <Text>Box 3</Text>
            <Text>Box 3</Text>
            <Text>Box 3</Text>
          </Box>
        </Flex>
      </HStack>
    </Box>
  ); 
}

export default MainPage