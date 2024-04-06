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

import { STATES, YEARS, FUEL_TYPE } from "../../const";
import useRequest from "../../hooks/useRequest";
import { getErrorMsg } from "../../util";
import FormInput from "../common/FormInput";
import FormInputPasswd from "../common/FormInputPasswd";
import FormSelect from "../common/FormSelect";
import FormTextarea from "../common/FormTextarea";

export const schema = z.object({
  unit_number: z.string(),
  make: z.string(),
  model: z.string(),
  year: z.string(),
  license_number: z.string(),
  license_state: z.string(),
  fuel_type: z.string(),
  vin_number: z.string(),
  notes: z.string(),
});

const NewTruck = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { post, isLoading, errorMsg, resErrors } = useRequest({
    url: "/api/trucks/",
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
        queryClient.invalidateQueries({ queryKey: ["trucks"] });
        navigate("/trucks");
      },
    });
  };

  return (
    <Box w={{ base: "100%", lg: "100%" }} m="auto" px="20px">
      <Heading mb={30}>Add truck</Heading>

      <form id="truck-form" onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Unit number"
              id="unit_number"
              conf={register("unit_number")}
              errMsg={errors.unit_number?.message}
              resErrMsg={getErrorMsg(resErrors, "unit_number")}
            />
            <FormInput
              type="text"
              placeholder="Make"
              id="make"
              conf={register("make")}
              errMsg={errors.make?.message}
              resErrMsg={getErrorMsg(resErrors, "make")}
            />
            <FormInput
              type="text"
              placeholder="Model"
              id="model"
              conf={register("model")}
              errMsg={errors.model?.message}
              resErrMsg={getErrorMsg(resErrors, "model")}
            />
            <FormSelect
              placeholder="Year"
              id="year"
              conf={register("year")}
              errMsg={errors.year?.message}
              resErrMsg={getErrorMsg(resErrors, "year")}
            >
              {YEARS.map((c, i) => {
                return (
                  <option key={i} value={c.value}>
                    {c.name}
                  </option>
                );
              })}
            </FormSelect>
            <FormInput
              type="text"
              placeholder="License number"
              id="license_number"
              conf={register("license_number")}
              errMsg={errors.license_number?.message}
              resErrMsg={getErrorMsg(resErrors, "license_number")}
            />
            <FormSelect
              placeholder="License state"
              id="license_state"
              conf={register("license_state")}
              errMsg={errors.license_state?.message}
              resErrMsg={getErrorMsg(resErrors, "license_state")}
            >
              {STATES.map((state, index) => {
                return (
                  <option key={index} value={state.value}>
                    {state.name}
                  </option>
                );
              })}
            </FormSelect>
            <FormSelect
              placeholder="Fuel type"
              id="fuel_type"
              conf={register("fuel_type")}
              errMsg={errors.fuel_type?.message}
              resErrMsg={getErrorMsg(resErrors, "fuel_type")}
            >
              {FUEL_TYPE.map((c, i) => {
                return (
                  <option key={i} value={c.value}>
                    {c.name}
                  </option>
                );
              })}
            </FormSelect>
            <FormInput
              type="text"
              placeholder="VIN number"
              id="vin_number"
              conf={register("vin_number")}
              errMsg={errors.vin_number?.message}
              resErrMsg={getErrorMsg(resErrors, "vin_number")}
            />
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
            navigate("/trucks");
          }}
        >
          Cancel
        </Button>
        <Button
          isLoading={isLoading}
          disabled={!isValid}
          type="submit"
          form="truck-form"
          colorScheme="blue"
        >
          Submit
        </Button>
      </HStack>
    </Box>
  );
};

export default NewTruck;
