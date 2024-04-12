import { HStack, Button, Box } from "@chakra-ui/react";

const ControlButtons = ({ formState = "closed", handlers }) => {
  return (
    <Box>
      {formState === "closed" && (
        <HStack my={10} spacing={5}>
          <Button
            colorScheme="blue"
            onClick={() => {
              handlers.insert();
            }}
          >
            Insert Log
          </Button>
        </HStack>
      )}
      {formState === "insert" && (
        <HStack my={10} spacing={5}>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => {
              handlers.cancel();
            }}
          >
            Cancel
          </Button>
          <Button colorScheme="blue" type="submit" form="driverlog-form">
            Save
          </Button>
        </HStack>
      )}
    </Box>
  );
};

export default ControlButtons;
