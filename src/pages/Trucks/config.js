export const fields = {
  unit_number: {
    type: 'string',
    required: true,
  },
  make: { type: 'string' },
  model: { type: 'string' },
  year: { type: 'string' },
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
