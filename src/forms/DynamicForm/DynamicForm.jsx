import { Form, Input, InputNumber, Switch, Select, DatePicker } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function DynamicForm({ fields }) {
  return (
    <div>
      {Object.keys(fields).map((key, index) => {
        let field = fields[key];
        field.name = key;
        if (!field.label) field.label = key;

        if (field.read_only) return; // skip read only field
        return <FormElement key={index} field={field} />;
      })}
    </div>
  );
}

function FormElement({ field }) {
  // const { dateFormat } = useDate();

  const SelectComponent = () => (
    <Form.Item
      label={field.label}
      name={field.name}
      rules={[
        {
          required: field.required || false,
          // type: fieldType[field.type] ?? 'any',
        },
      ]}
    >
      <Select
        showSearch={field.showSearch}
        defaultValue={field.defaultValue}
        style={{
          width: '100%',
        }}
      >
        {field.options?.map((option, index) => {
          return (
            <Select.Option key={`${index}`} value={option.value}>
              {option.label}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
  );

  const formItemComponent = {
    select: <SelectComponent />,
  };

  const compunedComponent = {
    string: (
      <Input autoComplete="off" maxLength={field.maxLength} defaultValue={field.defaultValue} />
    ),
    url: <Input addonBefore="http://" autoComplete="off" placeholder="www.example.com" />,
    textarea: <Input.TextArea rows={4} />,
    email: <Input autoComplete="off" placeholder="email@example.com" />,
    number: <InputNumber style={{ width: '100%' }} />,
    phone: <Input style={{ width: '100%' }} placeholder="+1 123 456 789" />,
    boolean: (
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultValue={true}
      />
    ),
    // date: (
    //   <DatePicker
    //     placeholder={translate('select_date')}
    //     style={{ width: '100%' }}
    //     format={dateFormat}
    //   />
    // ),
  };

  const fieldType = {
    string: 'string',
    textarea: 'string',
    number: 'number',
    phone: 'string',
    //boolean: 'boolean',
    // method: 'method',
    // regexp: 'regexp',
    // integer: 'integer',
    // float: 'float',
    // array: 'array',
    // object: 'object',
    // enum: 'enum',
    // date: 'date',
    url: 'url',
    website: 'url',
    email: 'email',
  };

  const customFormItem = formItemComponent[field.type];

  let renderComponent = compunedComponent[field.type];
  if (!renderComponent) {
    renderComponent = compunedComponent['string'];
  }

  if (customFormItem) return <>{customFormItem}</>;
  else {
    return (
      <Form.Item
        label={field.label}
        name={field.name}
        rules={[
          {
            required: field.required || false,
            type: fieldType[field.type] ?? 'any',
          },
        ]}
        valuePropName={field.type === 'boolean' ? 'checked' : 'value'}
      >
        {renderComponent}
      </Form.Item>
    );
  }
}
