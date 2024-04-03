import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useBreakpointValue,
  Box,
  Button,
  ButtonGroup,
  Text,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { RiUser3Line } from "react-icons/ri";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { HiOutlineShare, HiOutlineFlag } from "react-icons/hi";
import UserCircle from "../common/UserCircle";

const Vendor = ({ vendor }) => {
  const navigate = useNavigate();

  const isSmallDevice = useBreakpointValue({ base: true, sm: true, lg: false });
  const [isSubscribed, setSubscribed] = useState(false);
  const [likeStatus, setLikeStatus] = useState(undefined);

  const handleLike = () => {
    setLikeStatus(likeStatus === "like" ? undefined : "like");
  };
  const handleDisLike = () => {
    setLikeStatus(likeStatus === "dislike" ? undefined : "dislike");
  };

  const getButtons = () => {
    return (
      <HStack spacing={3}>
        <ButtonGroup isAttached variant="outline" size="sm">
          <Button
            leftIcon={
              likeStatus === "like" ? (
                <AiFillLike size="20px" />
              ) : (
                <AiOutlineLike size="20px" />
              )
            }
            onClick={handleLike}
          >
            2.7k
          </Button>
          <Button
            size="sm"
            leftIcon={
              likeStatus === "dislike" ? (
                <AiFillDislike size="20px" />
              ) : (
                <AiOutlineDislike size="20px" />
              )
            }
            onClick={handleDisLike}
          >
            13
          </Button>
        </ButtonGroup>
        <Button variant="outline" size="sm" leftIcon={<HiOutlineShare />}>
          Share
        </Button>
        <Button variant="outline" size="sm" leftIcon={<HiOutlineFlag />}>
          Report
        </Button>
      </HStack>
    );
  };

  return (
    <Box mt="30px">
      <HStack justifyContent="space-between">
        <HStack>
          <UserCircle
            w="80px"
            h="80px"
            onClick={() => {
              navigate("/vendor/" + vendor.id);
            }}
          />
          <VStack mr="40px">
            <Text
              fontSize={24}
              fontWeight="bold"
              cursor="pointer"
              onClick={() => {
                navigate("/vendor/" + vendor.id);
              }}
            >
              John Doe
            </Text>
            <Text fontWeight="600">34k subscribers</Text>
          </VStack>
          {!isSubscribed ? (
            <Button
              colorScheme="blue"
              onClick={() => {
                setSubscribed(true);
              }}
            >
              Subscribe
            </Button>
          ) : (
            <Button colorScheme="blue" variant="outline">
              Subscribed
            </Button>
          )}
        </HStack>
        {!isSmallDevice && getButtons()}
      </HStack>
      <Box mt="15px">{isSmallDevice && getButtons()}</Box>
    </Box>
  );
};

export default Vendor;
