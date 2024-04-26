import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'antd';

import { register } from '@/redux/auth/actions';
import { selectAuth, selectErrorFields } from '@/redux/auth/selector';
import RegisterForm from '@/forms/RegisterForm';
import ErrorList from '@/forms/ErrorList';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

export default function Register() {
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const resErrors = useSelector(selectErrorFields);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(register({ registerData: values }));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
  }, [isSuccess]);

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <Form
          layout="vertical"
          name="normal_register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <RegisterForm />

          <ErrorList errors={resErrors || {}} />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              // loading={isLoading}
              size="large"
            >
              Register
            </Button>
          </Form.Item>
          <p className="login-form-msg">
            Or <a href="/login">Login with existing Account</a>
          </p>
        </Form>
      </Loading>
    );
  };

  return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Register" />;
}
