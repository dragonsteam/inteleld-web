import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'antd';

import { useCrudContext } from '@/context/crud';
import { crud } from '@/redux/crud/actions';
import { selectUpdatedItem } from '@/redux/crud/selector';
import Loading from '@/components/Loading';

export default function UpdateForm({ config, formElements }) {
  let { entity } = config;
  const dispatch = useDispatch();
  const { current, isLoading, isSuccess } = useSelector(selectUpdatedItem);

  const { state, crudContextAction } = useCrudContext();
  const { panel } = crudContextAction;
  const { isEditBoxOpen } = state;

  const [form] = Form.useForm();

  const handleCancel = () => {
    panel.close();
    form.resetFields();
  };

  const onSubmit = (fieldValues) => {
    const id = current.id;

    dispatch(crud.update({ entity, id, jsonData: fieldValues }));
  };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({ ...current });
  }, [current]);

  useEffect(() => {
    if (isSuccess) {
      panel.close();
      form.resetFields();
      dispatch(crud.resetAction({ actionType: 'update' }));
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  //   const show = isEditBoxOpen ? { display: 'block' } : { display: 'none' };

  if (!isEditBoxOpen) return <></>;
  return (
    <Loading isLoading={isLoading}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {formElements}
        <Form.Item
          style={{
            display: 'inline-block',
            paddingRight: '5px',
          }}
        >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
        <Form.Item
          style={{
            display: 'inline-block',
            paddingLeft: '5px',
          }}
        >
          <Button onClick={handleCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    </Loading>
  );
}
