export const fields = {
  report_file: {
    type: 'file',
    label: 'Report File',
    required: true,
  },
  notes: {
    type: 'textarea',
    label: 'Notes',
  },
  created_at: {
    type: 'datetime',
    label: 'Created At',
    read_only: true,
  },
};
