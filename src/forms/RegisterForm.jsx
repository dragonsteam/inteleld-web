import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, ShopOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

export default function RegisterForm() {
  return (
    <div>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
          {
            type: 'text',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" size="large" />
      </Form.Item>
      <Form.Item
        label="Company Name"
        name="company_name"
        rules={[
          {
            required: true,
          },
          {
            type: 'text',
          },
        ]}
      >
        <Input prefix={<ShopOutlined className="site-form-item-icon" />} type="text" size="large" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
          {
            type: 'text',
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{'Remember me'}</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/forgetpassword">
          {'Forgot password'}
        </a>
      </Form.Item>
    </div>
  );
}
