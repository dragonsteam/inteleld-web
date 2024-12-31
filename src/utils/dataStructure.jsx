import { Switch, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { formatUrl } from './helpers';

export function dataForTable({ fields }) {
  let columns = [];

  Object.keys(fields).forEach((key) => {
    let field = fields[key];
    const fieldLabel = field.label || key;
    const keyIndex = field.dataIndex || [key];

    const component = {
      boolean: {
        title: fieldLabel,
        dataIndex: keyIndex,
        onCell: () => ({
          props: {
            style: {
              width: '60px',
            },
          },
        }),
        render: (_, record) => (
          <Switch
            checked={record[key]}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        ),
      },
      select: {
        title: fieldLabel,
        dataIndex: keyIndex,
        render: (_, record) => {
          const selectedOption = field.options.find((x) => x.value === record[key]);
          if (field.renderAsTag) {
            return (
              <Tag bordered={false} color={selectedOption?.color}>
                {record[key] && selectedOption.label}
              </Tag>
            );
          } else return record[key] && selectedOption.label;
        },
      },
      link: {
        render: (_, record) => {
          return <Link to={formatUrl(field.url, record)}>{field.label || field.url}</Link>;
        },
      },
    };

    const defaultComponent = {
      title: fieldLabel,
      dataIndex: keyIndex,
    };

    const type = field.type;

    if (!field.write_only && !field.hide_on_table) {
      Object.keys(component).includes(type)
        ? columns.push(component[type])
        : columns.push(defaultComponent);
    }
  });

  return columns;
}
