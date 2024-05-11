import { Grid, GridItem } from "@chakra-ui/react";

import SideNavBar from "./components/SideNavBar";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={1}>
        <SideNavBar />
      </GridItem>
      <GridItem colSpan={11} mr={'32px'}>
        <Header />  
        <Main />
      </GridItem>
    </Grid>
  );
};

export default App;
