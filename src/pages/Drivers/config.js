export const fields = {
  first_name: {
    type: 'string',
    label: 'First Name',
    required: true,
  },
  last_name: {
    type: 'string',
    label: 'Last Name',
    required: true,
  },
  email: {
    type: 'email',
    label: 'Email',
    required: true,
  },
  cdl_number: {
    type: 'string',
    label: 'CDL Number',
    required: true,
  },
  password: {
    type: 'password',
    label: 'Password',
    required: true,
    write_only: true,
  },
  co_driver: {
    type: 'string',
    label: 'Co Driver',
  },
  truck: {
    type: 'string',
    label: 'Truck',
  },
  // company: {
  //   type: 'search',
  //   entity: 'company',
  //   renderAsTag: true,
  //   redirectLabel: 'Add New Company',
  //   withRedirect: true,
  //   urlToRedirect: '/company',
  //   displayLabels: ['name'],
  //   searchFields: 'name',
  //   dataIndex: ['company', 'name'],
  // },
  phone: {
    type: 'string',
    label: 'Phone',
  },
  app_version: {
    type: 'string',
    label: 'App Version',
    read_only: true,
  },
  // bio: {
  //   type: 'string',
  // },
  // idCardNumber: {
  //   type: 'string',
  // },
  // idCardType: {
  //   type: 'string',
  // },
  // securitySocialNbr: {
  //   type: 'string',
  // },
  // taxNumber: {
  //   type: 'string',
  // },
  // birthday: {
  //   type: 'date',
  // },
  // birthplace: {
  //   type: 'string',
  // },
  // gender: {
  //   type: 'select',
  //   options: [
  //     {
  //       value: 'male',
  //       label: 'Male',
  //     },
  //     {
  //       value: 'female',
  //       label: 'Female',
  //     },
  //   ],
  // },
  // bankName: {
  //   type: 'string',
  // },
  // bankIban: {
  //   type: 'string',
  // },
  // bankSwift: {
  //   type: 'string',
  // },
  // bankNumber: {
  //   type: 'string',
  // },
  // bankRouting: {
  //   type: 'string',
  // },
  // address: {
  //   type: 'string',
  // },
  // city: {
  //   type: 'string',
  // },
  // State: {
  //   type: 'string',
  // },
  // postalCode: {
  //   type: 'number',
  // },
  // website: {
  //   type: 'string',
  // },
};
