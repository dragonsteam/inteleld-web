import { useContext, useEffect } from 'react';
import { Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { crud } from '@/redux/crud/actions';
import { selectCreatedItem, selectErrorFields } from '@/redux/crud/selector';
import { useCrudContext } from '@/context/crud';
import Loading from '@/components/Loading';
import ErrorList from '@/forms/ErrorList';

export default function CreateForm({ config, formElements }) {
  const { entity } = config;
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const { state, crudContextAction } = useCrudContext();
  const { panel } = crudContextAction;
  const { isEditBoxOpen } = state;
  const [form] = Form.useForm();

  const onSubmit = (fieldsValue) => {
    console.log('values: ', fieldsValue);

    Object.keys(fieldsValue).map((key) => {
      if (fieldsValue[key]?.file) {
        fieldsValue[key] = fieldsValue[key].file.originFileObj;
      }
    });
    dispatch(crud.create({ entity, data: fieldsValue }));
  };

  const resErrors = useSelector(selectErrorFields);

  useEffect(() => {
    if (isSuccess) {
      panel.close();
      form.resetFields();
      dispatch(crud.resetAction({ actionType: 'create' }));
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  if (isEditBoxOpen) return <></>;
  return (
    <Loading isLoading={isLoading}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
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
