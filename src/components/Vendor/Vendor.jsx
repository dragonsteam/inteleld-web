import { Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import { baseUrl } from "../../services/api-client";
import UserCircle from "../common/UserCircle";
import useEntities from "../../hooks/useEntities";
import AdCard from "../common/AdCard";

const Vendor = () => {
  const { id: vendor_id } = useParams();

  const {
    data: advertisements,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useEntities({
    keys: ["vendor-ads", vendor_id],
    url: `/vendor/${vendor_id}/advertisements`,
    staleTime: 3 * 60 * 1000,
    redirectOn401: true,
    infiniteQuery: true,
  });

  const fetchetDataCount = advertisements
    ? advertisements.pages.reduce((total, page) => {
        return total + page.results.length;
      }, 0)
    : 0;

  return (
    <Box width="80%" margin="auto">
      <HStack spacing={5}>
        <UserCircle w="150px" h="150px" />
        <Box>
          <Heading>John Doe</Heading>
          <Text fontWeight="bold">@johndoe - 56k subscribers - 147 posts</Text>
          <Text maxWidth="500px" noOfLines={[1, 2]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
          </Text>
          <Button size="sm" colorScheme="blue" mt={2}>
            Subscribe
          </Button>
        </Box>
      </HStack>
      <Box>
        <InfiniteScroll
          scrollableTarget="main-div"
          dataLength={fetchetDataCount}
          hasMore={hasNextPage}
          next={() => {
            fetchNextPage();
          }}
          loader={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          }
          endMessage={
            <Text textAlign="center" mb="40px">
              <b>You have reached the bottom</b>
            </Text>
          }
          style={{ overflow: "unset" }}
        >
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            mt={15}
            gap={4}
          >
            {!isLoading &&
              advertisements.pages.map((page, index) => {
                return (
                  <Fragment key={index}>
                    {page.results.map((ad, index) => {
                      ad.image =
                        ad.pictures.length !== 0
                          ? baseUrl + ad.pictures[0].image
                          : no_image;

                      return (
                        <GridItem
                          key={ad.id}
                          mt={5}
                          cursor="pointer"
                          onClick={() => {
                            navigate("/post/" + ad.id);
                          }}
                        >
                          <AdCard ad={ad} />
                        </GridItem>
                      );
                    })}
                  </Fragment>
                );
              })}
          </Grid>
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export default Vendor;
