import { Form, Input, Select } from 'antd';

export default function DynamicForm({ fields }) {
  return (
    <div>
      {Object.keys(fields).map((key, index) => {
        const field = fields[key];
        const fieldLabel = field.label || key;

        if (field.read_only) return; // skip read only field

        return <FormElement key={index} field={field} fieldName={key} label={fieldLabel} />;
      })}
    </div>
  );
}

function FormElement({ field, fieldName, label }) {
  const options = field.options || [];
  const formItemComponent = {
    string: <Input autoComplete="off" />,
    email: <Input autoComplete="off" />,
    password: <Input.Password autoComplete="off" />,
    select: (
      <Select showSearch>
        {options.map((option) => {
          return (
            <Select.Option key={option.value} value={option.value}>
              {option.name}
            </Select.Option>
          );
        })}
      </Select>
    ),
  };

  return (
    <Form.Item
      label={label}
      name={fieldName}
      rules={[
        {
          type: field.type || 'string',
          required: field.required || false,
        },
      ]}
    >
      {formItemComponent[field.type]}
    </Form.Item>
  );
}
