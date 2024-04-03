import { useNavigate } from "react-router-dom";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { HiMenu } from "react-icons/hi";
import Logo from "./Logo";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSwitch from "./LanguageSwitch";

const Head = ({ handleMenuClick }) => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  return (
    <HStack justifyContent="space-between" px={5} py={3}>
      <HStack spacing={5}>
        <Box
          cursor="pointer"
          display={{ sm: "inline", md: "inline", lg: "none" }}
          onClick={() => {
            handleMenuClick();
          }}
        >
          <HiMenu size="30px" />
        </Box>
        <Logo />
      </HStack>
      <HStack spacing={5}>
        <LanguageSwitch />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Head;
