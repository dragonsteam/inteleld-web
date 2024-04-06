import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import {
  chakra,
  useDisclosure,
  Box,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { FaPen, FaTrash } from "react-icons/fa";

import useRequest from "../../hooks/useRequest";
import DeleteTruck from "./DeleteTruck";

const CFaPen = chakra(FaPen);
const CFaTrash = chakra(FaTrash);

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("unit_number", {
    header: "Unit number",
  }),
  columnHelper.accessor("driver", {
    header: "Driver",
  }),
  columnHelper.accessor("make", {
    header: "Make",
  }),
  columnHelper.accessor("model", {
    header: "Model",
  }),
  columnHelper.accessor("eld_device", {
    header: "ELD device",
  }),
  columnHelper.accessor("vin_number", {
    header: "VIN number",
  }),
  columnHelper.accessor("license_number", {
    header: "License number",
  }),
  columnHelper.accessor("license_state", {
    header: "License State",
  }),

  //   columnHelper.accessor((row) => row.lastName, {
  //     id: "lastName",
  //     cell: (info) => <i>{info.getValue()}</i>,
  //     header: () => <span>Last Name</span>,
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("age", {
  //     header: () => "Age",
  //     cell: (info) => info.renderValue(),
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("visits", {
  //     header: () => <span>Visits</span>,
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("status", {
  //     header: "Status",
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("progress", {
  //     header: "Profile Progress",
  //     footer: (info) => info.column.id,
  //   }),
];

const TruckTable = ({ data: truck_data }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [data, setData] = useState(() => []);
  useEffect(() => {
    setData(() => (truck_data ? [...truck_data] : []));
  }, [truck_data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { deleteRecord, isLoading, errorMsg, resErrors } = useRequest({
    url: "/api/trucks/",
    appendAuth: true,
    redirectOn401: true,
  });

  const deleteModal = useDisclosure();
  const [deleteId, setDeleteId] = useState(null);
  const handleDelete = () => {
    deleteRecord({
      recordUrl: "/api/trucks/" + deleteId,
      callback: () => {
        deleteModal.onClose();
        queryClient.invalidateQueries({ queryKey: ["trucks"] });
      },
    });
  };

  return (
    <Box>
      <Table mt={30}>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
              <Th>Actions</Th>
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
              <Td>
                <HStack fontSize={20}>
                  <CFaPen
                    color="orange.400"
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/trucks/edit/" + row.original.id);
                    }}
                  />
                  <CFaTrash
                    ml={3}
                    color="tomato"
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                      setDeleteId(row.original.id);
                      deleteModal.onOpen();
                    }}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <DeleteTruck
        isOpen={deleteModal.isOpen}
        onOpen={deleteModal.onOpen}
        onClose={deleteModal.onClose}
        handleDelete={handleDelete}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default TruckTable;
