import { useState, useReducer } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Box,
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

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("first_name", {
    header: "First name",
  }),
  columnHelper.accessor("last_name", {
    header: "Last name",
  }),
  columnHelper.accessor("username", {
    header: "Username",
  }),
  columnHelper.accessor("co_driver", {
    header: "Co Driver",
  }),
  columnHelper.accessor("truck_id", {
    header: "Truck",
  }),
  columnHelper.accessor("app_version", {
    header: "App version",
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

const DriverTable = ({ data: driver_data }) => {
  const [data, _setData] = useState(() =>
    driver_data ? [...driver_data] : []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
              <Td>action</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DriverTable;
