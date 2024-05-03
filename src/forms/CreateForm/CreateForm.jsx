import { useContext, useEffect } from 'react';
import { Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { crud } from '@/redux/crud/actions';
import { selectCreatedItem, selectErrorFields } from '@/redux/crud/selector';
import { CrudContext } from '@/context/crud';
import Loading from '@/components/Loading';
import ErrorList from '@/forms/ErrorList';

export default function CreateForm({ config, formElements }) {
  const { fields, entity } = config;

  const dispatch = useDispatch();
  const { panel } = useContext(CrudContext);

  const onSubmit = (fieldsValue) => {
    dispatch(crud.create({ entity, data: fieldsValue }));
  };

  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const resErrors = useSelector(selectErrorFields);

  useEffect(() => {
    if (isSuccess) {
      panel.close();
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  return (
    <Loading isLoading={isLoading}>
      <Form layout="vertical" onFinish={onSubmit}>
        {formElements}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <ErrorList errors={resErrors || {}} />
        </Form.Item>
      </Form>
    </Loading>
  );
}
