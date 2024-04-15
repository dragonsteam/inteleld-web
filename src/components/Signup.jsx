import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Flex,
  Heading,
  Stack,
  chakra,
  Button,
  Box,
  Link,
  Grid,
  HStack,
  NumberInputField,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getErrorMsg } from "../util";
import useRequest from "../hooks/useRequest";
import Msg from "./common/Msg";
import FormInput from "./common/FormInput";
import FormInputPasswd from "./common/FormInputPasswd";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const schema = z.object({
  name: z.string(),
  usdot: z.number(),
  user: z.object({
    first_name: z.string(),
    last_name: z.string(),
    username: z.string().min(4),
    // email: z.string().email(),
    password: z.string(),
  }),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { post, isLoading, errorMsg, resErrors } = useRequest({
    url: "/api/companies/new/",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

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
        mb="2"
        p="1rem"
        justifyContent="center"
        alignItems="center"
        boxShadow="lg"
        borderRadius={5}
      >
        <Heading color="blue.400">Register</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            // templateColumns={{
            //   sm: "repeat(1, 1fr)",
            //   md: "repeat(2, 1fr)",
            //   lg: "repeat(4, 1fr)",
            // }}
            mt={15}
            gap={8}
          >
            <HStack spacing={8}>
              <FormInput
                type="text"
                label="First name"
                id="user.first_name"
                conf={register("user.first_name")}
                errMsg={errors.user?.first_name?.message}
                resErrMsg={getErrorMsg(resErrors, "user.first_name")}
              />
              <FormInput
                type="text"
                label="Last name"
                id="user.last_name"
                conf={register("user.last_name")}
                errMsg={errors.user?.last_name?.message}
                resErrMsg={getErrorMsg(resErrors, "user.last_name")}
              />
            </HStack>
            <HStack spacing={8}>
              <FormInput
                type="text"
                label="Username"
                id="user.username"
                conf={register("user.username")}
                errMsg={errors.user?.username?.message}
                resErrMsg={getErrorMsg(resErrors, "user.username")}
              />
              <FormInput
                type="text"
                label="Phone"
                id="user.phone"
                conf={register("user.phone")}
                errMsg={errors.user?.phone?.message}
                resErrMsg={getErrorMsg(resErrors, "user.phone")}
              />
            </HStack>
            <HStack spacing={8}>
              <FormInputPasswd
                label="Password"
                id="user.password"
                conf={register("user.password")}
                errMsg={errors.user?.password?.message}
                resErrMsg={getErrorMsg(resErrors, "user.password")}
              />
              <FormInputPasswd
                label="Confirm Password"
                id="user.confirm_password"
                conf={register("user.confirm_password")}
                errMsg={errors.user?.confirm_password?.message}
                resErrMsg={getErrorMsg(resErrors, "user.confirm_password")}
              />
            </HStack>
            <HStack spacing={8}>
              <FormInput
                type="text"
                label="Company name"
                id="name"
                conf={register("name")}
                errMsg={errors.name?.message}
                resErrMsg={getErrorMsg(resErrors, "name")}
              />
              <FormInput
                type="number"
                label="Usdot"
                id="usdot"
                conf={register("usdot", { valueAsNumber: true })}
                errMsg={errors.usdot?.message}
                resErrMsg={getErrorMsg(resErrors, "usdot")}
              />
            </HStack>
            {errorMsg && (
              <Msg level="error" bold>
                {errorMsg}
              </Msg>
            )}
            <Button
              disabled={!isValid}
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </Grid>
        </form>
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
