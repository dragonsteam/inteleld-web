export function dataForTable({ fields }) {
  let columns = [];

  Object.keys(fields).forEach((key) => {
    let field = fields[key];
    const keyIndex = field.dataIndex ? field.dataIndex : [key];

    const defaultComponent = {
      title: field.label ? field.label : key,
      dataIndex: keyIndex,
    };

    columns.push(defaultComponent);
  });

  return columns;
}
