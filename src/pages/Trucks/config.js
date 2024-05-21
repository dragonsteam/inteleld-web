import { STATES } from '@/config/constants';

const FUEL_TYPES = [
  { value: 1, label: 'Diesel' },
  { value: 2, label: 'Gasoline' },
  { value: 3, label: 'Propane' },
  { value: 4, label: 'Liquid Natural Gas' },
  { value: 5, label: 'Compressed Natural Gas' },
  { value: 6, label: 'Methanol' },
  { value: 7, label: 'E-85' },
  { value: 8, label: 'M-85' },
  { value: 9, label: 'A55' },
  { value: 10, label: 'Biodisel' },
  { value: 11, label: 'Other' },
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
    type: 'number',
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
    type: 'textarea',
    label: 'Notes',
  },
  eld_device: {
    type: 'string',
    label: 'ELD Device',
    read_only: true,
    hide_on_table: true,
  },
};
