import {
  Text,
  Button,
  HStack,
  Stack,
  Checkbox,
  Box,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { STATES } from "../../const";
import useRequest from "../../hooks/useRequest";
import { getErrorMsg } from "../../util";
import FormInput from "../common/FormInput";
import FormInputPasswd from "../common/FormInputPasswd";
import FormSelect from "../common/FormSelect";
import FormTextarea from "../common/FormTextarea";

export const schema = z.object({
  // truck: z.number({ invalid_type_error: "Truck is required" }).positive(),
  user: z.object({
    first_name: z.string(),
    last_name: z.string(),
    username: z.string().min(4),
    email: z.string().email(),
    password: z.string(),
  }),
  cdl_number: z.string(),
  cdl_state: z.string(),
  phone: z.string().max(13),
  allow_pc: z.boolean(),
  allow_ym: z.boolean(),
  notes: z.string(),
});

const NewDriver = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { post, isLoading, errorMsg, resErrors } = useRequest({
    url: "/api/drivers/",
    appendAuth: true,
    redirectOn401: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    post({
      data: data,
      callback: () => {
        reset();
        queryClient.invalidateQueries({ queryKey: ["drivers"] });
        navigate("/drivers");
      },
    });
  };

  return (
    <Box w={{ base: "100%", lg: "100%" }} m="auto" px="20px">
      <Heading mb={30}>Add a driver</Heading>

      <form id="driver-form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8}>
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            mt={15}
            gap={8}
          >
            <FormInput
              type="text"
              placeholder="First name"
              id="user.first_name"
              conf={register("user.first_name")}
              errMsg={errors.user?.first_name?.message}
              resErrMsg={getErrorMsg(resErrors, "user.first_name")}
            />
            <FormInput
              type="text"
              placeholder="Last name"
              id="user.last_name"
              conf={register("user.last_name")}
              errMsg={errors.user?.last_name?.message}
              resErrMsg={getErrorMsg(resErrors, "user.last_name")}
            />
            <FormInput
              type="text"
              placeholder="Username"
              id="user.username"
              conf={register("user.username")}
              errMsg={errors.user?.username?.message}
              resErrMsg={getErrorMsg(resErrors, "user.username")}
            />
            <FormInput
              type="text"
              placeholder="Email"
              id="user.email"
              conf={register("user.email")}
              errMsg={errors.user?.email?.message}
              resErrMsg={getErrorMsg(resErrors, "user.email")}
            />
            <FormInputPasswd
              placeholder="Password"
              id="user.password"
              conf={register("user.password")}
              errMsg={errors.user?.password?.message}
              resErrMsg={getErrorMsg(resErrors, "user.password")}
            />
            <FormInput
              type="text"
              placeholder="Phone number"
              id="phone"
              conf={register("phone")}
              errMsg={errors.phone?.message}
              resErrMsg={getErrorMsg(resErrors, "phone")}
            />
            <FormInput
              type="text"
              placeholder="CDL number"
              id="cdl_number"
              conf={register("cdl_number")}
              errMsg={errors.cdl_number?.message}
              resErrMsg={getErrorMsg(resErrors, "cdl_number")}
            />
            <FormSelect
              placeholder="CDL state"
              id="cdl_state"
              conf={register("cdl_state")}
              errMsg={errors.cdl_state?.message}
              resErrMsg={getErrorMsg(resErrors, "cdl_state")}
            >
              {STATES.map((state, index) => {
                return (
                  <option key={index} value={state.value}>
                    {state.name}
                  </option>
                );
              })}
            </FormSelect>
          </Grid>
          <HStack>
            <FormTextarea
              placeholder="Notes"
              id="notes"
              conf={register("notes")}
              errMsg={errors.notes?.message}
              resErrMsg={getErrorMsg(resErrors, "notes")}
            />
          </HStack>
          <HStack>
            <Checkbox id="allow_pc" {...register("allow_pc")}>
              Allow Personal Conveyance
            </Checkbox>
            <Checkbox id="allow_ym" {...register("allow_ym")} ml={8}>
              Allow Yard Move
            </Checkbox>
          </HStack>
          {errorMsg && (
            <Text fontSize={15} color="tomato">
              {errorMsg}
            </Text>
          )}
        </Stack>
      </form>
      <HStack mt={10} spacing={5}>
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={() => {
            navigate("/drivers");
          }}
        >
          Cancel
        </Button>
        <Button
          isLoading={isLoading}
          disabled={!isValid}
          type="submit"
          form="driver-form"
          colorScheme="blue"
        >
          Submit
        </Button>
      </HStack>
    </Box>
  );
};

export default NewDriver;
