import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Flex,
  Heading,
  Divider,
  Input,
  InputLeftAddon,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Button,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { JWTDecoder } from "../../util";
import useRequest from "../../hooks/useRequest";
import Msg from "../common/Msg";
import SpinnerButton from "../common/SpinnerButton";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { post, isLoading, errorMsg } = useRequest({
    url: "/auth/jwt/create/",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const handleShowClick = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    post({
      data: data,
      callback: (res) => {
        window.localStorage.setItem(
          "auth",
          JSON.stringify({
            user_id: JWTDecoder(res.data.access).user_id,
            accessToken: res.data?.access,
            refreshToken: res.data?.refresh,
          })
        );
        navigate("/");
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
        <Avatar bg="blue.500" />
        <Heading color="blue.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} p="1rem" boxShadow="lg">
              <Divider />
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="username"
                    id="username"
                    {...register("username", { required: true })}
                  />
                </InputGroup>
                {errors.username?.type === "required" && (
                  <Msg level="error">The username field is required</Msg>
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
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
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
                  Log in
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link
          color="blue.500"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
