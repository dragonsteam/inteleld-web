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
  license_number: { type: 'string' },
  license_state: { type: 'string' },
  vin_number: { type: 'string' },
  fuel_type: { type: 'string' },
  notes: { type: 'string' },
  eld_device: {
    type: 'string',
    read_only: true,
  },
};
