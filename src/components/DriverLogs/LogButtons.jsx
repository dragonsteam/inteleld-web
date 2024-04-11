import { HStack, Button, Box } from "@chakra-ui/react";
import { FaPowerOff, FaRegMoon, FaTruck } from "react-icons/fa";
import { PiSteeringWheelBold } from "react-icons/pi";

const statusLogMap = [
  { name: "OFF", icon: <FaPowerOff /> },
  { name: "SB", icon: <FaRegMoon /> },
  { name: "DR", icon: <PiSteeringWheelBold /> },
  { name: "ON", icon: <FaTruck /> },
  { name: "OFF (PC)", icon: null },
  { name: "ON (YM)", icon: null },
];

const LogButtons = () => {
  return (
    <HStack my={10} spacing={5}>
      {statusLogMap.map((statusLog) => {
        return (
          <Button
            minWidth="90px"
            leftIcon={statusLog.icon}
            colorScheme="blue"
            variant="outline"
          >
            {statusLog.name}
          </Button>
        );
      })}
    </HStack>
  );
};

export default LogButtons;
