import { DATA_SERVICE_NAMES } from '@/config/constants';

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
