import { Box, Card } from "@chakra-ui/react";

const CardsSection = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="unstyled"
      m={'20px'}
      boxShadow={'null'}
    >
      this is the main card

    </Card>
  );
};

export default CardsSection;
