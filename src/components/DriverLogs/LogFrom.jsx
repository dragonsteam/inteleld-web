import {
  Text,
  Button,
  HStack,
  Stack,
  Box,
  Heading,
  Grid,
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
import FormSelect from "../common/FormSelect";

export const schema = z.object({
  time: z.string(),
  time_end: z.string(),
  location: z.object({
    address: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  }),
  odometer: z.number(),
  eng_hours: z.number(),
  notes: z.string(),
  truck: z.number(),
  document: z.string(),
  trailer: z.string(),
});

const LogForm = ({ formState = "closed" }) => {
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

  if (formState === "closed") return <></>;
  return (
    <Box mt="30">
      <form id="driverlog-form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8}>
          <Grid
            // templateColumns={{
            //   sm: "repeat(1, 1fr)",
            //   md: "repeat(2, 1fr)",
            //   lg: "repeat(2, 1fr)",
            // }}
            mt={15}
            gap={8}
          >
            <HStack spacing={8}>
              <FormInput
                type="time"
                label="From"
                id="time"
                conf={register("time")}
                errMsg={errors.time?.message}
                resErrMsg={getErrorMsg(resErrors, "time")}
              />
              <FormInput
                type="time"
                label="To"
                id="time_end"
                conf={register("time_end")}
                errMsg={errors.time_end?.message}
                resErrMsg={getErrorMsg(resErrors, "time_end")}
              />
            </HStack>
            <HStack spacing={8}>
              <FormInput
                type="number"
                label="Latitude"
                id="location.latitude"
                conf={register("location.latitude")}
                errMsg={errors.location?.latitude.message}
                resErrMsg={getErrorMsg(resErrors, "location.latitude")}
              />
              <FormInput
                type="number"
                label="Longitude"
                id="location.longitude"
                conf={register("location.longitude")}
                errMsg={errors.location?.longitude.message}
                resErrMsg={getErrorMsg(resErrors, "location.longitude")}
              />
            </HStack>
            <FormInput
              type="text"
              label="Location address"
              id="location.address"
              conf={register("location.address")}
              errMsg={errors.location?.address?.message}
              resErrMsg={getErrorMsg(resErrors, "location.address")}
            />
            <FormInput
              type="number"
              label="Odometer"
              id="odometer"
              conf={register("odometer")}
              errMsg={errors.odometer?.message}
              resErrMsg={getErrorMsg(resErrors, "odometer")}
            />
            <FormInput
              type="number"
              label="Eng. hours"
              id="eng_hours"
              conf={register("eng_hours")}
              errMsg={errors.eng_hours?.message}
              resErrMsg={getErrorMsg(resErrors, "eng_hours")}
            />
            <FormInput
              type="text"
              label="Notes"
              id="notes"
              conf={register("notes")}
              errMsg={errors.notes?.message}
              resErrMsg={getErrorMsg(resErrors, "notes")}
            />
            <FormSelect
              label="Truck"
              id="truck"
              conf={register("truck")}
              errMsg={errors.truck?.message}
              resErrMsg={getErrorMsg(resErrors, "truck")}
            >
              {STATES.map((state, index) => {
                return (
                  <option key={index} value={state.value}>
                    {state.name}
                  </option>
                );
              })}
            </FormSelect>
            <FormInput
              type="text"
              label="Shipping Docs."
              id="document"
              conf={register("document")}
              errMsg={errors.document?.message}
              resErrMsg={getErrorMsg(resErrors, "document")}
            />
            <FormInput
              type="text"
              label="Trailer"
              id="trailer"
              conf={register("trailer")}
              errMsg={errors.trailer?.message}
              resErrMsg={getErrorMsg(resErrors, "trailer")}
            />
          </Grid>
          {errorMsg && (
            <Text fontSize={15} color="tomato">
              {errorMsg}
            </Text>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default LogForm;
