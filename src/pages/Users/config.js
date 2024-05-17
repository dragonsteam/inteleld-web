export const USER_ROLES = [
  { value: 1, name: 'Company Owner' },
  { value: 2, name: 'Company Admin' },
  { value: 3, name: 'Dispatcher' },
  { value: 4, name: 'Updater' },
  { value: 5, name: 'Accountant' },
  { value: 6, name: 'Safety Manager' },
  { value: 7, name: 'Fleet Manager' },
  { value: 8, name: 'HR Manager' },
  { value: 9, name: 'ELD Operator' },
  { value: 10, name: 'Guest' },
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
