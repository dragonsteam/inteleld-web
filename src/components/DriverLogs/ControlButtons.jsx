import { HStack, Button, Box } from "@chakra-ui/react";

const ControlButtons = ({ formState = "closed", handleInsert }) => {
  return (
    <HStack justify="space-between">
      <Box></Box>
      <HStack my={10} spacing={5}>
        <Button
          onClick={() => {
            handleInsert();
          }}
        >
          Insert Log
        </Button>
        {/* <Button
          // isLoading={isLoading}
          type="submit"
          form="driverlog-form"
        >
          Save
        </Button> */}
      </HStack>
    </HStack>
  );
};

export default ControlButtons;
