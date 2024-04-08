import { Link } from "react-router-dom";
import { Box, HStack, Heading, List, ListItem, Text } from "@chakra-ui/react";
import {
  TbHome,
  TbStack2,
  TbUser,
  TbUsers,
  TbTruck,
  TbLogout,
  TbSettings,
  TbMessage,
} from "react-icons/tb";

const Navbar = ({ handleCloseMenu = () => {} }) => {
  const data = [
    { name: "Home", link: "/", icon: <TbHome size="23px" /> },
    { name: "Logs", link: "/driver-logs", icon: <TbStack2 size="23px" /> },
    { name: "Drivers", link: "/drivers", icon: <TbUsers size="23px" /> },
    { name: "Trucks", link: "/trucks", icon: <TbTruck size="23px" /> },
    { name: "Messages", link: "/messages", icon: <TbMessage size="23px" /> },
    { name: "Settings", link: "/settings", icon: <TbSettings size="23px" /> },
    { name: "Log out", link: "/logout", icon: <TbLogout size="23px" /> },
  ];

  return (
    <Box h="100%" pt="30px" pl="16px">
      <List spacing={2}>
        {data.map((item, index) => {
          return (
            <ListItem
              key={index}
              fontSize={15}
              padding={2}
              onClick={() => handleCloseMenu()}
            >
              <Link to={item.link}>
                <HStack>
                  {item.icon}
                  <Text fontWeight="bold">{item.name}</Text>
                </HStack>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Navbar;
