import { Box, Card, Text} from "@chakra-ui/react";


const CardsSection = () => {
  return (
    <Box>
      <Card bg={"white.200"} height={"300px"} variant={"outline"} m={"24px"}>
        <Text>Card 1</Text>
      </Card>
      <Card bg={"white.200"} height={"300px"} variant={"outline"} m={"24px"}>
        <Text>Card 1</Text>
      </Card>
      <Card bg={"white.200"} height={"300px"} variant={"outline"} m={"24px"}>
        <Text>Card 1</Text>
      </Card>
    </Box>
  );
}

export default CardsSection;