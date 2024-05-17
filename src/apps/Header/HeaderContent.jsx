import { Link } from 'react-router-dom';
import { Dropdown, Layout, Avatar } from 'antd';
import { UserOutlined, ToolOutlined, LogoutOutlined } from '@ant-design/icons';

export default function HeaderContent() {
  const items = [
    {
      icon: <UserOutlined />,
      key: 'settingProfile',
      label: <Link to={'/profile'}>Profile</Link>,
    },
    {
      icon: <ToolOutlined />,
      key: 'settingApp',
      label: <Link to={'/settings'}>Settings</Link>,
    },
    {
      type: 'divider',
    },
    {
      icon: <LogoutOutlined />,
      key: 'logout',
      label: <Link to={'/logout'}>Log out</Link>,
    },
  ];

  return (
    <Layout.Header
      style={{
        padding: '20px',
        background: '#f9fafc',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        gap: ' 15px',
      }}
    >
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        placement="bottomRight"
        stye={{ width: '280px', float: 'right' }}
      >
        <Avatar
          className="last"
          // src={currentAdmin?.photo ? FILE_BASE_URL + currentAdmin?.photo : undefined}
          src={undefined}
          style={{
            color: '#f56a00',
            // backgroundColor: currentAdmin?.photo ? 'none' : '#fde3cf',
            backgroundColor: '#fde3cf',
            boxShadow: 'rgba(150, 190, 238, 0.35) 0px 0px 10px 2px',
            float: 'right',
            cursor: 'pointer',
          }}
          size="large"
        >
          {/* {currentAdmin?.name?.charAt(0)?.toUpperCase()} */}A
        </Avatar>
      </Dropdown>
    </Layout.Header>
  );
}
