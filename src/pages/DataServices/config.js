export const DATA_SERVICE_NAMES = [{ value: 'sa', label: 'Samsara' }];

export const fields = {
  name: {
    type: 'string',
    label: 'Name',
    required: true,
  },
  service_name: {
    type: 'select',
    label: 'Service Name',
    options: DATA_SERVICE_NAMES,
    required: true,
  },
  key: {
    type: 'string',
    label: 'API key',
    required: true,
  },
};
