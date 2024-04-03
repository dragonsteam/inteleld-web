import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { baseUrl } from "../../services/api-client";

const Pictures = ({ data }) => {
  const [activePic, setActivePic] = useState(0);

  const handleClickLeft = () => {
    setActivePic(activePic === 0 ? activePic : activePic - 1);
  };

  const handleClickRight = () => {
    setActivePic(activePic === data.length - 1 ? activePic : activePic + 1);
  };

  return (
    <Box>
      <Box position="relative">
        {data.map((pic, index) => {
          return (
            <Box key={pic.id} display={index === activePic ? "block" : "none"}>
              <Image
                src={baseUrl + pic.image}
                w="100%"
                aspectRatio={16 / 9}
                objectFit="cover"
                borderRadius={8}
                alt="ad-pic"
              />
            </Box>
          );
        })}
        <Box position="absolute" top={0} left={0} w="100%" h="100%">
          <HStack justifyContent="space-between" h="100%">
            <Button
              variant="ghost"
              w={50}
              h="100%"
              onClick={() => handleClickLeft()}
            >
              <FaAngleLeft size={30} />
            </Button>
            <Button
              variant="ghost"
              w={50}
              h="100%"
              onClick={() => {
                handleClickRight();
              }}
            >
              <FaAngleRight size={30} />
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        <HStack>
          {data.map((pic, index) => {
            return (
              <Box
                key={index}
                w={5}
                h={5}
                borderRadius={50}
                bg={activePic === index ? "blue.300" : "grey"}
                cursor="pointer"
                onClick={() => {
                  setActivePic(index);
                }}
              ></Box>
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
};

export default Pictures;
