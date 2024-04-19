import {
  Text,
  Button,
  HStack,
  Stack,
  Box,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { STATES } from "../../const";
import { formatTime, getErrorMsg } from "../../util";
import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";
import LogButtons from "./LogButtons";

export const schema = z.object({
  // status: z.string(),
  time: z.string(),
  time_end: z.string(),
  // location: z.object({
  address: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  // }),
  odometer: z.number(),
  eng_hours: z.number(),
  notes: z.string(),
  // truck: z.number(),
  document: z.string(),
  trailer: z.string(),
});

const LogForm = ({ formState = "closed", handleSubmitLog, resErrors = {} }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [logStatus, setLogStatus] = useState("of");

  const onSubmit = async (data) => {
    data.status = logStatus;
    data.time = formatTime(data.time);
    data.time_end = formatTime(data.time_end);
    handleSubmitLog(data);
  };

  if (formState === "closed") return <></>;
  return (
    <Box mt="30" w={{ base: "100%", lg: "85%" }} mx="auto">
      <LogButtons status={logStatus} setStatus={setLogStatus} />
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
                id="latitude"
                conf={register("latitude", { valueAsNumber: true })}
                errMsg={errors.latitude?.message}
                resErrMsg={getErrorMsg(resErrors, "latitude")}
              />
              <FormInput
                type="number"
                label="Longitude"
                id="longitude"
                conf={register("longitude", { valueAsNumber: true })}
                errMsg={errors.longitude?.message}
                resErrMsg={getErrorMsg(resErrors, "longitude")}
              />
            </HStack>
            <FormInput
              type="text"
              label="Location address"
              id="address"
              conf={register("address")}
              errMsg={errors.address?.message}
              resErrMsg={getErrorMsg(resErrors, "address")}
            />
            <FormInput
              type="number"
              label="Odometer"
              id="odometer"
              conf={register("odometer", { valueAsNumber: true })}
              errMsg={errors.odometer?.message}
              resErrMsg={getErrorMsg(resErrors, "odometer")}
            />
            <FormInput
              type="number"
              label="Eng. hours"
              id="eng_hours"
              conf={register("eng_hours", { valueAsNumber: true })}
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
          {/* {errorMsg && (
            <Text fontSize={15} color="tomato">
              {errorMsg}
            </Text>
          )} */}
        </Stack>
      </form>
    </Box>
  );
};

export default LogForm;
