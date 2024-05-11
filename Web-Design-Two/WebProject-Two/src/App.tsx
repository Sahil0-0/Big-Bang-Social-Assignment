import { Grid, GridItem } from "@chakra-ui/react";
import SideNavBar from "./components/SideNavBar";
import Header from "./components/Header";

import MainPage from "./components/MainPage";

const App = () => {
  return (
    <Grid templateColumns="repeat(14, 1fr)">
      <GridItem colSpan={1}>
        <SideNavBar />
      </GridItem>
      <GridItem colSpan={13} mr={"32px"}>
        <Header />
        <MainPage />
      </GridItem>
    </Grid>
  );
};

export default App;
