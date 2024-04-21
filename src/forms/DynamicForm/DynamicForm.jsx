import { useContext, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
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
          let field = fields[key];

          if (field.read_only) return; // skip read only field

          return <FormElement key={index} field={field} name={key} />;
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

function FormElement({ field, name }) {
  return (
    <Form.Item
      label={name}
      name={name}
      rules={[
        {
          required: field.required || false,
        },
      ]}
    >
      <Input autoComplete="off" />
    </Form.Item>
  );
}
