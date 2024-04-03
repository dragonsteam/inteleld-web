import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Flex,
  Heading,
  Input,
  InputLeftAddon,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Button,
  Box,
  Link,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import useRequest from "../hooks/useRequest";
import Msg from "./common/Msg";
import SpinnerButton from "./common/SpinnerButton";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { post, isLoading, errorMsg } = useRequest({ url: "/register/" });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const handleShowClick = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    post({
      data: data,
      callback: (data) => {
        console.log("created**");
        navigate("/login");
      },
    });
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="blue.400">Register</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} p="1rem" boxShadow="lg">
              <FormControl>
                <InputGroup>
                  {/* <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  /> */}
                  <InputLeftAddon>+998</InputLeftAddon>
                  <Input
                    type="text"
                    placeholder="phone"
                    id="phone"
                    {...register("phone", { required: true })}
                  />
                </InputGroup>
                {errors.phone?.type === "required" && (
                  <Msg level="error">The phone field is required</Msg>
                )}
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    {...register("password", { required: true })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password?.type === "required" && (
                  <Msg level="error">The password field is required</Msg>
                )}
              </FormControl>
              {errorMsg && (
                <Text fontSize={15} color="tomato">
                  {errorMsg}
                </Text>
              )}
              {isLoading ? (
                <SpinnerButton />
              ) : (
                <Button disabled={!isValid} type="submit" colorScheme="blue">
                  Submit
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have one?{" "}
        <Link
          color="blue.500"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
