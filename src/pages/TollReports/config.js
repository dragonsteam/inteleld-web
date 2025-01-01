export const REPORT_STATUSES = [
  { value: 1, label: 'Waiting for process', color: 'magenta' },
  { value: 2, label: 'Report is being processed', color: 'purple' },
  { value: 3, label: 'All Good', color: 'green' },
  { value: 4, label: 'Has Errors', color: 'yellow' },
];

export const fields = {
  report_file: {
    type: 'file',
    label: 'Report File',
    required: true,
  },
  records: {
    type: 'link',
    label: 'Records',
    url: '/toll-reports/<id>/records',
    is_external_url: false,
    read_only: true,
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
