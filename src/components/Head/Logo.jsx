import { useNavigate } from "react-router-dom";
import { Box, Image, useColorMode } from "@chakra-ui/react";
import logo_day from "../../assets/logo-day.png";
import logo_night from "../../assets/logo-night.png";

const Logo = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  return (
    <Box
      cursor="pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      {/* {colorMode == "light" && <Image width={150} src={logo_day} />} */}
      {/* {colorMode == "dark" && <Image width={150} src={logo_night} />} */}
      logo here
    </Box>
  );
};

export default Logo;
