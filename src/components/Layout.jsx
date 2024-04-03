import { useState } from "react";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "../styles/App.css";
import Head from "./Head/Head";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Grid
      h="100vh"
      templateAreas={{
        base: `"head head" "main main"`,
        lg: `"head head" "nav main"`,
      }}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={{ base: "1fr", lg: "230px 1fr" }}
    >
      <GridItem area={"head"} borderBottom="1px solid grey">
        <Head handleMenuClick={handleMenuClick} />
      </GridItem>
      <GridItem
        area={"nav"}
        display={{ base: "none", md: "none", lg: "inline" }}
        boxShadow="md"
      >
        <Navbar />
      </GridItem>
      <GridItem
        id="main-div"
        area={"main"}
        // margin="auto"
        px={4}
        pt="30px"
        overflow="auto"
        position="relative"
      >
        <Outlet />
        {isMenuOpen && (
          <Box
            position="fixed"
            top="60px"
            left="0px"
            w="230px"
            h="100%"
            bg="white"
            boxShadow="md"
          >
            <Navbar handleCloseMenu={() => setMenuOpen(false)} />
          </Box>
        )}
      </GridItem>
      {/* <GridItem area={"foot"} margin="auto" mt={50} width="100%">
        <Footer />
      </GridItem> */}
    </Grid>
  );
};

export default Layout;
