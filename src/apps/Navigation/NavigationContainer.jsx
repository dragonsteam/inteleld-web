import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

// import { useAppContext } from '@/context/appContext';

// import useResponsive from '@/hooks/useResponsive';

import {
  SettingOutlined,
  EnvironmentOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  FileOutlined,
  ShopOutlined,
  FilterOutlined,
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
      label: <Link to={'/'}>Dashboard</Link>,
    },
    {
      key: 'track',
      icon: <EnvironmentOutlined />,
      label: <Link to={'/track'}>Tracking</Link>,
    },
    {
      key: 'driver-log',
      icon: <FileOutlined />,
      label: <Link to={'/driver-log'}>Driver Logs</Link>,
    },
    {
      key: 'drivers',
      icon: <UserOutlined />,
      label: <Link to={'/drivers'}>Drivers</Link>,
    },
    {
      key: 'company',
      icon: <ShopOutlined />,
      label: <Link to={'/company'}>Companies</Link>,
    },
    {
      key: 'lead',
      icon: <FilterOutlined />,
      label: <Link to={'/lead'}>Leads</Link>,
    },
    {
      key: 'invoice',
      icon: <ContainerOutlined />,
      label: <Link to={'/invoice'}>Invoices</Link>,
    },
    {
      key: 'quote',
      icon: <FileSyncOutlined />,
      label: <Link to={'/quote'}>Proforma Invoices</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to={'/payment'}>Payments</Link>,
    },
    {
      key: 'employee',
      icon: <UserOutlined />,
      label: <Link to={'/employee'}>Employee</Link>,
    },

    {
      label: 'Settings',
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'admin',
          // icon: <TeamOutlined />,
          label: <Link to={'/admin'}>Admin</Link>,
        },
        {
          key: 'generalSettings',
          label: <Link to={'/settings'}>Settings</Link>,
        },
        {
          key: 'paymentMode',
          label: <Link to={'/payment/mode'}>Payment Mode</Link>,
        },
        {
          key: 'taxes',
          label: <Link to={'/taxes'}>Taxes</Link>,
        },
        {
          key: 'about',
          label: <Link to={'/about'}>About</Link>,
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
        {/* <img src={logoIcon} alt="Logo" style={{ marginLeft: '-5px', height: '40px' }} /> */}
        <h1>Logo here</h1>
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
