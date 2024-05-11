import {Card, HStack, Text } from "@chakra-ui/react";


const SecondaryFilter = () => {
  return (
    <Card
      className="FilterResult"
      variant={"unstyled"}
      borderRadius={"full"}
      m={"24px"}
    >
      <HStack>
        <Text>
          Showing <b>234</b> Result
        </Text>        
      </HStack>
    </Card>
  );
}

export default SecondaryFilter