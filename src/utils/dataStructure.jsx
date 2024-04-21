export function dataForTable({ fields }) {
  let columns = [];

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const filedLabel = field.label || key;
    const keyIndex = field.dataIndex || [key];

    const defaultComponent = {
      title: filedLabel,
      dataIndex: keyIndex,
    };

    columns.push(defaultComponent);
  });

  return columns;
}
