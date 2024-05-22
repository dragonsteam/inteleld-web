export const USER_ROLES = [
  { value: 1, label: 'Company Owner', color: 'magenta' },
  { value: 2, label: 'Company Admin', color: 'purple' },
  { value: 3, label: 'Dispatcher', color: 'geekblue' },
  { value: 4, label: 'Updater', color: 'blue' },
  { value: 5, label: 'Accountant', color: 'cyan' },
  { value: 6, label: 'Safety Manager', color: 'green' },
  { value: 7, label: 'Fleet Manager', color: 'lime' },
  { value: 8, label: 'HR Manager', color: 'yellow' },
  { value: 9, label: 'ELD Operator', color: 'gold' },
  { value: 10, label: 'Guest', color: 'volcano' },
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
    renderAsTag: true,
    // hide_on_table: true,
  },
};
