import { STATES, FUEL_TYPES } from '@/config/constants';

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
  },
  license_state: {
    type: 'select',
    label: 'License State',
    options: STATES,
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
  },
  notes: {
    type: 'string',
    label: 'Notes',
  },
  eld_device: {
    type: 'string',
    read_only: true,
  },
};
