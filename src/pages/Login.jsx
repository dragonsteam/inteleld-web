import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'antd';

import LoginForm from '@/forms/LoginForm';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const Login = () => {
  const navigate = useNavigate();

  const FormContainer = () => {
    return (
      <Loading isLoading={false}>
        <Form
          layout="vertical"
          name="normal_login"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <LoginForm />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              // loading={isLoading}
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Loading>
    );
  };

  return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign in" />;
};

export default Login;
