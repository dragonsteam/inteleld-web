import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

// import { useAppContext } from '@/context/appContext';

import logoIcon from '@/style/images/logo-icon.svg';
import logoText from '@/style/images/logo-text.svg';

// import useResponsive from '@/hooks/useResponsive';

import {
  SettingOutlined,
  EnvironmentOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  FileOutlined,
  ShopOutlined,
  FilterOutlined,
  WalletOutlined,
  ReconciliationOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
// import { selectLangDirection } from '@/redux/translate/selectors';

const { Sider } = Layout;

export default function Navigation() {
  // const { isMobile } = useResponsive();
  const isMobile = false;

  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

function Sidebar({ collapsible, isMobile = false }) {
  let location = useLocation();

  // const { state: stateApp, appContextAction } = useAppContext();
  // const { isNavMenuClose } = stateApp;
  // const { navMenu } = appContextAction;
  const isNavMenuClose = false;

  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));

  // const translate = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/'}>dashboard</Link>,
    },
    {
      key: 'track',
      icon: <EnvironmentOutlined />,
      label: <Link to={'/track'}>tracking</Link>,
    },
    {
      key: 'driver-log',
      icon: <FileOutlined />,
      label: <Link to={'/driver-log'}>driver logs</Link>,
    },
    {
      key: 'drivers',
      icon: <UserOutlined />,
      label: <Link to={'/drivers'}>drivers</Link>,
    },
    {
      key: 'company',
      icon: <ShopOutlined />,
      label: <Link to={'/company'}>companies</Link>,
    },
    {
      key: 'lead',
      icon: <FilterOutlined />,
      label: <Link to={'/lead'}>leads</Link>,
    },
    {
      key: 'invoice',
      icon: <ContainerOutlined />,
      label: <Link to={'/invoice'}>invoices</Link>,
    },
    {
      key: 'quote',
      icon: <FileSyncOutlined />,
      label: <Link to={'/quote'}>proforma invoices</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to={'/payment'}>payments</Link>,
    },
    {
      key: 'employee',
      icon: <UserOutlined />,
      label: <Link to={'/employee'}>employee</Link>,
    },

    {
      label: 'Settings',
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'admin',
          // icon: <TeamOutlined />,
          label: <Link to={'/admin'}>admin</Link>,
        },
        {
          key: 'generalSettings',
          label: <Link to={'/settings'}>settings</Link>,
        },
        {
          key: 'currency',
          label: <Link to={'/settings/currency'}>currencies</Link>,
        },

        // {
        //   key: 'emailTemplates',
        //   label: <Link to={'/email'}>email_templates</Link>,
        // },
        {
          key: 'paymentMode',
          label: <Link to={'/payment/mode'}>payments_mode</Link>,
        },
        {
          key: 'taxes',
          label: <Link to={'/taxes'}>taxes</Link>,
        },
        {
          key: 'about',
          label: <Link to={'/about'}>about</Link>,
        },
      ],
    },
  ];

  useEffect(() => {
    if (location)
      if (currentPath !== location.pathname) {
        if (location.pathname === '/') {
          setCurrentPath('dashboard');
        } else setCurrentPath(location.pathname.slice(1));
      }
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      width={256}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: isMobile ? 'absolute' : 'relative',
        bottom: '20px',
        ...(!isMobile && {
          background: 'none',
          border: 'none',
          ['left']: '20px',
          top: '20px',
          borderRadius: '8px',
        }),
      }}
      theme={'light'}
    >
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logoIcon} alt="Logo" style={{ marginLeft: '-5px', height: '40px' }} />

        {!showLogoApp && (
          <img
            src={logoText}
            alt="Logo"
            style={{
              marginTop: '3px',
              marginLeft: '10px',
              height: '38px',
            }}
          />
        )}
      </div>
      <Menu
        items={items}
        mode="inline"
        theme={'light'}
        selectedKeys={[currentPath]}
        style={{
          background: 'none',
          border: 'none',
          width: 256,
        }}
      />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ ['marginLeft']: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={250}
        contentWrapperStyle={{
          boxShadow: 'none',
        }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}
