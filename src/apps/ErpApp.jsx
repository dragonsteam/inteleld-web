import { Layout } from 'antd';

import AppRouter from '@/router/AppRouter';
import Navigation from '@/apps/Navigation/NavigationContainer';
import HeaderContent from './Header/HeaderContent';

export default function ErpApp() {
  const { Content } = Layout;
  const isMobile = false;

  return (
    <Layout hasSider style={{ flexDirection: 'row' }}>
      <Navigation />
      {!isMobile && (
        <Layout>
          <HeaderContent />
          <Content
            style={{
              margin: '5px auto 30px',
              overflow: 'initial',
              width: '100%',
              padding: '0 50px',
              // maxWidth: 1400,
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      )}
    </Layout>
  );
}
