import { STATES } from '@/config/constants';

const CUSTOMER_TYPES = [
  { value: 1, label: 'Broker' },
  { value: 2, label: 'Carrier' },
  { value: 3, label: 'Shipper' },
];

export const fields = {
  name: {
    type: 'string',
    label: 'Name',
    required: true,
  },
  customer_id: {
    type: 'number',
    label: 'Customer ID',
  },
  type: {
    type: 'select',
    label: 'Customer type',
    options: CUSTOMER_TYPES,
  },
  website: {
    type: 'url',
    label: 'Website',
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
  postal_code: {
    type: 'string',
    label: 'Postal Code',
  },
  is_fmcsa_verified: {
    type: 'boolean',
    label: 'FMCSA verified',
    defaultValue: false,
  },
};
