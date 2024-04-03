import { Box, HStack, Flex, Text, chakra } from "@chakra-ui/react";
import { FaGithub, FaTelegram } from "react-icons/fa";

const CFaTelegram = chakra(FaTelegram);

const Footer = () => {
  return (
    <Box borderTop="1px solid grey" mt="200px">
      <Flex
        px={{ sm: 5, lg: 40 }}
        py={5}
        // justifyContent="space-between"
        flexWrap="wrap"
      >
        <Text fontWeight="bold">© 2024 NickPhilomath</Text>
        <HStack fontSize={30} spacing={7} ml="50px">
          <a href="https://github.com/nickphilomath" target="_blank">
            <FaGithub cursor="pointer" />
          </a>
          <a href="https://t.me/nickphilomath" target="_blank">
            <CFaTelegram cursor="pointer" color="blue.500" />
          </a>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
