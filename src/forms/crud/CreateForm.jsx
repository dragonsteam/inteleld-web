import { useContext, useEffect } from 'react';
import { Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { crud } from '@/redux/crud/actions';
import { selectCreatedItem, selectErrorFields } from '@/redux/crud/selector';
import { useCrudContext } from '@/context/crud';
import Loading from '@/components/Loading';
import ErrorList from '@/forms/ErrorList';

async function getFileBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result.split(',')[1]); // Extract Base64 part
    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
}

export default function CreateForm({ config, formElements }) {
  const { entity } = config;
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const { state, crudContextAction } = useCrudContext();
  const { panel } = crudContextAction;
  const { isEditBoxOpen } = state;
  const [form] = Form.useForm();

  let withUpload = false;

  const onSubmit = (fieldsValue) => {
    // watch for files attached
    Object.keys(fieldsValue).map((key) => {
      if (fieldsValue[key]?.file) {
        withUpload = true;

        const originFileObj = fieldsValue[key].fileList[0].originFileObj;
        fieldsValue[key] = originFileObj;
      }
    });

    dispatch(crud.create({ entity, data: fieldsValue, withUpload }));
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
