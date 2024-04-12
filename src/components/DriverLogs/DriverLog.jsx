import {
  chakra,
  Box,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaPen } from "react-icons/fa";

import useEntities from "../../hooks/useEntities";
import useRequest from "../../hooks/useRequest";
import Msg from "../common/Msg";
import LogStatus from "../common/LogStatus";
import DayChangeButtons from "./DayChangeButtons";
import ControlButtons from "./ControlButtons";
import LogChart from "./LogChart";
import LogFrom from "./LogFrom";

const CFaPen = chakra(FaPen);

const DriverLog = () => {
  const queryClient = useQueryClient();
  const { id: driver_id, date } = useParams();
  const { data, error, isLoading } = useEntities({
    keys: ["driver_logs", driver_id, date],
    url: `/api/drivers/${driver_id}/logs/?date=${date}`,
    staleTime: 3 * 60 * 1000,
    appendAuth: true,
    redirectOn401: true,
  });

  const { post, errorMsg, resErrors } = useRequest({
    url: `/api/drivers/${driver_id}/logs/`,
    appendAuth: true,
    redirectOn401: true,
  });

  const [formState, setFormState] = useState("closed");

  const handleInsert = () => {
    setFormState("insert");
  };
  const handleCancel = () => {
    setFormState("closed");
  };
  const handleSubmit = (data) => {
    // set date
    data.date = date;
    console.log("post data", data);
    post({
      data: data,
      callback: () => {
        queryClient.invalidateQueries({
          queryKey: ["driver_logs", driver_id, date],
        });
        setFormState("closed");
        // navigate("/drivers");
      },
    });
  };

  return (
    <Box w={{ base: "100%", lg: "100%" }} m="auto" px="20px">
      <HStack justify="space-between">
        <DayChangeButtons driver_id={driver_id} currDateStr={date} />
        <ControlButtons
          formState={formState}
          handlers={{ insert: handleInsert, cancel: handleCancel }}
        />
      </HStack>

      <LogChart logs={data || []} />

      <LogFrom
        formState={formState}
        handleSubmitLog={handleSubmit}
        resErrors={resErrors}
      />

      <TableContainer mt={10}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric>No</Th>
              <Th>status</Th>
              <Th>start (EST)</Th>
              <Th>duration</Th>
              <Th>location</Th>
              <Th>vehicle</Th>
              <Th>odometer</Th>
              <Th>eng. hours</Th>
              <Th>notes</Th>
              <Th>document</Th>
              <Th>trailer</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((log, index) => {
              return (
                <Tr key={log.id}>
                  <Td isNumeric>{index + 1}</Td>
                  <Td>
                    <LogStatus status={log.status} />
                  </Td>
                  <Td>{log.time}</Td>
                  <Td>*</Td>
                  <Td>{log.location?.address}</Td>
                  <Td>
                    {log.truck || (
                      <Msg level="error" bold>
                        not assigned
                      </Msg>
                    )}
                  </Td>
                  <Td>{log.odometer}</Td>
                  <Td>{log.eng_hours}</Td>
                  <Td>{log.notes}</Td>
                  <Td>{log.document}</Td>
                  <Td>{log.trailer}</Td>

                  <Td>
                    <HStack fontSize={20}>
                      <CFaPen
                        color="orange.400"
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          // handleEditlog(log.id);
                        }}
                      />
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box h="400px"></Box>
    </Box>
  );
};

export default DriverLog;
