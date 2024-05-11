import {
  Box,
  Button,
  Card,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";


const PrimaryFilter = () => {
  return (
    <Card className="PrimaryFilterSection" align={"center"}bgColor={"yellow"}>
      <Box px={"120px"} my={"60px"} bgColor={"null"} width={"100%"}>
        <Box
          className="FilterBoxTop"
          bgColor={"white"}
          borderRadius={"12px"}
          mb={"10px"}
        >
          <Grid templateColumns="repeat(5, 1fr)" py={"16px"} px="10px">
            <GridItem px={"10px"} borderRight={"2px"} borderColor={"gray"}>
              <Text textColor={"gray"}>Audience Location</Text>
              <Text as="b">All</Text>
            </GridItem>
            <GridItem px={"10px"} borderRight={"2px"} borderColor={"gray"}>
              <Text textColor={"gray"}>Audience Location</Text>
              <Text as="b">Choose Size</Text>
            </GridItem>
            <GridItem px={"10px"} borderRight={"2px"} borderColor={"gray"}>
              <Text textColor={"gray"}>Audience Location</Text>
              <Text as="b">Any</Text>
            </GridItem>
            <GridItem px={"10px"}>
              <Text textColor={"gray"}>Audience Location</Text>
              <Text as="b">Any</Text>
            </GridItem>
            <GridItem px={"10px"}>
              <Button
                w={"100%"}
                h="100%"
                p={5}
                bgColor={"gray.900"}
                textColor={"White"}
                size="lg"
                borderRadius={"12px"}
              >
                Show 4M results
              </Button>
            </GridItem>
          </Grid>
        </Box>

        <Box className="FilterBoxTwo" borderRadius={"12px"} bgColor={'white'} px={'20px'} py={'16px'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit officiis distinctio vitae at? Debitis nihil totam sequi id aperiam consectetur natus saepe deserunt, consequatur recusandae dolorem voluptates voluptatum dolor libero!
        </Box>
      </Box>
    </Card>
  );
};

export default PrimaryFilter;
