import { Box } from "@chakra-ui/react";
import { RiUser3Line } from "react-icons/ri";

const UserCircle = ({ w, h, onClick = () => {} }) => {
  return (
    <Box
      // bg="blue.300"
      // color="blackAlpha.700"
      w={w}
      h={h}
      borderRadius="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="1px solid grey"
      cursor="pointer"
      onClick={onClick}
    >
      <RiUser3Line size="40px" />
    </Box>
  );
};

export default UserCircle;
