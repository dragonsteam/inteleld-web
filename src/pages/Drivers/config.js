import { STATES } from "@/config/constants";

const DRIVER_STATUSES = [
  { value: 1, label: 'Available'},
  { value: 2, label: 'Assigned'},
  { value: 3, label: 'Dispatched'},
  { value: 4, label: 'In-Transit'},
  { value: 5, label: 'Shop'},
  { value: 6, label: 'Rest'},
  { value: 7, label: 'Home'},
  { value: 8, label: 'Inactive'},
];

export const fields = {
  first_name: {
    type: 'string',
    label: 'First Name',
    required: true,
  },
  last_name: {
    type: 'string',
    label: 'Last Name',
    required: true,
  },
  status: {
    type: 'select',
    label: 'Status',
    options: DRIVER_STATUSES,
    read_only: true, 
  },
  contact_number: {
    type: 'string',
    label: 'Contact Number',
  },
  contact_email: {
    type: 'string',
    label: 'Contact Email',
  },
  truck: {
    type: 'number',
    label: 'Truck',
  },
  trailer: {
    type: 'number',
    label: 'Trailer',
  },
  dispatcher: {
    type: 'number',
    label: 'Dispatcher',
  },
  co_driver: {
    type: 'number',
    label: 'Co Driver',
  },
  cdl_number: {
    type: 'string',
    label: 'CDL Number',
  },
  cdl_state: {
    type: 'select',
    label: 'CDL State',
    options: STATES,
    hide_on_table: true,
  },
  bith_date: {
    type: 'date',
    label: 'Birth Date',
  },
  address: {
    type: 'string',
    label: 'Address',
  },
  city: {
    type: 'string',
    label: 'City',
  },
  state: {
    type: 'select',
    label: 'State',
    options: STATES,
  },
  notes: {
    type: 'textarea',
    label: 'City',
  },
};
