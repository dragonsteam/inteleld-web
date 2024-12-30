export const REPORT_STATUSES = [
  { value: 1, label: 'Waiting for process', color: 'magenta' },
  { value: 2, label: 'Report is being processed', color: 'purple' },
  { value: 3, label: 'Processed', color: 'green' },
];

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
  status: {
    type: 'select',
    label: 'Status',
    options: REPORT_STATUSES,
    read_only: true,
    renderAsTag: true,
  },
  created_at: {
    type: 'datetime',
    label: 'Created At',
    read_only: true,
  },
};
