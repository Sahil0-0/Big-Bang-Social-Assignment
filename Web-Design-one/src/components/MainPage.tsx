import { Box} from "@chakra-ui/react";
import PrimaryFilter from "./SideComponents/PrimaryFilter";
import SecondaryFilterSection from "./SideComponents/SecondaryFilterSection";
import FilterResult from "./SideComponents/FilterResult";


const MainPage = () => {
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
        <SecondaryFilterSection />
        <FilterResult />
        
      </Box>
    </>
  );
};

export default MainPage;
