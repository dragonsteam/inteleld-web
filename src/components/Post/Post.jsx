import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
} from "@chakra-ui/react";

import useEntities from "../../hooks/useEntities";
import Pictures from "./Pictures";
import Vendor from "./Vendor";
import Footer from "../Footer/Footer";

const Post = () => {
  const navigate = useNavigate();
  const { id: post_id } = useParams();
  const {
    data: ad,
    error,
    isLoading,
    refetch,
  } = useEntities({
    keys: ["post", post_id],
    url: "/advertisements/" + post_id,
    staleTime: 3 * 60 * 1000,
  });

  return (
    <Box w={{ base: "1fr", lg: "90%" }} m="auto">
      {/* 
        main
            pictures
            description
            contact

        side
            price
            vendor
            address
      */}
      {!isLoading && ad && (
        <Grid
          templateAreas={{
            base: `"main" "side"`,
            lg: `"main side"`,
          }}
          gridTemplateColumns={{
            base: "1fr",
            lg: "0.7fr 0.3fr",
          }}
          gap={3}
        >
          <GridItem area="main">
            {ad.pictures.length ? <Pictures data={ad.pictures} /> : <></>}
            <Heading fontSize={25} mt={5}>
              {ad.title}
            </Heading>
            <Text fontSize={20} mt={3}>
              {ad.price} {ad.currency}
            </Text>
            <Heading fontSize={22} mt="20px">
              Description
            </Heading>
            <Box>{ad.description}</Box>
            <Vendor vendor={{ id: ad.user }} />
          </GridItem>
          <GridItem area="side"></GridItem>
        </Grid>
      )}
      <Footer />
    </Box>
  );
};

export default Post;
