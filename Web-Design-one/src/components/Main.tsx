import { Box} from "@chakra-ui/react";

import FilterSections from "./SideComponents/SecondaryFilterSection";
import SecondaryFilter from "./SideComponents/FilterResult";
import CardsSection from "./SideComponents/CardsSection";
import PrimaryFilter from "./SideComponents/PrimaryFilter";

const Main = () => {
  return (
    <>
      <Box
        className="MainPageBox"
        my="28px"
        borderWidth={"1px"}
        borderColor={"black"}
        borderRadius={"20px"}
        overflow={'hidden'}
      >
        <PrimaryFilter />
        <FilterSections />
        <SecondaryFilter/>
        <CardsSection/>
      </Box>
    </>
  );
};

export default Main;
