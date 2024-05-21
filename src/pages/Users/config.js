export const USER_ROLES = [
  { value: 1, label: 'Company Owner' },
  { value: 2, label: 'Company Admin' },
  { value: 3, label: 'Dispatcher' },
  { value: 4, label: 'Updater' },
  { value: 5, label: 'Accountant' },
  { value: 6, label: 'Safety Manager' },
  { value: 7, label: 'Fleet Manager' },
  { value: 8, label: 'HR Manager' },
  { value: 9, label: 'ELD Operator' },
  { value: 10, label: 'Guest' },
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
  },
  email: {
    type: 'email',
    label: 'Email',
    required: true,
  },
  password: {
    type: 'password',
    label: 'Password',
    required: true,
    hide_on_table: true,
  },
  role: {
    type: 'select',
    label: 'Role',
    options: USER_ROLES,
    required: true,
    // hide_on_table: true,
  },
};
