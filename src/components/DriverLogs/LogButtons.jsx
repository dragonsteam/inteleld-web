import { HStack, Button, Box } from "@chakra-ui/react";
import { FaPowerOff, FaRegMoon, FaTruck } from "react-icons/fa";
import { PiSteeringWheelBold } from "react-icons/pi";

const statusLogMap = [
  { name: "OFF", id: "of", icon: <FaPowerOff /> },
  { name: "SB", id: "sb", icon: <FaRegMoon /> },
  { name: "DR", id: "dr", icon: <PiSteeringWheelBold /> },
  { name: "ON", id: "on", icon: <FaTruck /> },
  { name: "OFF (PC)", id: "pc", icon: null },
  { name: "ON (YM)", id: "ym", icon: null },
];

const LogButtons = ({ status, setStatus }) => {
  return (
    <HStack my={10} spacing={5}>
      {statusLogMap.map((statusLog, index) => {
        return (
          <Button
            key={index}
            minWidth="90px"
            leftIcon={statusLog.icon}
            colorScheme="blue"
            variant={status === statusLog.id ? undefined : "outline"}
            onClick={() => {
              setStatus(statusLog.id);
            }}
          >
            {statusLog.name}
          </Button>
        );
      })}
    </HStack>
  );
};

export default LogButtons;
