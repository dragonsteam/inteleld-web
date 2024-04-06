import { useNavigate } from "react-router-dom";
import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";

import useEntities from "../../hooks/useEntities";
import Msg from "../common/Msg";
import TruckTable from "./TruckTable";

const Trucks = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useEntities({
    keys: ["trucks"],
    url: "/api/trucks/",
    staleTime: 5 * 60 * 1000,
    appendAuth: true,
    redirectOn401: true,
  });

  return (
    <Box w={{ base: "100%", lg: "100%" }} m="auto" px="20px">
      <HStack justify="space-between">
        <Heading>Trucks</Heading>
        <Button
          colorScheme="blue"
          onClick={() => {
            navigate("/trucks/new");
          }}
        >
          Add Truck
        </Button>
      </HStack>
      {isLoading ? <h1>Loading...</h1> : <TruckTable data={data?.results} />}
      {error && (
        <Msg level="error" bold>
          {error.message}
        </Msg>
      )}
    </Box>
  );
};

export default Trucks;
