import { Box, Heading, Text } from "@chakra-ui/react";

const CoverLetter = () => {
  return (
    <Box w={{ base: "100%", lg: "70%" }} m="auto">
      <Heading textAlign="center" mt={30}>
        Welcome
      </Heading>
      <Text fontSize={20} as="kbd">
        This web server/service is currently under development. In case any
        issues, contact azizbek2018arb@gmail.com or nickphilomath@gmail.com.
      </Text>
      <br />
      <Text color="yellow.500" as="kbd" fontWeight="bold">
        Warning: project is not complete yet, so DO NOT SUBMIT ANY PERSONAL
        INFORMATION as they are likely easy to be stolen by hackers.
      </Text>
    </Box>
  );
};

export default CoverLetter;
