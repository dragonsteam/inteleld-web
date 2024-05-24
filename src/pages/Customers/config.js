import { STATES } from '@/config/constants';

const CUSTOMER_TYPES = [
  { value: 1, label: 'Broker', color: 'blue' },
  { value: 2, label: 'Carrier', color: 'green' },
  { value: 3, label: 'Shipper', color: 'magenta' },
];

export const fields = {
  name: {
    type: 'string',
    label: 'Company Name',
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
    renderAsTag: true,
    defaultValue: 1, // Broker
  },
  contact_number: {
    type: 'string',
    label: 'Contact Number',
  },
  contact_email: {
    type: 'email',
    label: 'Contact Email',
  },
  // website: {
  //   type: 'url',
  //   label: 'Website',
  // },
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
    renderAsTag: true,
  },
  postal_code: {
    type: 'string',
    label: 'ZIP Code',
  },
  is_fmcsa_verified: {
    type: 'boolean',
    label: 'FMCSA verified',
    defaultValue: false,
  },
};
