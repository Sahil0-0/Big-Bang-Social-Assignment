import { Box, Card, HStack, Text } from "@chakra-ui/react";


const SecondaryFilter = () => {
  return (
    <Card
      className="SecondaryFilter"
      variant={"unstyled"}
      borderRadius={"full"}
      m={"24px"}
    >
      <HStack>
        <Text>
          Showing <b>234</b> Result
        </Text>

        
          <Card>
            <Box pr={"500px"} bg={"gray.400"}>
            <Text>21/54</Text>
            </Box>
          </Card>
        
      </HStack>
    </Card>
  );
}

export default SecondaryFilter