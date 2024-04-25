import { useContext, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { crud } from '@/redux/crud/actions';
import { selectCreatedItem } from '@/redux/crud/selector';
import Loading from '@/components/Loading';
import { CrudContext } from '@/context/crud';

export default function DynamicForm({ config }) {
  const { fields, entity } = config;
  const dispatch = useDispatch();
  const { panel } = useContext(CrudContext);

  const onSubmit = (fieldsValue) => {
    dispatch(crud.create({ entity, data: fieldsValue }));
  };

  const { isLoading, isSuccess } = useSelector(selectCreatedItem);

  useEffect(() => {
    if (isSuccess) {
      panel.close();
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  return (
    <Loading isLoading={isLoading}>
      <Form layout="vertical" onFinish={onSubmit}>
        {Object.keys(fields).map((key, index) => {
          const field = fields[key];
          const fieldLabel = field.label || key;

          if (field.read_only) return; // skip read only field

          return <FormElement key={index} field={field} fieldName={key} label={fieldLabel} />;
        })}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Loading>
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
