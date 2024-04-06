import { useNavigate } from "react-router-dom";
import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";

import useEntities from "../../hooks/useEntities";
import Msg from "../common/Msg";
import DriverTable from "./DriverTable";

const Drivers = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useEntities({
    keys: ["drivers"],
    url: "/api/drivers/",
    staleTime: 5 * 60 * 1000,
    appendAuth: true,
    redirectOn401: true,
  });

  return (
    <Box w={{ base: "100%", lg: "100%" }} m="auto" px="20px">
      <HStack justify="space-between">
        <Heading>Drivers</Heading>
        <Button
          colorScheme="blue"
          onClick={() => {
            navigate("/drivers/new");
          }}
        >
          Add Driver
        </Button>
      </HStack>
      {isLoading ? <h1>Loading...</h1> : <DriverTable data={data?.results} />}
      {error && (
        <Msg level="error" bold>
          {error.message}
        </Msg>
      )}
    </Box>
  );
};

export default Drivers;
