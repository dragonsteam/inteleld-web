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
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { STATES } from "../../const";
import useEntities from "../../hooks/useEntities";
import useRequest from "../../hooks/useRequest";
import { getErrorMsg } from "../../util";
import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";
import FormTextarea from "../common/FormTextarea";
import { useEffect } from "react";

export const schema = z.object({
  user: z.object({
    first_name: z.string(),
    last_name: z.string(),
    username: z.string().min(4),
    email: z.string().email(),
  }),
  cdl_number: z.string(),
  cdl_state: z.string(),
  phone: z.string().max(13),
  allow_pc: z.boolean(),
  allow_ym: z.boolean(),
  notes: z.string().max(255),
});

const EditDriver = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id: driver_id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const driverInstance = useEntities({
    keys: ["drivers", driver_id],
    url: "/api/drivers/" + driver_id,
    staleTime: 5 * 60 * 1000,
    appendAuth: true,
    redirectOn401: true,
  });

  useEffect(() => {
    if (driverInstance.data) reset(driverInstance.data);
  }, [driverInstance.data]);

  const { put, isLoading, errorMsg, resErrors } = useRequest({
    appendAuth: true,
    redirectOn401: true,
  });

  const onSubmit = async (data) => {
    put({
      recordUrl: `/api/drivers/${driver_id}/`,
      data: data,
      callback: () => {
        queryClient.invalidateQueries({ queryKey: ["drivers"] });
        // queryClient.invalidateQueries({ queryKey: ["drivers", driver_id] });
        navigate("/drivers");
      },
    });
  };

  return (
    <Box w={{ base: "100%", lg: "100%" }} m="auto" px="20px">
      <Heading mb={30}>Edit driver</Heading>

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
            <Button colorScheme="blue" variant="outline">
              Reset Password
            </Button>
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

export default EditDriver;
