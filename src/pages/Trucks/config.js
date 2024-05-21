import { STATES } from '@/config/constants';

const FUEL_TYPES = [
  { value: 1, name: 'Diesel' },
  { value: 2, name: 'Gasoline' },
  { value: 3, name: 'Propane' },
  { value: 4, name: 'Liquid Natural Gas' },
  { value: 5, name: 'Compressed Natural Gas' },
  { value: 6, name: 'Methanol' },
  { value: 7, name: 'E-85' },
  { value: 8, name: 'M-85' },
  { value: 9, name: 'A55' },
  { value: 10, name: 'Biodisel' },
  { value: 11, name: 'Other' },
];

export const fields = {
  unit_number: {
    type: 'string',
    label: 'Unit Number',
    required: true,
  },
  make: {
    type: 'string',
    label: 'Make',
  },
  model: {
    type: 'string',
    label: 'Model',
  },
  year: {
    type: 'string',
    label: 'Year',
  },
  license_number: {
    type: 'string',
    label: 'License Number',
    hide_on_table: true,
  },
  license_state: {
    type: 'select',
    label: 'License State',
    options: STATES,
    hide_on_table: true,
  },
  vin_number: {
    type: 'string',
    label: 'VIN Number',
  },
  fuel_type: {
    type: 'select',
    label: 'Fuel Type',
    options: FUEL_TYPES,
    // defaultValue: 'di',
    hide_on_table: true,
  },
  notes: {
    type: 'string',
    label: 'Notes',
  },
  eld_device: {
    type: 'string',
    label: 'ELD Device',
    read_only: true,
    hide_on_table: true,
  },
};
